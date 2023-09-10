<script setup lang="ts">
// 1. 基本类型 boolean string number bigint symbol object undefined null
let x1: undefined = undefined
console.log(x1)
let x2 = undefined
console.log(x2)
let x3 = null
console.log(x3)

// 2.包装对象类型和字面量类型
// Boolean 和 boolean
// String 和 string
// Number 和 number
// BigInt 和 bigint
// Symbol 和 symbol
// 大写类型同时包含包装对象和字面量两种情况，小写类型只包含字面量，不包含包装对象
const a1: String = '123'
const a2: string = '456'
const a3: string = new String('789')
console.log(a1, a2, a3)
// 建议只使用小写类型，不使用大写类型。
// 因为绝大部分使用原始类型的场合，都是使用字面量，不使用包装对象。而且，TypeScript 把很多内置方法的参数，定义成小写类型，使用大写类型会报错。
const b1: number = 1
const b2: Number = 2
Math.abs(b1)
Math.abs(b2)

// 3.Object和object
// 3.1 几乎所有的类型都可以赋值给Object类型，除了null undefined never等，范围太广泛，一般不使用
let obj: Object
obj = true
obj = 'hi'
obj = 1
obj = {}
obj = []
obj = () => 1
let obj2: never
obj = obj2
obj = null
obj = undefined
console.log(obj)

// 3.2 小写的object类型只包含对象、数组、函数，不包括原始类型的值
let obj3: object
obj3 = 1
obj3 = {}
obj3 = []
obj3 = () => 1
console.log(obj3)
// 3.3 建议总是使用object，不使用Object
// 3.4 无论Object或者object，都只包含js内置的属性和方法，不包含用户自定义的属性和方法
const obj4: object = { foo: 1 }
console.log(obj4.toString())
console.log(obj4.foo)

// 4. null undefined
// 4.1 总之，打开strictNullChecks以后，undefined和null只能赋值给自身，或者any类型和unknown类型的变量。
let x4: never;
x4 = null
console.log(x4)
let x5: number;
x5 = null
console.log(x5)
let x6: any = null
console.log(x6);
let x7: unknown = undefined
console.log(x7);

// 5. 值类型
// 5.1 TypeScript 推断类型时，遇到const命令声明的变量，如果代码里面没有注明类型，就会推断该变量是值类型。
const x8 = '123' // type '123' 因为const命令声明的变量，一旦声明就不能改变，相当于常量
console.log(x8);
const x9: string = '123' // type string
console.log(x9);
const x10 = { foo: 1 } // type { foo: number } const变量赋值为对象时，属性值是可以改变的
console.log(x10);

// 6.联合类型
let c1: string | number = 123
console.log(c1);
// 6.1 使用联合类型，需要对类型进行收窄

// 7.交叉类型
let c2: string & number;
console.log(c2);
let c3: { foo: string } & { bar: number }
c3 = {
    foo: '123',
    bar: 123
}
console.log(c3);
// 7.1 交叉类型常常用来为对象类型添加新属性
type A = {
    foo: number
}
type B = A & {
    bar: string
}
let c4: B;
console.log(c4);

// 8. type 用来定义类型别名
type Age = number
let age: Age = 30
console.log(age);
// 8.1 别名可以让类型的名字变得更有意义，也能增加代码的可读性，还可以使复杂类型用起来更方便，便于以后修改变量的类型。
// 8.2 别名不允许重名
// 8.3 别名的作用域是块级作用域，代码块内部定义的别名不会影响到外部定义的别名

// 9. typeof
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 1337; // "number"
typeof "foo"; // "string"
typeof {}; // "object"
typeof parseInt; // "function"
typeof Symbol(); // "symbol"
typeof 127n // "bigint"

// 10.块级类型声明
if (true) {
    type T = number;
    let v: T = 5;
    console.log(v);

} else {
    type T = string;
    let v: T = 'hello';
    console.log(v);

}
// 11. 类型兼容：凡是可以使用父类型的地方，都可以使用子类型，但是反过来不行
</script>