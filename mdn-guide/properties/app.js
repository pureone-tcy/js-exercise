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
const array1 = [1, 2, 3];
const addOne = array1.map(n => n + 1);
console.log(`(Arrow function.)\n   ${addOne}`);

/**
 * call back function.
 */
const cbFunc = array1.forEach( n => {
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
const array2 = [1,2,3];
console.log(`(Array#reduce.)\n   ${array2.reduce((acc, v, ix, arr) => acc + v, 0)}`)

/**
 * this. NG Pattern.
 * - function define
 * - function expression
 * - method.
 *   メソッドのみ別オブジェクトへコピーした場合に、参照しているプロパティがないとエラーになる
 */
function f1() {
  return this;
};
const fn2 = function () {
  return this;
};
console.log(`(this case 1.)\n   f1()=${f1()}, f2()=${fn2()}`);

const obj4 = {
  method() {
    return this;
  }
};
console.log(`(this case 2.)\n   ${JSON.stringify(obj4.method())}`);

const person = {
  name: "tsuchiya",
  say: function(arg) {
    const name2 = this.name + arg
    return name2;
  }
}
console.log(`(this case 3.)\n   ${person.say("!")}`);

/**
 * this
 * - call.
 * - apply.
 * - bind.
 */
const person1 = {
  name: "John"
}
console.log(`(this call.)\n   ${person.say.call(person1, "!!")}`);
console.log(`(this apply.)\n   ${person.say.call(person1, ["??"])}`);
const bindedSay = person.say.bind(person1, "(^^)");
console.log(`(this bind.)\n   ${bindedSay()}`);

// `Callback Function` has not base Object.

/**
 * Allow function. callback function.
 */
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    return strings.map((str) => this.prefix + "-" + str);
  }
}
const pString = Prefixer.prefixArray(["a", "b", "c"]);
console.log(`(Allow function callback.)\n   ${pString}`);

/**
 * class.
 * - MyClass: クラスを定義する
 * - AnonymouseClass : クラスを値として定義する
 */
const MyClass = class MyClass {
  // 省略可能
  constructor() {}
};
const AnonymouseClass = class {
  // 省略可能
  constructor() {}
};

class MyClass2 {}
const myClass2 = new MyClass2();
const myClass3 = new MyClass2();
console.log(`(MyClass equal.)\n   ${myClass2 === myClass3}`);
console.log(`(MyClass instanceof.)\n   ${myClass2 instanceof MyClass2}`);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const point = new Point(3, 4);
console.log(`(constractor)\n   x=${point.x}, y=${point.y}`);

class Counter {
  constructor() {
    this.count = 1;
  }
  increment() {
    this.count++;
  }
}
const counterA = new Counter();
const counterB = new Counter();
counterA.increment();
console.log(`(counter)\n   A=${counterA.count}, B=${counterB.count}`);