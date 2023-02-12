function splitTextIntoLines(text: string): string[] {
  const lines: string[] = [];
  let currentLine = '';

  let insideBraces = false;
  for (const character of text) {
    if (character === '{') {
      if (!insideBraces) {
        lines.push(currentLine);
        currentLine = '{';
      } else {
        currentLine += '{';
      }
      insideBraces = true;
    } else if (character === '}') {
      currentLine += '}';
      if (insideBraces) {
        lines.push(currentLine);
        currentLine = '';
      }
      insideBraces = false;
    } else if (character === '\n' && insideBraces) {
      currentLine += '\n';
    } else if (character === '\n') {
      lines.push(currentLine);
      currentLine = '';
    } else {
      currentLine += character;
    }
  }

  if (currentLine !== '') {
    lines.push(currentLine);
  }

  return lines;
}

// 测试代码
const text = 'This is a\n test {with curly braces\ninside} and some more text';
const lines = splitTextIntoLines(text);
console.log(lines);
