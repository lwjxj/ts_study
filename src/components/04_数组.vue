<script setup lang="ts">
// 1.数组的特性：所有成员的类型相同，数量不确定
let arr: number[] = [1, 2, 3]
console.log(arr)
let arr2: Array<number> = [4, 5, 6]
console.log(arr2)

// 2.类型推断
// 类型推断的自动更新只发生初始值为空数组的情况。如果初始值不是空数组，类型推断就不会更新
let arr3 = [] // any[]
console.log(arr3)
arr3.push(1)
console.log(arr3) // 自动更新类型 number[]
arr3.push('123')
console.log(arr3) // (string | number)[]

// 3.只读数组，const断言
const arr4 = [1, 2]
arr4[0] = 3
const arr5: readonly number[] = [1, 2, 3]
arr5[0] = 2
// 只读数组是数组的父类型，所以它不能代替数组
function getSum(s: number[]) {
  console.log(s)
}
const arr6: readonly number[] = [1, 2]
getSum(arr6 as number[])

// 4.readonly关键字不能和数组的泛型写法一起使用
// const arr7: readonly Array<number> = [1, 2]

const arr8: ReadonlyArray<number> = [1, 2]
console.log(arr8)
const arr9: Readonly<number[]> = [1, 2]
console.log(arr9)
const arr10 = [0, 1] as const
console.log(arr10)

// 5.多维数组
const multi: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
]
console.log(multi)
</script>

<template></template>
