const initchain = { index: 0, hash: "0" };


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
