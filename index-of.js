const indexOf = (input, value, index = 0) => {
    for (let i = index; i < input.length; i++) {
        if (input[i] === value) {
            return i;
        }
    }
    return -1;
};

const lastIndexOf = (input, value) => {
    for (let i = input.length - 1; i >= 0; i--) {
        if (input[i] === value) {
            return i;
        }
    }
    return -1;
};

const includes = (input, value) => {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === value) {
            return true;
        }
    }
    return false;
};
