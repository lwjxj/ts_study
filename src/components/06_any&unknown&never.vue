<script lang="ts">
// unknown适合于从接口获取数据，暂时不知道什么类型的值，通过类型断言去使用
const u: unknown = 1
const u2 = (u as number).toFixed(1)
// never 相当于空集

function fail(msg: string): never {
    throw new Error(msg)
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
</script>