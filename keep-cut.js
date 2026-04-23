const cutFirst = (str) => slice(str, 2);

const cutLast = (str) => slice(str, 0, -2);

const cutFirstLast = (str) => slice(str, 2, -2);

const keepFirst = (str) => slice(str, 0, 2);

const keepLast = (str) => slice(str, -2);

const keepFirstLast = (str) => keepFirst(str) + keepLast(str);