<script lang="ts">
type C1 = { name: string }
type C2 = { age: number }
type C3 = C1 | C2
const c4:C3 = {
    name:'zs',
    age:10,
}
</script>