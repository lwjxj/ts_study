<script lang="ts">
// object 类型用于表示所有的非原始类型，即我们不能把 number、string、boolean、symbol等 原始类型赋值给 object。
// 在严格模式下，null 和 undefined 类型也不能赋给 object。
// let object: object;
// object = 1; // 报错
// object = "a"; // 报错
// object = true; // 报错
// object = null; // 报错
// object = undefined; // 报错
// object = {}; // 编译正确


// 大 Object 所有原始类型、非原始类型都可以赋给 Object(严格模式下 null 和 undefined 不可以)
let bigObject: Object = 1; // 编译正确
bigObject = "a"; // 编译正确
bigObject = true; // 编译正确
bigObject = null; // 报错
bigObject = undefined; // 报错
bigObject = {}; // ok

</script>