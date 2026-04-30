const flat = (arr, depth = 1) => {
    let res = [];
    if (depth <= 0) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(...flat(arr[i], depth - 1));
        } else {
            res.push(arr[i]);
        }
    }

    return res;
};
