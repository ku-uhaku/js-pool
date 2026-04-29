const get = (src, path) => {
    let pathEle = path.split(".");
    let res = src;
    for (let ele of pathEle) {
        if (res == null || !(ele in res)) {
            return undefined;
        }
        res = res[ele];
    }
    return res;
};

const src = { nested: { key: "peekaboo" } };
const path = "nested.key"; // -> 'peekaboo'
console.log(get(src, path));
