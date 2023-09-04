<script lang="ts">
// 语法 x!
let mayNullOrUndefinedOrString: null | undefined | string
mayNullOrUndefinedOrString.toString()
mayNullOrUndefinedOrString!.toString()

type NumGenerator = () => number
function myFunc(numGenerator: NumGenerator | undefined) {
    const num1 = numGenerator()
    const num2 = numGenerator!()
    console.log(num1, num2)
}
</script>