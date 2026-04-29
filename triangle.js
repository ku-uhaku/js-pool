const triangle = (nb) => {
    let res = [];
    for (let i = 1; i <= nb; i++) {
        res.push("*".repeat(i));
    }
    return res.join("\n");
};

