/**
 * Define Properties.
 */
var myCar = new Object();
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
