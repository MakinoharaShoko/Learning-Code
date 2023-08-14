
import { Token, buildLexer, expectEOF, expectSingleResult, lrec_sc, rule, tok } from 'typescript-parsec';
import { alt, apply, kmid, opt, seq, str } from 'typescript-parsec';

enum TokenKind {
  Normal,
  Control,
  Colon,
  Dash,
  Equals,
  SemiColon,
  String,
  Number,
  Boolean,
  True,
  False,
  Identifier,
  Comment
}

const lexer = buildLexer([
  [false, /;.*/, TokenKind.Comment],
  [false, /"[^"]*"|^[^"\s]+/, TokenKind.String],
  [false, /\d+/, TokenKind.Number],
  [false, /true|false/, TokenKind.Boolean],
  [false, /[a-zA-Z]\w*/, TokenKind.Identifier],
  [true, /:/, TokenKind.Colon],
  [true, /-/, TokenKind.Dash],
  [true, /=/, TokenKind.Equals],
  [true, /;/, TokenKind.SemiColon]
]);

const CONTENT = rule();
const ARG = rule();
const ARGK = rule();
const ARGV = rule();
const CMD = rule();
const CTRL = rule();
const COMMENT = rule();
const LINE = rule();
const SCRIPT = rule();

COMMENT.setPattern(
  seq(str(';'), CONTENT)
)

ARG.setPattern(
  alt(
    ARGK,
    seq(ARGK, str('='), ARGV)
  )
)

function applyIdentifier(value: Token<any>): string {
  return value.text;
}

ARGK.setPattern(
  apply(tok(TokenKind.Identifier), applyIdentifier)
)

SCRIPT.setPattern(
  alt(LINE,
    seq(LINE, alt(str('\n'), str('\r\n')), SCRIPT)
  )
);

LINE.setPattern(
  alt(
    COMMENT, CTRL, CONTENT
  )
)