<script lang=ts>
type MyParameters<F extends (...args: any[]) => any> = 
    F extends (...args: infer X) => unknown ? X : never

const foo = (arg1: string, arg2: number): void => {}
type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
</script>