const trunc = (n) => {
    if (n === 0) return 0;
    const sign = n < 0 ? -1 : 1;
    const abs = sign * n;
    let i = 0;
    while (i <= abs) i++;
    return sign * (i - 1);
};

const floor = (nb) => (nb < 0 && trunc(nb) !== nb ? trunc(nb) - 1 : trunc(nb));

const ceil = (nb) => (nb > 0 && trunc(nb) !== nb ? trunc(nb) + 1 : trunc(nb));

const round = (nb) => floor(nb + 0.5);
