<script setup lang="ts">
// symbol值是独一无二的
let x: symbol = Symbol()
let y: symbol = Symbol()
console.log(x === y, x, y)

// unique symbol 表示单个值，表示这个类型的变量不能修改，只能用const声明
const x2: unique symbol = Symbol()
console.log(x2)

// let x3:unique symbol = Symbol()

const x4 = Symbol()
console.log(x4)

const x5: unique symbol = Symbol()
const x6: unique symbol = Symbol()
console.log(x5, x6)

const x7: unique symbol = Symbol()
const x8: unique symbol = x7
const x9: typeof x7 = x7
console.log(x8, x9)

const x10: unique symbol = Symbol.for('foo')
const x11: unique symbol = Symbol.for('foo')
// console.log(x10 == x11)
console.log(x10, x11)

// unique symbol 作用
// 1.用作属性名，保证不会和其他属性名冲突
const xx: unique symbol = Symbol()
const yy: symbol = Symbol()
interface Foo {
  [xx]: string
  [yy]: string
}
// 2.用作类的属性值
class C {
  static readonly foo: unique symbol = Symbol()
}

// 类型推断
let x12 = Symbol() // symbol
const x13 = Symbol() // typeof x13 == unique symbol
const x14 = x12 // symbol
let x15 = x13 // symbol
</script>

<template></template>
