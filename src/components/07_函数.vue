<script setup lang="ts">
function hello(text: string): void {
  console.log(text)
}

// 变量被赋值为一个函数
// 写法一：
const hello2 = function (txt: string) {
  console.log(txt)
}

// 写法二：
const hello3: (txt: string) => void = function (txt) {
  console.log(txt)
}

// 定义函数类型
type MyFunc = (text: string) => void
const hello4: MyFunc = function (text) {
  console.log(text)
}

// 一个变量套用另一个函数类型：使用typeof获取类型
function add(x: number, y: number) {
  return x + y
}
const myAdd: typeof add = function (x, y) {
  return x + y
}

// 函数类型的对象写法
function f(x: number) {
  console.log(x)
}
f.version = '1.0'
let foo: {
  (x: number): void
  version: string
} = f

// 使用接口写法
interface myfn {
  (a: number, b: number): number
}
const add2: myfn = (a, b) => a + b

// 箭头函数
type Person = { name: string }
const people = ['alice', 'bob', 'jan'].map((name): Person => ({ name }))

// 可选参数: 只能跟在必选参数的后面
function f2(x?: number) {
  console.log(x)
}
f2()
f2(10)

// 参数默认值
// 参数解构
// rest参数：表示函数剩余的所有参数，可以是数组也可以是元组
function joinNumbers(...nums: number[]) {
  console.log(nums)
}

function f3(...args: [boolean, string?]) {
  console.log(args)
}

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x)
}

// rest 与变量解构使用
function repeat(...[str, times]: [string, number]): string {
  return str.repeat(times)
}

function repeat2(str: string, times: number): string {
  return str.repeat(times)
}

// readonly只读参数
function arraySum(arr: readonly number[]) {
  // arr[0] = 0
  console.log(arr)
}

// void:表示函数没有返回值
function f4(): void {
  // return 123
  // return null
  return undefined
}

type voidFunc = () => void
const f5: voidFunc = () => {
  return 123
}
// f5() * 2  此处报错是因为f5没有返回值，但是却用到了它的返回值
// 此情况仅限于变量、对象方法、函数参数
// 直接声明返回值为void则报错
function f6(): void {
  // return 1
}
const f7 = function (): void {
  // return 1
}

// never类型: 函数没有执行结束，不可能有返回值
// 1.抛错的函数
function fail(msg: string): never {
  throw new Error(msg)
}
// 2.无限执行的函数
const sing = function (): never {
  while (true) {
    console.log('sing')
  }
}

function neverReturns(): never {
  throw new Error()
}
function f8(x: string | undefined) {
  if (x === undefined) {
    neverReturns()
  }
  console.log(x)
}

function sometimesThrow(): number {
  if (Math.random() > 0.5) {
    return 100
  }
  throw new Error('error')
}
const result = sometimesThrow()

// 局部类型:只在函数内部有效
function helloWorld(txt: string) {
  type message = string
  let newTxt: message = 'helloworld' + txt
  return newTxt
}
// const newTxt: message = helloWorld('123')

// 高阶函数
// 1.接收函数作为参数
const numbers: number[] = [1, 2, 3]
numbers.forEach((item) => item * 2)
console.log(numbers)
// 2.返回值为函数
function f9() {
  return function () {
    console.log(123)
  }
}

// 函数重载
// 接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为
function reverse(str: string): string
function reverse(arr: any[]): any[]
function reverse(stringOrArray: string | any[]) {
  if (typeof stringOrArray === 'string') {
    return stringOrArray.split('').reverse().join()
  } else {
    return stringOrArray.slice().reverse()
  }
}

function fn(x: boolean): void
function fn(x: string): void
function fn(x: boolean | string) {
  console.log(x)
}

function fn2(x: string): 0 | 1
function fn2(x: any): number
function fn2(x: any): any {
  console.log(x)
}
const a: 0 | 1 = fn2('hi')

// 对象的方法也可以使用重载
class StringBuilder {
  #data = ''
}
</script>

<template></template>
