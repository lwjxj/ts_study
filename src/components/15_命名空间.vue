<script setup lang="ts">
// 命名空间是一种将相关代码组织在一起的一种方式，诞生在ES模块之前，自从有了ES模块，官方就不在推荐使用namespace了
// 基本使用
namespace Utils {
    function isString(value:any) {
        return typeof value === 'string'
    }
    isString('yes')
    export function log(msg:string) {
        console.log(msg)
    }
}
// isString('no')
Utils.log('msg')

namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}
import polygons = Shapes.Polygons
</script>
