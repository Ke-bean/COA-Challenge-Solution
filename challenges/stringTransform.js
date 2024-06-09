function transformString(str) {
    const length = str.length;
    let result = str;

    switch (true) {
        case length % 15 === 0:
            result = str.split('').reverse().join('');
            result = result.split('').map(char => char.charCodeAt(0)).join('');
            break;
        case length % 3 === 0:
            result = str.split('').reverse().join('');
            break;
        case length % 5 === 0:
            result = str.split('').map(char => char.charCodeAt(0)).join('');
            break;
        default:
            break;
    }

    return result;
}
