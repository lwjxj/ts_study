<script setup lang="ts">
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

// interface 继承 class
class A1 {
    x: string = ""
    y(): boolean {
        return true
    }
}

interface B1 extends A1 {
    z: number
}
const b1: B1 = {
    x: '123',
    y: function () { return true },
    z: 1
}

class A2 {
    private x: string = ''
    protected y: string = ''
}
interface B2 extends A2 {
    z: number
}
const b2: B2 = {
    x: '123',
    y: '123',
    z: 123
}

// 接口合并
interface Box {
    width: number
    height: number
}
interface Box {
    length: number
}
// 使用自定义属性
interface Document {
    foo: number
}
document.foo = 1

// 同名方法会发生函数重载
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

// 等同于
interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}

// 如果2个interface 组成的联合类型存在同名属性，那么该属性的类型是联合类型
interface Circle {
    area: bigint
}
interface Rectangle {
    area: number
}
declare const s: Circle | Rectangle
// s.area

// interface 与 type首先表现在都能为对象类型起名的异同
// 1.相同之处
// （1）首先表现在都能为对象类型起名
type Country2 = {
    name: string
}
interface Country3 {
    name: string
}
// 2.不同之处
// （1）interface只能表示对象类型（数组、函数等），type可以表示非对象类型
// （2）interface可以继承其他类型，type不支持继承
// 继承主要是为了添加属性，interface使用extends，type可以使用&运算符
type Animal = {
    name: string
}
type Bear = Animal & {
    honey: boolean
}

interface Animal2 {
    name: string
}
interface Bear2 extends Animal2 {
    honey: boolean
}

type Foo2 = { x: number; };
interface Bar2 extends Foo2 {
    y: number;
}

interface Foo3 {
    x: number;
}
type Bar3 = Foo3 & { y: number; };

//（3）同名interface可以合并，但同名type会报错
//（4）interface不能包含属性映射（mapping），type可以
interface Point2 {
    x: number
    y: number
}
type Point2Copy1 = {
    [key in keyof Point2]: Point2[key]
}
// interface Point2Copy2 {
//     [Key in keyof Point2]: Point2[Key]
// }
// （5）this关键字只能使用interface 
interface Foo4 {
    add(num: number): this
}

type Foo5 = {
    // add(num: number): this
}
class Calculator implements Foo4 {
    result = 0
    add(num: number) {
        this.result += num
        return this
    }
}
// （6）type可以原始数据类型，interface不行
type Mystr = string & {
    type: 'new'
}
// interface Mystr2 extends string {
//     type: 'new'
// }

// （7）interface无法表达某些复杂类型（比如交叉类型和联合类型），但是type可以
type A3 = { /* ... */ };
type B3 = { /* ... */ };

type A3orB3 = A3 | B3;
type A3orB3withName = A3orB3 & {
  name: string
};

// 综上所述，如果有复杂的类型运算，那么没有其他选择只能使用type；一般情况下，interface灵活性比较高，便于扩充类型或自动合并，建议优先使用
</script>
