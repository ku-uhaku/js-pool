const split = (str, sep) => {
  let res = [];
  let currentWord = "";
  
  if (sep === "") {
    for (let i = 0; i < str.length; i++) {
      res.push(str[i]);
    }
    return res;
  }

  for (let i = 0; i < str.length; i++) {
    let match = true;
    for (let j = 0; j < sep.length; j++) {
      if (str[i + j] !== sep[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      res.push(currentWord);
      currentWord = "";
      i += sep.length - 1; // Skip the rest of the separator length
    } else {
      currentWord += str[i];
    }
  }
  
  res.push(currentWord);
  return res;
};

const join = (arr, sep) => {
  let res = "";
  
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
    
    if (i < arr.length - 1) {
      res += sep;
    }
  }
  
  return res;
};