<script setup lang="ts">
// 作用：让当前文件可以使用其他文件声明的类型

// 变量
declare let x: number // 只用来给出类型描述，纯类型代码，不允许设置变量的初始值
x = 1
document.title = 'hello'

// 函数
declare function sayHello(name: string): void
sayHello('zs')

// class
declare class C {
    // 静态成员
    public static so(): string
    private static s1: string

    // 属性
    public a: number
    private b: number

    // 构造函数
    constructor(arg: number)

    // 方法
    m(x: number, y: number): number

    // 存取器
    get c(): number
    set c(value: number)

    // 索引签名
    [index: string]: any
}

// module namespace
declare namespace AnimalLib {
    class Animal {
        constructor(name: string)
        eat(): void
        sleep(): void
    }
    type Animals = 'Fish' | 'Dog'
    export var a: boolean
}

declare module AnimalLib2 {
    class Animal {
        constructor(name: string)
        eat(): void
        sleep(): void
    }
    type Animals = 'Fish' | 'Dog'
    export function readFile(filename: string): string
}


// 引用外部库
declare namespace myLib {
    function makeGreeting(s: string): string
    let numberOfGreetings: number
}
let result = myLib.makeGreeting('hello')
let count = myLib.numberOfGreetings

// declare 关键字的另一个用途，是为外部模块添加属性和方法时，给出新增部分的类型描述
// import { Foo as Bar } from 'moduleA';
// declare module 'moduleA' {
//   interface Bar extends Foo {
//     custom: {
//       prop1: string;
//     }
//   }
// }

// declare global
// 为 JavaScript 引擎的原生对象添加属性和方法
export { };

declare global {
    interface String {
        toSmallString(): string;
    }
}

String.prototype.toSmallString = (): string => {
    // 具体实现
    return '';
};

declare global {
    interface Window {
        myAppConfig: object;
    }
}

const config = window.myAppConfig;

// declare enum
</script>