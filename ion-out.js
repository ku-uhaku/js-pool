const ionOut = (str) => {
    return (str.match(/[a-zA-Z]*tion$/g) || []).map((ele) =>
        ele.replace(/ion$/, ""),
    );
};
