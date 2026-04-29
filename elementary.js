const multiply = (a, b) => {
    let res = 0;
    let sign = 0;

    if (a < 0) {
        a = Math.abs(a);
        sign++;
    }
    if (b < 0) {
        b = Math.abs(b);
        sign++;
    }

    for (let i = 0; i < b; i++) {
        res += a;
    }
    return sign === 1 ? -res : res;
};

const divide = (a, b) => {
    let res = 0;
    let sign = 0;

    if (a < 0) {
        a = Math.abs(a);
        sign++;
    }
    if (b < 0) {
        b = Math.abs(b);
        sign++;
    }

    if (b === 0) {
        return;
    }

    while (a > b) {
        res++;
        a -= b;
    }

    return sign === 1 ? -res : res;
};

const modulo = (a, b) => {
    let res = Math.abs(a);
    let sign = 0;

    if (b == 0) {
        return;
    }

    if (a < 0) {
        a = Math.abs(a);
        sign++;
    }
    if (b < 0) {
        b = Math.abs(b);
        sign++;
    }

    while (res > b) {
        res -= b;
    }
    return res;
};
