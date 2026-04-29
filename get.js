const get = (src, path) => {
    let pathEle = path.split(".");
    let res = src;
    for (let ele of pathEle) {
        res = res[ele];
    }
    return res;
};

