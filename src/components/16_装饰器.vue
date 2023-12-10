<script setup lang="ts">
// 简介：是一种语法结构，用来在定义时修改类的行为（扩展）
// （1）第一个字符（或者说前缀）是@，后面是一个表达式。
// （2）@后面的表达式，必须是一个函数（或者执行后可以得到一个函数）。
// （3）这个函数接受所修饰对象的一些相关值作为参数。
// （4）这个函数要么不返回值，要么返回一个新对象取代所修饰的目标对象。

function simpleDecorator(value: any, context: any) {
  console.log(`this is ${context?.kind} ${context?.name}`)
  return value
}
// @simpleDecorator
class A {}

// @frozen class Foo {
//     @configurable(false)
//     @enumerable(true)
//     method() {}
//     @throttle(500)
//     expensiveMethod() {}
// }

// 版本
// 标准语法  传统语法（--experimentalDecorators）

// 结构
type Decorator = (
  value: any,
  context: {
    kind: string
    name: string | symbol
    addInitializer?(initializer: () => void): void
    static?: boolean
    private?: boolean
    access: {
      get?(): unknown
      set?(value: unknown): void
    }
  }
) => void | any

function decorator(value: any, context: ClassMemberDecoratorContext) {
  console.log(value, context)
}

// 类装饰器
type ClassDecorator = (
  value: Function,
  context: {
    kind: 'class'
    name: string | undefined
    addInitializer(initializer: () => void): void
  }
) => Function | void

function Greeter(value: any, context: any) {
  if (context.kind === 'class') {
    value.prototype.greet = function () {
      console.log('你好')
    }
  }
}
// @Greeter
class User {}
let u = new User()
// u.greet()

// 方法装饰器
type ClassMethodDecorator = (
  value: Function,
  context: {
    kind: 'method'
    name: string | undefined
    static: boolean
    private: boolean
    access: { get: () => unknown }
    addInitializer(initializer: () => void): void
  }
) => Function | void

function trace(decoratedMethod: any) {
  console.log(decoratedMethod)
}

class C {
  //   @trace toString() {
  //     return 'C'
  //   }
}
// @trace => C.prototype.toString = trace(C.prototype.toString)

// 属性装饰器

// getter装饰器 setter装饰器

// accessor装饰器

// 执行顺序
// 1.评估：计算@符号后面的表达式的值，得到的应该是函数
// 2.应用：应用于当前类

// -----------------------------
// 类装饰器
function foo(target: any) {
  target.prototype.username = 'zs'
}
@foo
class Person {}
const p = new Person()
// @ts-ignore
console.log(p.username)

// 装饰器工厂
function foo2(options: any) {
  return function (target: any) {
    target.prototype.username = options.username
    target.prototype.age = options.age
  }
}
@foo2({
  username: 'ls',
  age: 20,
})
class Person2 {}
const p2 = new Person2()
// @ts-ignore
console.log(p2.username, p2.age)

// 装饰器组合
// 执行顺序：从上至下执行所有装饰器工厂，拿到所有真正的装饰器，再从下至上执行

// 属性装饰器
function foo3(options: any) {
  return function (target: any, attr: any) {
    target[attr] = options
  }
}
class Person3 {
  @foo3('ls')
  // @ts-ignore
  username: string
}
const p3 = new Person3()
console.log(p3.username)

// 方法装饰器
function foo4(target: any, propertyKey: string, des: string) {
  console.log(target, propertyKey, des)
}
class Person4 {
  // @ts-ignore
  @foo4
  test() {
    console.log('test')
  }
}
const p4 = new Person4()
p4.test()
</script>
