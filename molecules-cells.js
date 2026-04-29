const RNA = (str) => {
    let res = "";
    const map = {
        G: "C",
        C: "G",
        T: "A",
        A: "U",
    };

    for (const ch of str) {
        res += map[ch];
    }

    return res;
};

const DNA = (str) => {
    let res = "";
    const map = {
        C: "G",
        G: "C",
        A: "T",
        U: "A",
    };

    for (const ch of str) {
        res += map[ch];
    }

    return res;
};
