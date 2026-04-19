const sign = (n) => {
    return n > 0 ? 1 : n < 0 ? -1 : 0
}

const sameSign = (n, m) => {
    return sign(n) === sign(m)
}