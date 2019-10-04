"use strict";

/**
 * Define Properties.
 */
const myCar = {};
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color;
console.log(`(Define Properties.)\n   ${JSON.stringify(myCar)}`);

/**
 * Add Properties.
 */
myCar['random'] = Math.random();
console.log(`(Add Properties.)\n   ${JSON.stringify(myCar)}`);

/**
 * Object to Array.
 * 
 * @param {*} obj 
 * @param {*} array 
 */
function objToArray(obj, array) {
  for(var prop in obj) {
    array.push(obj[prop]);
  }
  return array;
}
const res1 = objToArray(myCar, new Array());
console.log(`(objToArray.)\n   ${JSON.stringify(res1)}`);

/**
 * obj entries.
 */
const res2 = Object.entries(myCar);
console.log(`(entries.)\n   ${JSON.stringify(res2)}`);

const res3 = Object.keys(myCar);
console.log(`(keys.)\n   ${JSON.stringify(res3)}`);

/**
 * function.
 */
const factrial = function innerFact(n) {
  if( n < 1) 
    return n;
  else
    return n + innerFact(n - 1);
};
console.log(`(Simple function.)\n   ${factrial(4)}`);

/**
 * Arrow function.
 */
const array = [1, 2, 3];
const addOne = array.map(n => n + 1);
console.log(`(Arrow function.)\n   ${addOne}`);

/**
 * call back function.
 */
const cbFunc = array.forEach( n => {
  if(n <= 1) console.log(`(Call Back function.)\n   ${n}`);
});

/**
 * method
 */
const obj = {
  method1() {
    // function define.
  }
};

/**
 * Reduce.
 */
function sum(numbers) {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0); // init value
}
console.log(`(Reduce.)\n   ${sum([1,2,3,4])}`);

/**
 * Destructuring assignment.
 */
const languages = {
  ja: "日本語",
  en: "英語"
}
const { en, ja } = languages;
console.log(`(Split assignment.)\n   ja=${ja}, en=${en}`);

/**
 * Object to imutable.
 */
const obj1 = Object.freeze({
  key: "value"
});
const hasKey = obj1.hasOwnProperty("key");
console.log(`(Object to imutable.)\n   ${hasKey}`);

/**
 * Merge object.
 */
const objectA = { a: "a" }
const objectB = { b: "b" }
const merged1 = Object.assign({}, objectA, objectB);
console.log(`(merge Object 1.)\n   ${JSON.stringify(merged1)}`);

const merged2 = {
  ...objectA,
  ...objectB
}
// spread
console.log(`(merge Object 2.)\n   ${JSON.stringify(merged2)}`);

/**
 * Object prototype.
 */
// const obj2 = {} と同じ
const obj2 = Object.create(Object.prototype);
console.log(`(Object prototype.)\n   ${obj2.hasOwnProperty === Object.prototype.hasOwnProperty}`);

/**
 * Array#findIndex.
 */
const colors = [
   {"color": "red"},
   {"color": "orange"},
   {"color": "green"},
   {"color": "blue"},
   {"color": "yellow"}
];
const indexOfBlue = colors.findIndex(v => v.color == "blue");
console.log(`(Array#findIndex.)\n   index=${indexOfBlue}, element=${JSON.stringify(colors[indexOfBlue])}`);
const blue = colors.find(v => v.color == "blue");
console.log(`   element=${JSON.stringify(blue)}`);

/***
 * Array#some.
 */
