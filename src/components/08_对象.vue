<script setup lang="ts">
const obj: {
    x: number;
    y: number;
} = { x: 1, y: 1 }

type MyObj = {
    x: number
    y: number
}
const o1: MyObj = { x: 1, y: 1 }

type User = {
    name: string;
    age: number;
}
type Name = User['name'] // string

interface MyObj2 {
    x: number
    y: number
}

interface MyInterface {
    toString(): string // 继承的属性
    prop: number // 自身的属性
}
const obj1: MyInterface = {
    prop: 123
}
// 上面示例中，obj只写了prop属性，但是不报错。因为它可以继承原型上面的toString()方法

// 可选属性 ?
// 可选属性等同于允许赋值为undefined
// 读取可选属性之前，检查是否等于undefined
const user: {
    firstName: string;
    lastName?: string;
} = { firstName: 'Foo' }
if (user.lastName !== undefined) {
    console.log(user.lastName);
}
const lastName = user.lastName === undefined ? 'foo' : user.firstName
const lastName2 = user.lastName ?? 'foo' // null 判断运算符
// TypeScript 提供编译设置ExactOptionalPropertyTypes，只要同时打开这个设置和strictNullChecks，可选属性就不能设为undefined

// 只读属性
interface MyInterface2 {
    readonly prop: number
}
const person: {
    readonly age: number
} = { age: 20 }
// person.age = 21

interface Home {
    readonly resident: {
        name: string
        age: number
    }
}
const h: Home = {
    resident: {
        name: 'zs',
        age: 30
    }
}
h.resident.name = 'ls'
// h.resident = {}


interface Person {
    name: string
    age: number
}
interface ReadonlyPerson {
    readonly name: string
    readonly age: number
}
let w: Person = {
    name: 'ww',
    age: 40
}
let r: ReadonlyPerson = w
w.age++
console.log(r.age); // 41

const myUser = {
    name: 'zs'
} as const

// myUser.name = 'ls'

// 这时会以声明的类型为准，因为name属性可以修改
const myUser2: { name: string } = {
    name: 'zs'
} as const
myUser2.name = 'ls'

// 属性名的类型索引, 适用于对象属性比较多的情况，不要用这种方式声明数组
type MyObj3 = {
    [key: string]: string
}
const obj2: MyObj3 = {
    foo: 'a',
    bar: '123'
}
type MyArr = {
    [key: number]: number
}
const arr: MyArr = [1, 2, 3]
// console.log(arr.length);


// 结构赋值
const product = {
    id: 1,
    name: 'zs',
    price: 1000
}
const { id, name, price }: { id: number, name: string, price: number } = product

// let { x: foo, y: bar } = obj
// 上面示例中，冒号不是表示属性x和y的类型，而是为这两个属性指定新的变量名。如果要为x和y指定类型，不得不写成下面这样。
let { x: foo, y: bar }: { x: number, y: number } = obj

function draw({
    shape: Shape,
    xPos: number = 100
}) {
    console.log(Shape, number);
}
const drawObj = {
    shape: 100,
    xPos: 100
}
draw(drawObj)
// 上面示例中，函数draw()的参数是一个对象解构，里面的冒号很像是为变量指定类型，其实是为对应的属性指定新的变量名。
// 所以，TypeScript 就会解读成，函数体内不存在变量shape，而是属性shape的值被赋值给了变量Shape。

// 结构类型原则
// 对象B满足对象A的结构特征（包含对象A的类型），TS就称对象B兼容对象A的类型
type A = { x: number }
type B = { x: number, y: number }
const B1: B = { x: 1, y: 1 }
const A1: A = B1

type myObj = {
    x: number
    y: number
}
function getSum(obj: myObj) {
    let sum = 0
    for (const n of Object.keys(obj)) {
        const v = obj[n]
        sum += Math.abs(v)
    }
}
// 上面示例中，函数getSum()要求传入参数的类型是myObj，但是实际上所有与myObj兼容的对象都可以传入。
// 这会导致const v = obj[n]这一行报错，原因是obj[n]取出的属性值不一定是数值（number），使得变量v的类型被推断为any。
// 如果项目设置为不允许变量类型推断为any，代码就会报错。
function getSum2(obj: myObj) {
    return Math.abs(obj.x) + Math.abs(obj.y)
}

// 严格字面量检查
const point: {
    x: number
    y: number
} = {
    x: 1,
    y: 1,
    z: 1
}
// TypeScript 对字面量进行严格检查的目的，主要是防止拼写错误。一般来说，字面量大多数来自手写，容易出现拼写错误，或者误用 API
const myPoint = {
    x: 1,
    y: 1,
    z: 1
}
const point2: {
    x: number
    y: number
} = myPoint

type Options = {
    title: string
    darkMode?: boolean
}
const obj3: Options = {
    title: 'cs',
    darkmode: true
}
const myOptions = {
    title: 'cs',
    darkmode: true
}
const obj4: Options = myOptions
// 可以使用中间变量来规避严格字面量检查

// 对象定义通用属性
let x: {
    foo: number
    [x: string]: any
}
x = { foo: 1, bar: 2 }

// 最小可选属性规则
type Options2 = {
    a?: number
    b?: number
}
const opts = { d: 123, a: 1 }
const obj5: Options2 = opts
// 报错原因是，如果某个类型的所有属性都是可选的，那么该类型的对象必须至少存在一个可选属性，不能所有可选属性都不存在。这就叫做“最小可选属性规则”

// 空对象
const obj6 = {}
obj6.name = 'zs'
// 空对象没有自定义属性，所以对自定义属性赋值就会报错。空对象只能使用继承的属性，即继承自原型对象Object.prototype的属性。
obj6.toString()
const obj7: {} = { myProp: 1 }
obj7.myProp
// 因为Object可以接受各种类型的值，而空对象是Object类型的简写，所以它不会有严格字面量检查，赋值时总是允许多余的属性，只是不能读取这些属性
</script>