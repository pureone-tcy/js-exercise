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
 * @param {Object} obj 
 * @param {Array} array 
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
 * Object freeze.
 */
"use strict";
const obj3 = Object.freeze({key: "value"});
// obj1.key = "value2";
// TypeError: Cannot assign to read only property 'key' of object '#<Object>'

/**
 * Object Propery isExitst function.
 * - in
 * - hasOwnProperty
 */
console.log(`(Object Propery Exist Check in.)\n   ${"key" in obj3}`);
console.log(`(Object Propery Exist Check hasOwnProperty.)\n   ${obj3.hasOwnProperty("key")}`);

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

/**
 * Array#slice.
 */
console.log(`(Array#slice.)\n   ${JSON.stringify(colors.slice(1,4))}`);

/***
 * Array#some.
 */
const isInclude = colors.some(v => v.color == "blue");
console.log(`(Array#some.)\n   ${isInclude}`);

/**
 * Array#push.
 */
colors.push({"color": "white"});
console.log(`(Array#push.)\n   ${JSON.stringify(colors)}`);

/**
 * Array#pop.
 */
const tailColor = colors.pop();
console.log(`(Array#pop.)\n   pop=${JSON.stringify(tailColor)}, colors=${JSON.stringify(colors)}`);

/**
 * Array#unshift.
 */
colors.unshift({"color": "black"});
console.log(`(Array#unshift.)\n   ${JSON.stringify(colors)}`);

/**
 * Array#shift.
 */
const headColor = colors.shift();
console.log(`(Array#shift)\n   shift=${JSON.stringify(headColor)}, colors=${JSON.stringify(colors)}`);

/**
 * Spread.
 */
const newColors = ["sakura", ...colors, "gold"];
console.log(`(Spread.)\n   ${JSON.stringify(newColors)}`);

/**
 * Destruction method.
 * - Array.prototype.pop
 * - Array.prototype.push
 * - Array.prototype.splice
 * - Array.prototype.reverse
 * - Array.prototype.shift
 * - Array.prototype.sort
 * - Array.prototype.unshift
 * - Array.prototype.copyWithin
 * - Array.prototype.fill
 */

/**
* immutable lib.
* - immutable-array-prototype
* - immutable.js
*/

/**
 * Array loop method.
 * - forEach
 * - map
 * - fileter
 * - reduce
 * args = call-back function
 */
