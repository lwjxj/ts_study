<script lang="ts">
const u1:undefined = undefined
const n1:null = null

const u2:string = undefined
const n2:string = null

// 如果你在tsconfig.json指定了"strictNullChecks":true ，即开启严格模式后, null 和 undefined 只能给它们自己的类型赋值
// 但是 undefined 可以给 void 赋值
let u3:void = undefined // 编译正确
let n3:void = null // 编译错误
</script>