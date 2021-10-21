### es 介绍
ECMAScript 是 js 的版本说法。我们之前讲的原生 js 就是 es3 es5。现在接触的是 es6(es2015) ....,统称为 新 js。

### es6 语法

#### let 和 const
用来声明变量的，替代之前的 var。
let 和 const 自带块级作用域，也就是 {} 就是作用域 
let const 与 var 的区别
- 前者没有变量声明提升
- 前者拥有块级作用域
- 前者不能重复声明

let 和 const 的区别
const 用于声明常量(比如 pi，在文件中不会被修改一直是具体的某个值)，const 声明的变量不可修改

#### 变量的解构赋值
变量的解构赋值就是用来创建变量的

对象的解构赋值
```js
  let {username: x, userage} = user
  console.log(userage)
  console.log(x)
```
数组的解构赋值

字符串的结构赋值

函数参数的解构赋值


#### 字符串的新增
- 可以使用 for of 遍历字符串
- 模版字符串 
- trimStart  trimEnd

#### 数值的扩展(number 的扩展)
新的数据类型 BigInt 大整型, 大整型的数字后面加 n，使用 typeof 检测的结果是 bigint
可以使用 BigInt(number) 方法将 number 转化成大整型数

#### 函数的扩展
- 函数参数的默认值
- 函数的剩余参数 (rest)
- 箭头函数

#### 数组的扩展
- entries()，keys()和values() 新增方法

#### 对象的扩展
- 对象的简洁表示法
- Object.is  用来判断相等 基本上和 === 一致 除了 -0和+0 以及 NaN和NaN 的比较
- Object.assign 
- Object.keys()，Object.values()，Object.entries()

#### 运算符的扩展
- 指数运算符 **
- 链判断运算符
- null(undefined) 判断运算符
- 逻辑赋值运算符 

#### 扩展(展开)运算符
写法  ...
数组或对象的拷贝

#### symbol
表示独一无二的值

#### Set 和 Map 数据结构
其实就相当于 js 的内置对象
Set 类似于数组，但是成员的值都是唯一的，没有重复的值。
WeakSet 和 Set 基本一样，只不过前者只能存 对象

Map  类似于对象，区别在于 Map 可以把其他的任何的值当作属性名，不局限于字符串

#### class


#### js 的补充语法
除了循环之外还有一些循环遍历的语法
- for in 语法
- for of 语法

最新的 js 数据类型
字符串 布尔 number null  undefined  对象  BigInt symbol 

错误捕获语法
- try catch 语句




node 浏览器引擎   js 的运行环境

npm 下载方式  全局  必须  非必须

模块方式使用 包

webpack 工具

es6 
 let  const 
 字符串
 数组
 对象 
 函数 
 模板语法
 解构赋值
 symbol
 bigInt
 运算符
 set  map
 class

 







