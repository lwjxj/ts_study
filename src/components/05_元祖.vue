<script setup lang="ts">
// 1. TS特有的类型：成员类型可以自由设置的数组，即数组的各个成员的类型可以不同
const s1: [string, number] = ['1', 1]
console.log(s1)

// 2. 与数组的写法区别：成员类型写在方括号里面的就是元组，写在外面的就是数组
// 数组
let a: number[] = [1]
console.log(a)
// 元组
let t: [number] = [1]
console.log(t)

// 3. 使用元祖时必须明确给出类型，不然会被推断为数组类型
let a2 = [1, true]
console.log(a2)

// 4. 元素可选：问号只能用于元组的尾部成员，所有可选成员必须在必选成员之后
const a3: [string, number?] = ['123']
console.log(a3)

// const a4:[string?, number] = []

// 5. 使用扩展运算符可以表示不限数量的元祖
type NamedNums = [string, ...number[]]
const a4: NamedNums = ['123', 1, 2, 3, 4, 5]
console.log(a4)

// 没有实际作用，只是用来说明每个成员的含义
type Color = [red: number, green: number, blue: number]
const c: Color = [255, 255, 255]
console.log(c)

// Tuple[number]表示元组Tuple的所有数值索引的成员类型，所以返回string|number|Date，即这个类型是三种值的联合类型
type Tuple = [number, string, Date]
type TupleEl = Tuple[number]

// 只读元祖
// 写法
type t1 = readonly [string, number]
type t2 = Readonly<[string, number]>

// 跟数组一样，只读元组是元组的父类型。所以，元组可以替代只读元组，而只读元组不能替代元组
type t3 = [string, number]
let x: t3 = ['123', 123]
let y: t1 = x
console.log(y)
x = y

// 成员数量的推断
function f(point: [number, number]) {
  if (point.length === 3) {
    console.log(point.length)
  }
}
f([1, 2])

function f2(point: [number, number?, number?]) {
  if (point.length === 4) {
    console.log(point.length)
  }
}
f2([1])

// 使用扩展运算符，TS就无法推断出成员数量(TS把myTuple当做数组看待，而数组的成员数量是不确定的)
const myTuple: [...string[]] = ['a', 'b', 'c']
if (myTuple.length === 4) {
}

// 扩展运算符和成员数量
// const arr: [number, number] = [1, 2]
const arr = [1, 2] as const // == readonly [1,2] 只读 可以当作数组，也可以当作元祖
function add(x: number, y: number) {
  console.log(x, y)
}
add(...arr)
</script>

<template></template>
