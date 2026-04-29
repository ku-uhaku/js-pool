const slice = (input, start, end = input.length) => {
    let res = [];
    if (end < 0) {
        end = input.length + end - 1;
    } else {
        end--;
    }
    if (start < 0) {
        start = input.length + start;
    }

    for (let i = start; i <= end; i++) {
        res.push(input[i]);
    }

    return Array.isArray(input) ? res : res.join("");
};

