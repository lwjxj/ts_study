<script setup lang="ts">
// 1. 基本类型 boolean string number bigint symbol object undefined null
let x1:undefined = undefined
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
const a1:String = '123'
const a2:string = '456'
const a3:string = new String('789')
console.log(a1,a2,a3)
// 建议只使用小写类型，不使用大写类型。
// 因为绝大部分使用原始类型的场合，都是使用字面量，不使用包装对象。而且，TypeScript 把很多内置方法的参数，定义成小写类型，使用大写类型会报错。
const b1:number = 1
const b2:Number = 2
Math.abs(b1)
Math.abs(b2)

// 3.Object和object
</script>