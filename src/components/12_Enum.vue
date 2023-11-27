<script setup lang="ts">
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue
// 编译后
// let Color = {
//   Red: 0,
//   Green: 1,
//   Blue: 2,
// }
// 官方建议谨慎使用Enum结构，因为它不仅仅是类型，还会为编译后的代码加入一个对象
// Enum结构可以被对象的as const 断言代替
enum Foo {
  A,
  B,
  c,
}
const Bar = {
  A: 0,
  B: 1,
  C: 2,
} as const

const enum Test {
  Red,
  Green,
  Blue,
}
const x = Color.Blue
// => const x1 = 2
// 加上const的好处是成员会被替换为对应的值，这样能提高性能表现
</script>
