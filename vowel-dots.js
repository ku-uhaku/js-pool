const vowels = /[aeiou]/g;

const vowelDots = (str) => str.replace(vowels, "$&.");
