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
const x = Color.Red;
const y = Color.Green;
const z = Color.Blue;

// 编译后
// const x = 0 /* Color.Red */;
// const y = 1 /* Color.Green */;
// const z = 2 /* Color.Blue */;
// 加上const的好处是成员会被替换为对应的值，这样能提高性能表现

// 字符串Enum
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// keyof运算符：取出Enum结构的所有成员名，作为联合类型返回
enum MyEnum {
  A = 'a',
  B = 'b'
}

// 'A'|'B'
type Foo2 = keyof typeof MyEnum;
// 注意，这里的typeof是必需的，否则keyof MyEnum相当于keyof string
</script>
