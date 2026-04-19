let escapeStr = "\` \\ \/ \" \'";
let arr = [4, 2];
let obj = {
    num: 1000,
    str: "kuuhaku",
    bool: true,
    undef: undefined,
};
let nested = {
    arr: [4, undefined, '2'],
    obj: {
        num: 1000,
        str: "kuuhaku",
        bool: true,
    }
};

Object.freeze(nested)
Object.freeze(obj)
Object.freeze(arr)

Object.freeze(nested.arr)
Object.freeze(nested.obj)
