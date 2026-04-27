const str = "hello";
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
const map = new Map();
set.add(1);
set.add(2);
set.add(1);
set.add(3);
map.set("a", 1);
map.set("b", 2);
map.set("", 2);
map.set(3, "c");
map.set(4, "d");

const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join("");
const setToArr = (set) => Array.from(set);
const setToStr = (set) => setToArr(set).join("");
const strToArr = (str) => str.split("");
const strToSet = (str) => new Set(str);
const mapToObj = (map) => new Map(Object.entries(obj));
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => Object.assign({}, arr);
const strToObj = (str) => Object.assign({}, str.split(""));

const superTypeOf = (input) => {
  if (input === undefined) return "Undefined";
  if (input == null) return "Null";
  console.log(typeof input);
  const fullType = Object.prototype.toString.call(input);

  const type = fullType.slice(8, -1).toLowerCase();

  return type[0].toUpperCase() + type.slice(1);
};
