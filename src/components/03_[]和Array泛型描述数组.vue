<script lang="ts">
const arr: Array<number> = [1, 2]

type A0 = string[]
const a0: A0 = ['h']
type A1 = Array<string>
const a1: A1 = ['h']

type A2 = [string, string, string]
const error:A2 = ['h','h','h']

type A3 = [number, string]
const a3:A3 = [1,'h']

type A4 = [string[], number[]]
const a4:A4 = [['h'],[1]]
</script>