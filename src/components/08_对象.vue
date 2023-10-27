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
</script>