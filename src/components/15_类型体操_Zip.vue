<script lang=ts>
type Zip<A extends any[], B extends any[]> = A extends [infer AFirst, ...infer ARest] ? 
    (B extends [infer BFrist, ...infer BRest] ? [[AFirst, BFrist],...Zip<ARest, BRest>] : []) : []

type Zip2<T extends any[], U extends any[]> = [T, U] extends [[infer L, ...infer RestT],[infer R, ...infer RestU]] ? 
    [[L, R], ...Zip2<RestT, RestU>] : []
</script>