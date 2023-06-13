<script lang="ts">
// 1. typeof  返回值有时无法区别  比如：{} null
// 2. instanceof  不支持简单类型  不支持TS独有的类型
type Person2 = {
    name: string
}
type Animal = {
    age: number
}
const f10 = (a: Person | Animal) => {
    // if()
    console.log(a)
}

// 3.使用in做类型收窄  只适用于部分对象
const f11 = (a: Person | Animal) => {
    if ('name' in a) {
        a
    } else if ('age' in a) {
        a
    } else {
        a
    }
}

// 4.通过逻辑判断来收窄类型
const f12 = (x: string | number, y: string | boolean) {
    if (x === y) {
        console.log(x, y)
    } else {
        console.log(x, y)
    }
}

// 5.类型谓词 is 支持所有类型  非常麻烦
type Rect = {
    width: number
    height: number
}
type Circle = {
    center: [number, number]
    radius: number
}
const f13 = (a: Rect | Circle) => {
    if (isRect(a)) {
        console.log(a)
    } else {
        a
    }
}
function isRect(x: Rect | Circle): x is Rect {
    return 'height' in x && 'width' in x
}

// 6.kind 可辨别联合：同名、可辨别的简单类型的key
type Circle2 = { kind: 'Circle', center: [number, number] }
type Square = { kind: 'Square', sideLength: number }
type Shape = Circle2 | Square
const f14 = (a: string | number | Shape) => {
    if (typeof a === 'string') {
        a
    } else if (typeof a === 'number') {
        a
    } else if (a.kind === 'Circle') {
        a
    } else {
        a
    }
}

// 7.断言 as

</script>