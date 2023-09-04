<script lang=ts>
type IsTuple<T> = 
    [T] extends [never] ? false :
    T extends readonly any[] ?
    number extends T['length'] ? false : true
    : T extends { length: number } ? false : true

    type IsTuple2<T> = [T] extends [never] ? false : T extends readonly any[] ? number extends T['length'] ? false : true : false
</script>