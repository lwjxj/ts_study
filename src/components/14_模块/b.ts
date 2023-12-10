// 引入类型第一种写法
import { Bool, type A, a } from './a'
// 引入类型第二种写法
// import type { A } from './a'

// importsNotUsedAsValues
// (1) remove：这是默认值，自动删除输入类型的 import 语句
// (2) preserve：保留输入类型的 import 语句
// (3) error：保留输入类型的 import 语句（与preserve相同），但是必须写成import type的形式，否则报错
let foo: Bool = true

// commonJs模块，与es module不兼容
// import fs  = require('fs')
// <=> import * as fs from 'fs'
// let obj = { foo: 123 }
// export = obj
// export =语句输出的对象，只能使用import =语句加载
// import obj = require('./a');

// 模块定位：指的是一种算法，用来确定 import 语句和 export 语句里面的模块文件位置
// 相对模块
// import { TypeA } from './a';
// 非相对模块
// import * as $ from "jquery";
// 编译参数moduleResolution，用来指定具体使用哪一种定位算法。常用的算法有两种：Classic和Node
// 相对模块指的是路径以/、./、../开头的模块
// import Entry from "./components/Entry";
// import { DefaultHeaders } from "../constants/http";
// import "/mod";
// 非相对模块指的是不带有路径信息的模块
// import * as $ from "jquery";
// import { Component } from "@angular/core"