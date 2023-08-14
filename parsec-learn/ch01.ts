
import { Token, buildLexer, expectEOF, expectSingleResult, list_sc, lrec_sc, rep, rule, tok } from 'typescript-parsec';
import { alt, apply, kmid, opt, seq, str } from 'typescript-parsec';

enum TokenKind {
  Space, 
  Dash, 
  Number, 
  Boolean, 
  Identifier,
  Colon,
  Equals,
  SemiColon,
}

const lexer = buildLexer([
  [false, /^\s+/g, TokenKind.Space],
  [true, /^\-/g, TokenKind.Dash],
  [true, /^\d+/g, TokenKind.Number], // 数字模式
  [true, /^true|false/g, TokenKind.Boolean], // 布尔值模式
  [true, /^[a-zA-Z]+\b/g, TokenKind.Identifier], // 标识符模式
  [true, /^\:/g, TokenKind.Colon], // 冒号模式
  [true, /^\=/g, TokenKind.Equals], // 等号模式
  [true, /^\;/g, TokenKind.SemiColon], // 分号模式
]);

const CONTENT = rule();
const ARG = rule();
const ARGK = rule();
const ARGV = rule();
const CTRL = rule();
const COMMENT = rule();
const LINE = rule();
const SCRIPT = rule();
const ARG_START = rule();

ARGK.setPattern(
  tok(TokenKind.Identifier)
)

function applyNumber(value) {
  return +value;
}

ARGV.setPattern(
  alt(tok(TokenKind.Boolean), apply(tok(TokenKind.Number), applyNumber), tok(TokenKind.Identifier))
)

ARG.setPattern(
  alt(
    ARGK,
    seq(ARGK, str('='), ARGV)
  )
)

CONTENT.setPattern(tok(TokenKind.Identifier))

ARG_START.setPattern(
  seq(
    tok(TokenKind.Space), tok(TokenKind.Dash)
  )
)

CTRL.setPattern(
  seq(
    opt(tok(TokenKind.Identifier)),
    tok(TokenKind.Colon),
    opt(tok(TokenKind.Identifier)),
    opt(list_sc(ARG, ARG_START)),
    opt(COMMENT)
  )
)

COMMENT.setPattern(
  seq(tok(TokenKind.SemiColon), opt(CONTENT))
)


LINE.setPattern(
  alt(
    COMMENT, CTRL, CONTENT
  )
)

SCRIPT.setPattern(
  rep(
    alt(
      LINE,
      seq(LINE, str("\n")),
      seq(LINE, str("\r\n"))
    )
  )
);



const script = `command:content;comment`

const result = expectEOF(SCRIPT.parse(lexer.parse(script)))

console.log(result);
