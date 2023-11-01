<script lang="ts">
// 接口：看作一种类型约定
interface Person {
  firstName: string
  lastName: string
  age: number
}

const p: Person = {
  firstName: 'john',
  lastName: 'Smith',
  age: 30,
}

// 方括号运算符可以取出interface某个属性的类型
interface Foo {
  a: string
}
type A = Foo['a']

// 接口的用法
// 1.表示对象的属性
interface Point {
  x: number
  y?: number
  readonly z: number
}

// 2.对象的属性索引
interface B {
  [key: string]: number
}
// 上面表示属性名为string类型，属性值为number的所有属性
interface C {
  [key: number]: string
}
const obj: C = ['a', 'b', 'c']

// 3.对象的方法
interface M1 {
  f(x: boolean): string
}
interface M2 {
  f: (x: boolean) => string
}
interface M3 {
  f: { (x: boolean): string }
}

const f = 'f'
interface M4 {
  [f](x: boolean): string
}

interface M5 {
  f(): number
  f(x: boolean): boolean
  f(x: string, y: string): string
}

function MyFunc(): number
function MyFunc(x: boolean): boolean
function MyFunc(x: string, y: string): string
function MyFunc(x?: boolean | string, y?: string): number | boolean | string {
  if (x === undefined && y === undefined) return 1
  if (typeof x === 'boolean' && y === undefined) return true
  if (typeof x === 'string' && typeof y === 'string') return 'hello'
  throw new Error('wrong parameters')
}

const a: M5 = {
  f: MyFunc,
}

// 4.函数
interface Add {
  (x: number, y: number): number
}
const myAdd: Add = (x, y) => x + y

// 5.构造函数
interface ErrorConstructor {
  new (msg: string): Error
}

// interface的继承
interface Shape {
  name: string
}
interface Style {
  color: string
}
interface Circle extends Shape, Style {
  redius: number
}

interface Foo {
  id: string
}
interface Bar extends Foo {
  // id: number
}

// interface 继承type
type Country = {
  name: string
  capital: string
}
interface CountryWithPop extends Country {
  population: number
}
// 注意：如果type定义的类型不是对象，interface就无法继承

// interface 继承class
class D {
  x: string = ''
  y(): boolean {
    return true
  }
}
interface E extends D {
  z: number
}
const e: E = {
  x: '',
  y: function () {
    return true
  },
  z: 1,
}
</script>
