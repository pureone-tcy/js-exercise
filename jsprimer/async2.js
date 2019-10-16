/**
 * Async Function.
 * - 非同期処理の関数定義構文（ES2017）
 * - Promiseインスタンスを返す関数
 * - 以下のdoAsync()とdoAsync2は同じ
 * 
 */
async function doAsync() {
    return 0; // Promise.resolve(0)
};
doAsync().then(i => console.log(`(Async resolve.)\n   ${i}`));

function doAsync2() {
    // Promiseインスタンスを返却
    return Promise.resolve(0);
}
doAsync2().then(i => console.log(`   ${i}`))

async function rejectFn() {
    return Promise.reject(new Error("ERROR"));
}
rejectFn().catch(e => console.log(`(Async reject.)\n   ${e.message}`));

/**
 * Async await.
 */
async function doAsync3() {
    const value = await Promise.resolve(10);
    console.log(`(Async await.)\n   ${value}`);
}
doAsync3();