<script setup lang='ts'>
// 1. TS特有的类型：成员类型可以自由设置的数组，即数组的各个成员的类型可以不同
const s1:[string, number] = ['1', 1]
console.log(s1);

// 2. 与数组的写法区别：成员类型写在方括号里面的就是元组，写在外面的就是数组
// 数组
let a:number[] = [1];
console.log(a);
// 元组
let t:[number] = [1];
console.log(t);

// 3. 使用元祖时必须明确给出类型，不然会被推断为数组类型
let a2 = [1, true]
console.log(a2);

// 4. 元素可选：问号只能用于元组的尾部成员
const a3: [string, number?] = ['123']
console.log(a3);

// const a4:[string?, number] = []

</script>
