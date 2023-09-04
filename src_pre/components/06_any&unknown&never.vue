<script lang="ts">
// unknown适合于从接口获取数据，暂时不知道什么类型的值，通过类型断言去使用
// unknown类型可以收窄到任何类型，unknown是任何类型的联合
const u: unknown = 1
const u5 = (u as number).toFixed(1)

// unknown和any类型的区别
// 1.any类型的值可以赋值给几乎所有类型，而unknown类型的值只能赋值给unknown和any类型
// 2.unknown类型使用的时候需要进行断言或者类型收窄，而any类型几乎关闭了TS类型检查

// never 相当于空集，表示永远不存在的类型
function fail(msg: string): never {
    throw new Error(msg)
}
// 异常
function error2(msg: string): never { // 编译正确
  throw new Error(msg)
}

// 死循环
function loopForever(): never { // 编译正确
  while (true) {}
}


function fn(x: number | string) {
    if (typeof x === 'number') {
        console.log(x)
    } else if (typeof x === 'string') {
        console.log(x)
    } else {
        console.log(x)
    }
}

// any相当于关闭了TS的类型检查，但是any不能复制给never类型
const any1:any = 1
const any2:never = any1

// void 一般用于表示函数无返回值
function sayHello(): void {
    console.log("hello 啊，树哥！")
}
</script>