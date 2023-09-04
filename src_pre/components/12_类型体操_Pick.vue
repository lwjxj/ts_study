<script lang="ts">
type MyPick<T, K extends keyof T> = {
    [p in K]: T[p]
}

type R = MyPick<{a: 1, b:2}, "a">

// keyof用法：去type或interface的key组成联合类型
interface userInfo {
    name: string
    age: string
}
type keyofValue = keyof userInfo
// keyofValue = "name" | "age"

type name = 'firstname' | 'lastname'
type Tname = {
    [key in name]: string
}
// Tname={firstname: string, lastname: string}


function getValue<T extends Object, K extends keyof T>(o:T,key:K): T[K] {
    return o[key]
}
// 无法确定返回值类型
// 无法对key进行约束

function getValue2(o,key) {
    return o[key]
}
</script>