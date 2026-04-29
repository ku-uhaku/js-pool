const nasa = (n) => {
    let res = [];

    for (let i = 1; i <= n; i++) {
        let word = "";

        if (i % 3 === 0) word += "NA";
        if (i % 5 === 0) word += "SA";

        res.push(word || i);
    }

    return res.join(" ");
};
