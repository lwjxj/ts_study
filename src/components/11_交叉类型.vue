<script lang="ts">
type A100 = string & number


type Person100 = {
    id: string
}

type User = {
    id: number
} & Person100

const a100: User = {
    id: 100
}
</script>