const vowels = /[aeiouAEIOU]/g;

const vowelDots = (str) => str.replace(vowels, "$&.");
