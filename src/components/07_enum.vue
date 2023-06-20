<script lang="ts">
// 普通枚举
enum A10 {
    todo = 0,
    done
}

let status1 = A10.todo

enum Permission {
    None = 0, // 0000
    Read = 1 << 0, // 0001
    Write = 1 << 1, // 0010
    Delete = 1 << 2, // 0100
    Manage = Read | Write | Delete // 0111
}

const user1: { permission: Permission} = { permission: 0b0001 }
if((user1.permission & Permission.Write) === Permission.Write) {
    console.log('write')
}

// 字符串枚举
enum Color {
    RED = '红色',
    ORANGE = '橘黄色'
}
const orange:Color = Color.ORANGE
console.log(orange)

// 常量枚举
const enum Color2 {
  RED,
  PINK,
  BLUE,
}

const color2: Color2[] = [Color2.RED, Color2.PINK, Color2.BLUE];
console.log(color2); //[0, 1, 2]

//编译之后的js如下：

var color = [0 /* RED */, 1 /* PINK */, 2 /* BLUE */];
// 可以看到我们的枚举并没有被编译成js代码 只是把color这个数组变量编译出来了
</script>