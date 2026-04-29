const triangle = (str, nb) => {
    let res = [];
    for (let i = 1; i <= nb; i++) {
        res.push(str.repeat(i));
    }
    return res.join("\n");
};
