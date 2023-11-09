<script setup lang="ts">
// 1.1属性的类型
class Point {
    x!: number
    y!: number
}

// 1.2 readonly修饰符
class A {
    // readonly id = 'foo'
    // readonly id:string
    readonly id: string = 'bar'
    constructor() {
        this.id = 'foo'
    }
}

// 1.3 方法的类型
class Point2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    add(point: Point) {
        return new Point2(
            this.x + point.x,
            this.y + point.y
        );
    }
}

// 1.4 存取器  取值器getter 存值器setter
class C {
    _name = ''
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }
}
// （1）如果某个属性只有get方法，没有set方法，那么该属性自动成为只读属性
// （2）TypeScript 5.1 版之前，set方法的参数类型，必须兼容get方法的返回值类型，否则报错
// （3）get方法与set方法的可访问性必须一致，要么都为公开方法，要么都为私有方法

// 1.5 属性索引
class MyClass {
    [s: string]: boolean |
    ((s: string) => boolean);

    get(s: string) {
        return this[s] as boolean;
    }
}

// 2. 类的interface接口
// 2.1 implements
interface Country {
    name: string;
    capital: string;
}
// 或者
type Country2 = {
    name: string;
    capital: string;
}

class MyCountry implements Country {
    name = '';
    capital = '';
}

// 未完待续
</script>