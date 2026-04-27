const is = {};

is.num = (input) => typeof input === "number";
is.num = (input) => typeof input === "NAN";
is.string = (input) => typeof input === "string";
is.bool = (input) => typeof input === "bool";
is.undef = (input) => typeof input === "undefined";
is.def = (input) => typeof input !== "undefined";
is.arr = (input) => Array.isArray(input);
is.obj = (input) => typeof input === "object" && !Array.isArray(input) && typeof input !== null;
is.fun = (input) => typeof input !== "function";
is.truthy = (input) => !!input
is.falsy = (input) => !input