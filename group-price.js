const groupPrice = (str) => {
    const regPrice = /([^0-9 ]+(\d+)\.(\d+))/g;
    const res = [];
    for (const match of str.matchAll(regPrice)) {
        res.push([match[1], match[2], match[3]]);
    }
    return res;
};
