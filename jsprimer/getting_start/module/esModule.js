"use strict";
/**
 * ECMAScript Module
 * - export
 *     - 関数や変数を外部のjsファイルに定義できる
 * - import
 *     - 外部のjsファイルから関数や変数を読み込む
 */
// 名前付きエクスポート
exports.foo = "foo";

// 名前付きインポート
const m = require("./my-module");
console.log(m.bar);