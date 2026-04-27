const words = (input) => input.split(" ");

const sentence = (input) => input.join(" ");

const yell = (input) => input.toUpperCase();

const whisper = (input) => "*" + input.toLowerCase() + "*";

const capitalize = (input) => input[0].toUpperCase() + input.slice(1).toLowerCase();