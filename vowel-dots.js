const vowelDots = (str) => {
    const reg = /[aeoui]/g;

    return str.replace(reg, "$&.");
};
