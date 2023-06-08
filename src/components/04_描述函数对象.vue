<script lang="ts">
type Fn1 = (a: number, b: number) => number
const b1: Fn1 = (x, y) => 1
b1(1, 2)

type FnReturnVoid = () => void
type FnReturnUndefined = () => undefined

const f1: FnReturnVoid = () => {
    console.log(1)
}
const f2: FnReturnUndefined = () => undefined

type Person1 = {
    name:string
    age:number
}
</script>