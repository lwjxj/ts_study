<script setup lang="ts">
// 写法
// <Type>value
// value as Type
// 推荐写法二

const username = document.getElementById('username')
if (username) {
    (username as HTMLInputElement).value
}

// 类型断言不能滥用，因为它改变了TS的类型检查，可能埋下隐患
const data: object = {
    a: 1,
    b: 1,
    c: 1,
}
console.log((data as Array<string>).length);

// 类型断言的好处，指定unknown类型的具体类型
const value: unknown = 'hello'
const s1: string = value as string

// 指定联合类型的具体类型
const s2: number | string = 'hello'
const s3: number = s2 as unknown as number

// 类型断言的条件
// expr as T
// 上面代码中，expr是实际的值，T是类型断言，它们必须满足下面的条件：expr是T的子类型，或者T是expr的子类型
// 也就是说，类型断言要求实际的类型与断言的类型兼容，实际类型可以断言为一个更加宽泛的类型（父类型），
// 也可以断言为一个更加精确的类型（子类型），但不能断言为一个完全无关的类型
// 但是，如果真的要断言成一个完全无关的类型，也是可以做到的。那就是连续进行两次类型断言，先断言成 unknown 类型或 any 类型，然后再断言为目标类型。
// 因为any类型和unknown类型是所有其他类型的父类型，所以可以作为两种完全无关的类型的中介
</script>