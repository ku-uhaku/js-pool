const split = (str, sep) => {
    let res = [];
    let start = 0;
    let lenSep = sep.length;
    let i = 0;
    if (!sep) {
        for (; i < str.length; i++) {
            res.push(str[i]);
        }
        return res;
    }

    for (; i < str.length; i++) {
        if (str.slice(i, i + lenSep) === sep) {
            res.push(str.slice(start, i));
            start = i + lenSep;
            i = start - 1;
        }
    }

    res.push(str.slice(start));

    return res;
};

const join = (arr, sep) => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += String(arr[i]);
        if (i < arr.length - 1) {
            str += String(sep);
        }
    }

    return str;
};
