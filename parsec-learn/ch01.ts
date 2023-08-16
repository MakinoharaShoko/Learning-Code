
import { Token, buildLexer, expectEOF, expectSingleResult, list_sc, lrec_sc, rep, rule, tok } from 'typescript-parsec';
import { alt, apply, kmid, opt, seq, str } from 'typescript-parsec';
import { flattenDeep } from 'lodash'

enum TokenKind {
  Space,
  Dash,
  Number,
  Boolean,
  Identifier,
  Colon,
  Equals,
  SemiColon,
  LF,
  CRLF,
  ARGST,
}

const lexer = buildLexer([
  [true, /^[ ]+/g, TokenKind.Space],
  [true, /^\-/g, TokenKind.Dash],
  [true, /^\d+/g, TokenKind.Number], // 数字模式
  [true, /^true|false/g, TokenKind.Boolean], // 布尔值模式
  [true, /^[^:;\s ]+/g, TokenKind.Identifier], // 标识符模式
  [true, /^\:/g, TokenKind.Colon], // 冒号模式
  [true, /^\=/g, TokenKind.Equals], // 等号模式
  [true, /^\;/g, TokenKind.SemiColon], // 分号模式
  [true, /^\n/g, TokenKind.LF], // 等号模式
  [true, /^\r\n/g, TokenKind.CRLF], // 分号模式
  [true, /^ -/g, TokenKind.ARGST]
]);

const CONTENT = rule();
const ARG = rule();
const ARGK = rule();
const ARGV = rule();
const ARGS = rule()
const CTRL = rule();
const COMMENT = rule();
const LINE = rule();
const SCRIPT = rule();
const ARG_START = rule();
const DIALOGUE = rule();

ARGK.setPattern(
  tok(TokenKind.Identifier)
)

function applyNumber(value) {
  return Number(value.text);
}

function applyBoolean(value) {
  switch (value.text) {
    case 'true': return true;
    case 'false': return false;
    default: return true;
  }
}

function applyString(value) {
  return value.text
}

ARGV.setPattern(
  alt(apply(tok(TokenKind.Boolean), applyBoolean), apply(tok(TokenKind.Number), applyNumber), apply(tok(TokenKind.Identifier), applyString))
)

function applyArgK(value) {
  return { type: 'arg', key: value.text, value: true }
}

function applyArgKv(value) {
  return { type: 'arg', key: value[0].text, value: value[2] };
}

ARG.setPattern(
  alt(
    apply(ARGK, applyArgK),
    apply(seq(ARGK, str('='), ARGV), applyArgKv)
  )
)



ARG_START.setPattern(
  tok(TokenKind.ARGST)
)

ARGS.setPattern(
  seq(ARG_START, list_sc(ARG, ARG_START))
)

function applyCommand(value) {
  if (!value) return undefined
  return { type: 'command', value: value.text, text: value.text }
}
function applyColon(value) {
  return { type: 'colon' }
}

function applyContent(value) {
  const words = value;
  const validWords = words.filter(e => e?.type === 'word')
  const validValue = validWords.map(e => e.value).reduce((prev, curr) => prev + ' ' + curr, '').trim()
  return { type: 'content', value: validValue }
}

function applyWord(value) {
  return { type: 'word', value: value.text }
}


CONTENT.setPattern(
  apply(list_sc(apply(tok(TokenKind.Identifier), applyWord), tok(TokenKind.Space)), applyContent)
)

function applyCtrl(value) {
  const parts = flattenDeep(value).filter(e => e?.type);
  return parts
}


DIALOGUE.setPattern(
  seq(
    opt(CONTENT),
    opt(ARGS),
    opt(COMMENT)
  )
)

CTRL.setPattern(
  apply(seq(
    apply(opt(apply(tok(TokenKind.Identifier), applyCommand)), applyCommand),
    apply(tok(TokenKind.Colon), applyColon),
    opt(CONTENT),
    opt(ARGS),
    opt(COMMENT)
  ), applyCtrl)
)

function applyCommentContent(value) {
  if (!value) return undefined;
  if (value?.type === 'content') return { type: 'comment', value: value.value };
}

function applyComment(value) {
  if (!value) return undefined
  return value.filter(e => e?.type === 'comment');
}

COMMENT.setPattern(
  apply(
    seq(
      tok(TokenKind.SemiColon),
      apply(opt(CONTENT), applyCommentContent)
    ), applyComment)
)

function applyLn(value) {
  if (Array.isArray(value)) {
    const parts = flattenDeep(value).
      filter(e => e?.type);
    if (!parts.find(e => e.type === 'command' || e.type === 'comment' || e.type === 'content')) return undefined
    return { type: 'line', value: parts }
  } else {
    if (value?.type === 'command' || value?.type === 'comment' || value?.type === 'content') {
      return { type: 'line', value: [value] }
    }
  }
}

LINE.setPattern(
  apply(alt(
    COMMENT, CTRL, DIALOGUE
  ), applyLn)
)

function applySctipt(value) {
  return value.filter(e => e?.type === 'line');
}

SCRIPT.setPattern(
  apply(list_sc(LINE, alt(tok(TokenKind.LF), tok(TokenKind.CRLF))), applySctipt)
);

const script = `WebGAL:Hello, I'm WebGAL's next generation parser. -arg1 -arg2=2 -arg3=true -arg4=Hello!;This is the comment.
;This is the comment
This is the dialog
This is the dialog with args -arg1 -arg2=true
This is the dialog with comments;comments are here
WebGAL: -arg arg1=true`

const result = expectEOF(SCRIPT.parse(lexer.parse(script)))
console.log(result);

