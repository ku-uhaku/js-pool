const pyramid = (str, nb) => {
    let res = [];

    for (let i = 1; i <= nb; i++) {
        let count = i * 2 - 1;                 
        let spaces = (nb - i) * str.length;   

        res.push(" ".repeat(spaces) + str.repeat(count));
    }

    return res.join("\n");
};
