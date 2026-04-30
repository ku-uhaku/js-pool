const findExpression = (nb) => {
    let res = "1";
    let i = 1;

    while (i <= nb) {
        if (i + 4 == nb) {
            res += " " + add4;
            i += 4;
            break;
        }
        res += " " + mul2;
        i *= 2;
    }

    return i === nb ? res : undefined;
};
