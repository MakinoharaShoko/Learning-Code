
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
  CRLF
}

const lexer = buildLexer([
  [true, /^[ ]+/g, TokenKind.Space],
  [true, /^\-/g, TokenKind.Dash],
  [true, /^\d+/g, TokenKind.Number], // 数字模式
  [true, /^true|false/g, TokenKind.Boolean], // 布尔值模式
  [true, /^[a-zA-Z\d]+\b/g, TokenKind.Identifier], // 标识符模式
  [true, /^\:/g, TokenKind.Colon], // 冒号模式
  [true, /^\=/g, TokenKind.Equals], // 等号模式
  [true, /^\;/g, TokenKind.SemiColon], // 分号模式
  [true, /^\n/g, TokenKind.LF], // 等号模式
  [true, /^\r\n/g, TokenKind.CRLF], // 分号模式
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
  seq(
    tok(TokenKind.Space), tok(TokenKind.Dash)
  )
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
  console.log(value);
  const words = value;
  const validWords = words.filter(e => e?.type === 'word')
  const validValue = validWords.map(e=>e.value).reduce((prev, curr) => prev +' '+ curr, '')
  return { type: 'content', value: validValue }
}

function applyWord(value) {
  return { type: 'word', value: value.text }
}

CONTENT.setPattern(
  list_sc(apply(tok(TokenKind.Identifier), applyWord), tok(TokenKind.Space)))

function applyCtrl(value) {
  const parts = flattenDeep(value).filter(e => e?.type);
  return parts
}

CTRL.setPattern(
  apply(seq(
    apply(opt(apply(tok(TokenKind.Identifier), applyCommand)), applyCommand),
    apply(tok(TokenKind.Colon), applyColon),
    opt(apply(CONTENT, applyContent)),
    opt(ARGS),
    opt(COMMENT)
  ), applyCtrl)
)

COMMENT.setPattern(
  seq(tok(TokenKind.SemiColon), opt(CONTENT))
)

function applyLn(value) {
  const parts = flattenDeep(value).filter(e => e?.type);
  if (!parts.find(e => e.type === 'command')) return undefined
  return { type: 'line', value: parts }
}

LINE.setPattern(
  apply(alt(
    COMMENT, CTRL, CONTENT
  ), applyLn)
)

function applySctipt(value) {
  return value.filter(e => e?.type === 'line');
}

SCRIPT.setPattern(
  apply(list_sc(LINE, alt(tok(TokenKind.LF), tok(TokenKind.CRLF))), applySctipt)
);

const script = `WebGAL:Hello Im WebGALs next generation parser -arg1=1 -arg2=2 -arg3=true -arg4;comment
command:content1 -arg1=1 -arg2=2 -arg3=true -arg4;comment
command:content2 -arg1=1 -arg2=2 -arg3=true -arg4;comment`

const result = expectEOF(SCRIPT.parse(lexer.parse(script)))
console.log(result);

