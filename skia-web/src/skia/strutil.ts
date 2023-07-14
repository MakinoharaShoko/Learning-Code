function isCJK(character: string) {
    if (character.match(/[\u4e00-\u9fa5]|[\u0800-\u4e00]|[\uac00-\ud7ff]/)) {
        return true
    } else return false
}

export function splitChars(sentence: string) {
    const words: string[] = [];
    let word = '';
    let cjkFlag = isCJK(sentence[0]);

    for (const character of sentence) {
        if (character === ' ') {  // 空格分割
            if (word) {  // 添加已有的词
                words.push(word);
                word = '';
            }
            words.push(' ');  // 添加空格
            cjkFlag = false;  // 下一个字符开始，设置非CJK标志
        } else if (isCJK(character)) {
            if (!cjkFlag && word) {  // 如果之前的字符是非CJK，并且已有词存在
                words.push(word);
                word = '';
            }
            words.push(character);  // 直接添加CJK字符作为单独的词
            cjkFlag = true;  // 设置CJK标志
        } else {
            if (cjkFlag && word) {  // 如果之前的字符是CJK，并且已有词存在
                words.push(word);
                word = '';
            }
            word += character;  // 添加字符到词
            cjkFlag = false;  // 设置非CJK标志
        }
    }

    if (word) {  // 最后一个词
        words.push(word);
    }

    return words;
}

export function redAlphaText(text: {
    text: string,
    alpha: number
}[]) {
    let prevStr = '';
    let newStrArr = [];
    for (const e of text) {
        if (e.alpha >= 1) {
            prevStr = prevStr + e.text;
        } else {
            newStrArr.push(e)
        }
    }
    newStrArr.unshift({text: prevStr, alpha: 1})
    return newStrArr
}