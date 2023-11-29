<script setup lang="ts">
// 写法
// <Type>value
// value as Type
// 推荐写法二

const username = document.getElementById('username')
if (username) {
    (username as HTMLInputElement).value
}
</script>