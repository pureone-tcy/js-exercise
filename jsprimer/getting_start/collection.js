"use strict";

/**
 * Map
 */
const m = new Map();
console.log(`(Map create.)\n   ${m.size}`);

m.set("key1", "value1");
console.log(`(Map set/get.)\n   ${m.get("key1")}`);
console.log(`(Map has false.)\n   ${m.has("key0")}`);
console.log(`(Map has true.)\n   ${m.has("key1")}`);

m.delete("key1")
console.log(`(Map has false.)\n   ${m.get("key1")}`);

/**
 * Map#forEach,Keys,values,entries
 */
const m1 = new Map([["key1", "value1"], ["key2", "value2"]]);
const results = [];
m1.forEach((v,k) => results.push(`${k}:${v}`));
console.log(`(Map foreach)\n   ${results}`);

const keys = [];
for (const key of m1.keys()) {
  keys.push(key);
}
console.log(`(Map keys)\n   ${keys}`);

const entries = [];
for (const [k,v] of m1.entries()) {
  entries.push(`${k}:${v}`);
};
console.log(`(Map entries)\n   ${entries}`);

/**
 * Map example.
 */
class ShoppingCart {
  constructor() {
    this.items = new Map();
  }
  // Mapのキーにオブジェクを設定し、値に件数を設定している。
  addItem(item) {
    const count = this.items.get(item) || 0;
    this.items.set(item, count + 1);
  }
  // 
  getTotalPrice() {
    return Array.from(this.items).reduce((total, [item, count]) => {
      return total + item.price * count;
    }, 0);
  }
  toString() {
    return Array.from(this.items).map(([item, count]) => {
      return `${item.name}:${count}`;
    }).join(",")
  }
}
const sp = new ShoppingCart();
const shopItems = [
  {name: "みかん", price: 100},
  {name: "りんご", price: 200}
];
sp.addItem(shopItems[0]);
sp.addItem(shopItems[0]);
sp.addItem(shopItems[1]);
console.log(`(Map example)\n   total=${sp.getTotalPrice()}, object=${sp.toString()}`);

/**
 * WeakMap
 * - GCされやすくなる
 * - イベントリスナー
 */
const lm = new WeakMap();
class EventEmitter {
  addListener(l) {
    // this に紐付いたリスナーの配列を取得する
    const ls = lm.get(this) || [];
    lm.set(this, ls.concat(l));
  }
}

let em = new EventEmitter();
em.addListener(() => {
  console.log("Event Run!!");
});
em = null;

/**
 * Set
 * - 重複値を持たない
 */
const set = new Set(["value1", "value2", "value3"]);
console.log(`(set)\n   ${set.size === set.add("value2").size}`);

/**
 * JSON
 */
const json = '{ "id": 1, "name": "sample" }';
const obj = JSON.parse(json);
console.log(`(JSON)\n  ${JSON.stringify(obj)}`);

/**
 * JSON stringigy
 * - Arg No 2
 *   - replacer = function ...文字列変換時のコントール処理
 *   - replacer = Array ... ホワイトリスト
 * - Arg No 3
 *   - space ... 改行とインデントスペースの設定（タブでも可）
 * - toJSON()
 */
const obj2 = {id: 1, name: "sample", bio: null };
const replacerFn = (key, value) => { return value === null ? undefined : value }
console.log(`(JSON replacer function)\n   ${JSON.stringify(obj2, replacerFn)}`);

const replacerWh = ["name"];
console.log(`(JSON replacer Array)\n   ${JSON.stringify(obj2, replacerWh)}`);

console.log(`(JSON space)\n   ${JSON.stringify(obj2, null, 4)}`);
// console.log(`(JSON space)\n   ${JSON.stringify(obj2, null, \t)}`);

const obj3 = {
  name: "foo",
  toJSON() { return "bar" }
}
console.log(`(JSON toJSON)\n   ${JSON.stringify(obj3)}`);

/**
 * Date
 * - UTC 1970/01/01 00:00:00 を基準としたミリ秒
 * - 常にnewでインスタンス化して使用する
 * - 末尾のZはUTC時刻であることを示す
 * - 通常はライブラリを使う
 */
const now = new Date();
console.log(`(Date now)   `);
console.log(now);

/**
 * Mathオブジェクト
 * - newしない
 * - 静的なプロパティやメソッドを使う
 */