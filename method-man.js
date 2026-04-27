const words = (input) => input.split(" ");

const sentence = (input) => input.join(" ");

const yell = (input) => input.toUpperCase();

const whisper = (input) => "*" + input.toLowerCase() + "*";

const capitalize = (input) => input.split(" ").map(e => e.slice(0,1).toUpperCase() + e.slice(1).toLowerCase()).join(" ")
