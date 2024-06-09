function transformString(str) {
    let result = str;

    switch (true) {
        case str.length % 15 === 0:
            result = str.split('').reverse().join('');
            result = result.split('').map(char => char.charCodeAt(0)).join(' ');
            break;
        case str.length % 3 === 0:
            result = str.split('').reverse().join('');
            break;
        case str.length % 5 === 0:
            result = str.split('').map(char => char.charCodeAt(0)).join(' ');
            break;
        default:
            break;
    }

    return result;
}
