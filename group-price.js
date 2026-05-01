const groupPrice = (str) => {
    const regPrice = /(\S+(\d+)\.(\d+))/;
    const match = str.match(regPrice);
    return match ? [[match[1], match[2], match[3]]] : [];
};

console.log(groupPrice("the total is USD19.98"));
