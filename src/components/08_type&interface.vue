<script lang="ts">
type FnWithProp = {
    (a:number,b:number): void,
    prop: string
}

const f: FnWithProp = (x, y) => {
    return x*y
}
f.prop = '111'

// 接口：描述对象的属性

interface I {
    [k:string]: number
}

interface I1 extends Array<string> {
    name: string
}
type I2 = Array<string> & {
    name: string
}
interface H1 {
    (x:number,y:number): number
}
const h1:H1 = (x,y) => x+y


interface D extends Date {
    x: number
}
const d10:D = new Date()
d10.x = 1

// type 和 interface的区别
// 1. type 可以描述基本类型和对象，而interface 只能描述对象
// 2. type 只是类型别名，interface 是类型声明
// 3. type 不能重新赋值，扩展性较差，interface 有一个自动合并的功能
type T = string
type T2 = T

interface T3 extends Date {}
type T4 = T3

interface T5 {
    name: string
}
interface T5 {
    age: number
}
const t6: T5 = {
    name: 'zs',
    age: 20
}

declare global {
    interface String {
        padZero(x:string):void
    }
}

const g1 = 'hello'
g1.padZero('hello')
</script>