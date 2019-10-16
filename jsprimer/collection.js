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