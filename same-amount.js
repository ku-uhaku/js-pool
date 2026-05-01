const sameAmount = (str, reg1, reg2) => {
    if (!str) return true;
    let matshes1 = str.match(reg1);

    let matshes2 = str.match(reg2);
    let len1 = matshes1 === null ? 0 : matshes1.length;
    let len2 = matshes2 === null ? 0 : matshes2.length;

    return len1 === len2;
};
