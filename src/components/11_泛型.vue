<script setup lang="ts">
// 有些时候，定义函数时并不知道参数的具体类型，只有使用时才知道，这个时候就需要动态传入类型
// 泛型的特点就是带有类型参数
// 总之，泛型可以理解为一段类型逻辑，需要类型参数来表达，有了类型参数以后，可以在输入类型和输出类型之间建立一一对应的关系
function getFirst<T>(arr: T[]): T {
  return arr[0]
}
getFirst<number>([1, 2, 3])
// 可以省略不写，让TS自己推断
getFirst([1, 2, 3])

function comb<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

comb<number | string>([1, 2], ['a', 'b'])
// 一般习惯用T来代替，如果有多个，则使用U、V等代替

function map<T, U>(arr: T[], f: (arg: T) => U) {
  return arr.map(f)
}

map<string, number>(['1'], (n) => parseInt(n))

// 写法
function id<T>(arg: T): T {
  return arg
}
let myId: <T>(arg: T) => T = id

// 泛型接口
interface Box<Type> {
  contents: Type
}
let box: Box<string>

interface Comparator<T> {
  compareTo(value: T): number
}
class Rectangle implements Comparator<Rectangle> {
  compareTo(value: Rectangle): number {}
}

interface Fn {
  <T>(arg: T): T
}

function id2<T>(arg: T): T {
  return arg
}
let myId2: Fn = id

// 类的泛型写法
class Pair<K, V> {
  key!: K
  value!: V
}

class A<T> {
  value!: T
}
class B extends A<any> {}
const Container = class<T> {
  constructor(private readonly data: T) {}
}
const a = new Container<boolean>(true)
const b = new Container<number>(0)

class C<T> {
  value!: T
  add!: (x: T, y: T) => T
  //   static data: T
}
let foo = new C<number>()
foo.value = 0
foo.add = function (x, y) {
  return x + y
}

// 类的本质是一个构造函数
type MyClass<T> = new (...args: any[]) => T
interface MyClass2<T> {
  new (...args: any[]): T
}
// 用法实例
function createInstance<T>(AnyClass: MyClass<T>, ...args: any[]): T {
  return new AnyClass(...args)
}

// 类型别名的泛型写法
type Nullable<T> = T | undefined | null

// 类型参数的默认值
function getFirst2<T = string>(arr: T[]): T {
  return arr[0]
}
getFirst2([1, 2, 3])

// 数组的泛型表示
let arr: Array<number> = [1, 2, 3]
// 在TS内部，Array是一个泛型接口
interface Array<T> {
  length: number
  pop(): T | undefined
  push(...items: T[]): number
  // ...
}
// 只读数组
function doStuff(values: ReadonlyArray<string>) {
  //   values.push('hello')
  console.log(values)
}

// 类型参数的约束条件
function comp<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a
  }
  return b
}
comp([1,3], [1,2])
// comp(1,2)

// 使用注意点
// 1. 尽量少用
// 2. 类型参数越少越好
// 3. 类型参数需要出现两次
// 4. 泛型可以嵌套
</script>
