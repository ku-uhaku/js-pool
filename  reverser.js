const reverser = (input) => {
  let isString = typeof input === 'string';
  let res = isString ? "" : [];

  for (let i = input.length - 1; i >= 0; i--) {
    if (isString) {
      res += input[i];
    } else {
      res.push(input[i]);
    }
  }
  
  return res;
};