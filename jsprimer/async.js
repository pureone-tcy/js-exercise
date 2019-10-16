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
 * - Promiseインスタンスは1度でもSettledとナルトそれ以降の状態も変化せず、thenのコールバック関数も呼び出さない
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