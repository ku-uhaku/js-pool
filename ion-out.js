const ionOut = (str) => {
    return (str.match(/\b[a-zA-Z]*tion\b/g) || []).map((ele) =>
        ele.replace(/ion$/, ""),
    );
};
