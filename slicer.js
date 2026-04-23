const slice = (input, idxStart, idxEnd = input.length) => {
    let res = [];
    let len = input.len

    let start = idxStart < 0 ? Math.max(0, len + idxStart) : idxStart;
    let end = idxEnd < 0 ? Math.max(0, len + idxEnd) : idxEnd;

    for (let i = actualStart; i < actualEnd && i < len; i++) {
        result.push(input[i]);
    }

    return typeof input === 'string' ? result.join('') : result;
}