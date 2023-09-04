<script lang="ts">
type A = Object
const a: A = () => 1

const b: Array<number> = [1]
const c: Function = () => 1

type Person = {
    name: string
    age: number
}
const d: Person = {
    name: 'zs',
    age: 20
}
console.log(d)

// 索引签名
type B = {
    [k:string] : number
}
const e:B = {
    's': 1
}

// Record泛型
type C = Record<string, number>
console.log(e)
</script>