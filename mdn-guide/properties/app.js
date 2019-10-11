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

/**
 * - インスタンスメソッドとプロトタイプメソッド
 *   - プロトタイプメソッド
 *     - インスタンス間で共有されるため、参照先が同一
 *     - プロトタイプオブジェクトに定義される
 *   - インスタンスメソッド
 *     - 参照先は共有されない
 *     - インスタンスオブジェクトに定義される
 */
class Counter {
  constructor() {
    this.count = 0;
    this.increment2 = () => this.count;
  }
  increment() {
    this.count++;
  }
}
const counterA = new Counter();
const counterB = new Counter();
counterA.increment();
console.log(`(counter)\n   A=${counterA.count}, B=${counterB.count}`);
console.log(`   ${counterA.increment === counterB.increment}`);
console.log(`   ${counterA.increment2 === counterB.increment2}`);

/**
 * Wrapper.
 * - for create class.
 */
class ArrayWrapper {
  constructor(array = []) {
    this.array = array;
  }
  static of(...items) {
    return new this(items);
    // return new ArrayWrapper(items);
  }
  get length() {
    return this.array.length;
  }
}
console.log(`(wraper)\n   ${JSON.stringify(ArrayWrapper.of(1,2,3))}`);

/**
 * MyClass3
 */
class MyClass3 {
  method() {
    console.log("prototype method.")
  }
}
const ins3 = new MyClass3();
const prototypeIns3 = Object.getPrototypeOf(ins3);
console.log(`(get prototype)\n   ${prototypeIns3 == MyClass3.prototype}`);

/**
 * 継承
 */
class Parent {
  constructor(...args) {
    console.log(`(Parent super.)\n   ${args}`)
  }
}
class Child extends Parent {
  constructor(...args) {
    super(...args);
  }
}
const child = new Child(1,2,3);

/**
 * Error First Callback.
 */
function dummyFetch(path, callback) {
  setTimeout(() => {
    if (path === "/success/data") {
      callback(null, {body : `Response body of ${path}`});
    } else {
      callback(new Error("Not found"));
    }
  }, 1000 * Math.random());
}
dummyFetch("/success/data", (error, response) => {
  if(error) {} else {console.log(`(Error First Callback.)\n   ${JSON.stringify(response)}`);}
})
dummyFetch("/failure/data",(error, response) => {
  if (error) {console.log(`(Error First Callback.)\n   ${JSON.stringify(error.message)}`);} else {}
});

/**
 * Promise
 * - Promiseインスタンスの状態が変化したときに、一度だけ呼ばれるコールバック関数の登録
 *   - then
 *   - catch
 */
const promise = new Promise((resolve, reject) => {});
promise.then(
  () => console.log(`(Promise#then.)\n   success`),
  () => console.log(`(Promise#then.)\n   failed`));

function dummyFetch2(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(path === "/success/data") {
        resolve({ body : `Response body of ${path}`});
      } else {
        reject(new Error("Not Found."))
      }
    }, 1000 * Math.random());
  });
}
dummyFetch2("/success/data")
  .then(
    (response) => {console.log(`(Promise#then. )\n   ${JSON.stringify(response)}`);},
    (error) => {}
);
dummyFetch2("/faild/data")
  .then(
    (response) => {},
    (error) => {console.log(`(Promise#then. )\n   ${error.message}`);}
);

function delay(timeoutMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutMs)
  });
}
delay(3000).then(() => console.log(`(Promise#delay. )\n   success`));

function errorPromise(message) {
  return new Promise((resolve, reject) => {
    reject(new Error(message));
  });
}
errorPromise(`(Promise#catch. )\n   error promise.`).catch(e => console.log(e.message));

function throwPromise() {
  return new Promise((resolve, reject) => { 
    throw new Error("(Promise#catch2. )\n   error promise2.");
  });
}
throwPromise().catch(e => console.log(e.message));

/**
 * Promise State.
 * - Fulfilled
 * - Rejected
 * - Pending
 *   - new Promiseでインスタンスを作成したときの初期状態
 * ---
 * Settled
 * - Pending -> Fulfilled or Rejectedに状態が変わると、それ以降は変化しない
 * - resolveを呼び出した後に、rejectを呼び出しても状態が変化しない
 * - resolveを呼び出した後に、resolveを呼び出すことはできない（resolve関数は一回だけ呼び出される）
 */
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    reject(new Error("Error"));
  }, 16);
});
promise3
  .then(
    () => {console.log(`(Promsie Settled.)\n   resolve`)},
    (error) => {console.log(`(Promsie Settled.)\n   ${error.message}`)}
    );
const fulFilledPromise = Promise.resolve(42);
fulFilledPromise.then(v => console.log(`(fulFilledPromise. )\n   ${v}`));
const fulFilledPromise2 = Promise.reject(new Error("ful filled reject."));
fulFilledPromise2.catch(e => console.log(`(fulFilledPromise. )\n   ${e.message}`));

/**
 * Promise chain.
 */
Promise.resolve()
  .then(_ => console.log(`(Promise Chain. )\n   1`))
  .then(_ => console.log(`\n   2 (Promise Chain. )`))
  .then(_ => console.log(`\n   3 (Promise Chain. )`));

/**
 * asyncTask
 * - Promiseの状態がRejectedになった場合、以下の近い処理が呼び出される
 *   - thenの第二引数
 *   - catch
 * - then,catchは、Fulfilled状態のPromiseを返却するため、catchしたあとは成功時の処理が必ず呼ばれる！！
 */
function asyncTask() {
  return Math.random() > 0.5
    ? Promise.resolve("success")
    : Promise.reject(new Error("Failed"));
}
asyncTask()
  .then(v => console.log(`(Promise asyncTask. )\n   ${v}`))
  .catch(e => console.log(`(Promise asyncTask. )\n   ${e.message}`));

Promise
  .reject(new Error("Error"))
  .catch(e => console.log(`(Promise rejected -> fulfilled)\n   ${e}`))
  .then(_ => console.log(`(Promise rejected -> fulfilled)\n   success`));

Promise
  .resolve(1)
  .then(v => v * 2)
  .then(v => v * 2)
  .then(v => v * 2)
  .then(v => console.log(`(Promise Chain value resolve.)\n   ${v}`));

Promise
  .reject(new Error("failed"))
  .catch(e => 0)
  .then(v => v === 0 ? 0 : 1)
  .then(v => console.log(`(Promise Chain value reject.)\n   ${v * 2}`))

Promise
  .resolve()
  .then(_ => Promise.reject(new Error("failed")))
  .then(_ => console.log("skip"))
  .catch(e => e.message)
  .then(v => console.log(`(Promise Chain Promise object. )\n   ${v}`))

/**
 * Promise#all
 * - 複数のPromiseをまとめる
 * - ここのPromiseに依存関係がない場合（=逐次処理ではない）まとめて並列処理することが可能
 * - 全て完了するまで待つ
 * Promise#race
 * - Promiseが1つでも完了した時点で、次の処理を実行する
 * - タイムアウト処理が実装できる
 *   - タムアウト時の処理をPromiseの最後の配列に渡す
 */
function dummyFetch3(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path === "/resource") {
        resolve({body : `Response body of ${path}`});
      } else {
        reject(new Error("failed"));
      }
    }, 1000 * Math.random());
  });
}
const fetchedPromise = Promise.all([
  dummyFetch3("/resource"),
  dummyFetch3("/resource")
])
fetchedPromise
  .then(([resA, resB]) => {
    console.log(`(Promise#all success. )\n   resA=${JSON.stringify(resA)}, resB=${JSON.stringify(resB)}`)
  }).catch(e => {
    console.log(`(Promise#all error. )\n   ${(e.message)}`)
  });

const fetchedPromise2 = Promise.race([
  dummyFetch3("/resource"),
  dummyFetch3("/nodata")
])
fetchedPromise2
  .then(resA => {
    console.log(`(Promise#race success. )\n   resA=${JSON.stringify(resA)}`)
  }).catch(e => {
    console.log(`(Promise#race error. )\n   ${(e.message)}`)
  });