const slicer = (input, start, end = input.length) => {
    let res = [];
    if (end < 0) {
        end = input.length + end;
    } else {
        end--;
    }

    for (let i = start; i <= end; i++) {
        res.push(input[i]);
    }

    return Array.isArray(input) ? res : res.join("");
};

