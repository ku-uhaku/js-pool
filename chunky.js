const chunk = (arr, size) => {
    let newArr = [];
    let i = 0;
    let start = 0;
    for (let i = 0; i < arr.length / size; i++) {
        newArr.push([...arr.slice(start, start + size)]);
        start = start + size;
    }

    return newArr;
};
