const trunc = (n) => {
    if (n === 0) return 0;
    const sign = n < 0 ? -1 : 1;
    const abs = sign * n;

    // Phase 1: jump close with doubling (O log n)
    let i = 1;
    while (i * 2 <= abs) i *= 2;

    // Phase 2: small i++ to land exactly (at most 1 step)
    while (i+ 1 <= abs) i++;

    return sign * i ;
};

const floor = (nb) => (nb < 0 && trunc(nb) !== nb ? trunc(nb) - 1 : trunc(nb));

const ceil = (nb) => (nb > 0 && trunc(nb) !== nb ? trunc(nb) + 1 : trunc(nb));

const round = (nb) => floor(nb + 0.5);

console.log("ROUND");
console.log(round(4.4), Math.round(4.4));
console.log(round(4.5), Math.round(4.5));
console.log(round(4.6), Math.round(4.6));
console.log(round(-1.4), Math.round(-1.4));
console.log(round(-1.5), Math.round(-1.5));
console.log(round(-1.6), Math.round(-1.6));
console.log(round(-2.5), Math.round(-2.5));
console.log(round(-2.6), Math.round(-2.6));

console.log("CEIL");
console.log(ceil(4.1), Math.ceil(4.1));
console.log(ceil(4.9), Math.ceil(4.9));
console.log(ceil(5), Math.ceil(5));
console.log(ceil(-1.1), Math.ceil(-1.1));
console.log(ceil(-1.9), Math.ceil(-1.9));
console.log(ceil(-5), Math.ceil(-5));

console.log("FLOOR");
console.log(floor(4.1), Math.floor(4.1));
console.log(floor(4.9), Math.floor(4.9));
console.log(floor(5), Math.floor(5));
console.log(floor(-1.1), Math.floor(-1.1));
console.log(floor(-1.9), Math.floor(-1.9));
console.log(floor(-5), Math.floor(-5));

console.log("TRUNC");
console.log(trunc(4.1), Math.trunc(4.1));
console.log(trunc(4.9), Math.trunc(4.9));
console.log(trunc(5), Math.trunc(5));
console.log(trunc(-1.1), Math.trunc(-1.1));
console.log(trunc(-1.9), Math.trunc(-1.9));
console.log(trunc(-5), Math.trunc(-5));