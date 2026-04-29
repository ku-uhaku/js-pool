const pyramid = (str, nb) => {
    let res = [];

    for (let i = 1; i <= nb; i++) {
        let spaces = ((nb - i) / 2) * str.length;
        res.push(" ".repeat(spaces) + str.repeat(i));
    }

    return res.join("\n");
};

