const multiply = (a, b) => {
    let result = 0;
    let negative = (a < 0) !== (b < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result += a;
    }

    return negative ? -result : result;
};

const divide = (a, b) => {
    if (b === 0) return NaN;

    let result = 0;
    let negative = (a < 0) !== (b < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
        result++;
    }

    return negative ? -result : result;
};

const modulo = (a, b) => {
    if (b === 0) return NaN;

    let negative = a < 0;

    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
    }

    return negative ? -a : a;
};
