<script setup lang="ts">
// 1.any  TS关闭类型检查
let x:any = 1
let y:never
console.log(y)
y = x

function add(x:number, y:number) {
    return x + y
}

let x1;

add(1,2)

// 污染问题  运行时才会暴露
let x2:any = 'zs'
let y2:number;
y2 = x2
console.log(y2)
y2.toFixed(2)

// 2.unknown
// 与any相同之处：大部分类型的值都可以赋值给unknown类型
let x3:unknown
x3 = 'string'
x3 = 123
x3 = true
console.log(x3)
// 与any不同之处：（1）unknown类型的变量不能赋值给其他类型的变量，比如any和unknown类型
// （2）不能调用unknown类型的属性和方法
// （3）能够进行的运算有限，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错
// （4）unknown进行类型收窄后使用
// unknown类型可以看作更安全的any类型，在使用any的地方优先考虑使用unknown类型
let x4:number = 123
x4 = x3 // 避免污染问题
console.log(x4)
let x5:unknown = {
    foo: 123
}
console.log(x5.foo)
console.log(x5 === 1, x5++)

if(typeof x5 === 'number') {
    x5++
}

// 3.never
// (1)可以赋值给其他任意类型，相当于集合中的空集
let x6:never
let x7:string = x6
// console.log(x6)
function f():never {
    throw new Error('出错了')
}
let x8:number = f()
console.log(x8)
</script>