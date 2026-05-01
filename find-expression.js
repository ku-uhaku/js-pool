const add4 = "+4";
const mul2 = "*2";

const buildExpression = (nb) => {
    if (nb === 1) return "";
    if (nb < 1) return undefined;

    if (nb % 2 === 0) {
        const byTwo = buildExpression(nb / 2);
        if (byTwo !== undefined) return byTwo + " " + mul2;
    }

    const byFour = buildExpression(nb - 4);
    if (byFour !== undefined) return byFour + " " + add4;

    return undefined;
};

export const findExpression = (nb) => {
    const ops = buildExpression(nb);
    return ops === undefined ? undefined : "1" + ops;
};


console.log(findExpression(14))