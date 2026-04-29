const trunc = (n) => {
    if (n === 0) return 0;
    const sign = n < 0 ? -1 : 1;
    const abs = sign * n;
    let i = 1;
    while (i * 2 <= abs) i *= 2;
    while (i + 1 <= abs) i++;
    return sign * i;
};
const floor = (nb) => (nb < 0 && trunc(nb) !== nb ? trunc(nb) - 1 : trunc(nb));

const ceil = (nb) => (nb > 0 && trunc(nb) !== nb ? trunc(nb) + 1 : trunc(nb));

const round = (nb) =>
    nb >= 0
        ? nb - trunc(nb) >= 0.5
            ? trunc(nb) + 1
            : trunc(nb)
        : trunc(nb) - nb > 0.5
          ? trunc(nb) - 1
          : trunc(nb);
