<script lang=ts>
type MyAwaited<P extends Promise<any>> = 
    P extends Promise<infer X> ? (X extends Promise<any> ? MyAwaited<X> : X) : P
</script>