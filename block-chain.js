const initchain = { index: 0, hash: "0" };

const hashCode = (str) =>
    (
        [...str].reduce(
            (h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h,
            0,
        ) >>> 0
    ).toString(36);

const blockChain = (data, prev = { index: 0, hash: "0" }) => {
    const index = prev.index + 1;
    const hash = hashCode(
        String(index) + String(prev.hash) + JSON.stringify(data),
    );

    return {
        index,
        hash,
        prev,
        data,
        chain(newData) {
            return blockChain(newData, this);
        },
    };
};
