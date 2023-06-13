<script lang="ts">
const d0:Date = new Date()
const d1:RegExp = /ab+c/
const m:Map<string, number> = new Map()
m.set('1', 2)
const wm:WeakMap<{name: string}, number> = new WeakMap()

const d2:object = () => 1

const s:Set<number> = new Set()
s.add(1)
const ws:WeakSet<{}> = new WeakSet()
ws.add(1)

const n:bigint = 100n
const s1:symbol = Symbol('s')
</script>