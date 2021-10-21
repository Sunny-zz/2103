// var num = 10
// let num = 10
// console.log(num)

// var num = 10

// if (num > 50) {
//   let num1 = 20
// }

// console.log(num1)

// let arr = [1,2,3]
// for (let i = 0; i < arr.length; i++) {
//   console.log(i)
// }
// console.log(i)

// let lis = document.querySelectorAll('.list li')
// for (let i = 0; i < lis.length; i++) {
//   lis[i].onclick = function(){
//     console.log(i)
//   }
// }

// let num = 10
// let num = 11
// console.log(num)

// const num = 10
// num++

// let user = {
//   username: '大白',
//   userage: 2,
//   hobby: ['打游戏','环游世界']
// }

// let username = user.username
// let userage = user.userage
// 可以使用变量的解构赋值来创建变量

// 对象的解构赋值
// let {username: x, userage} = user
// 创建两个变量 username, userage 。这两个值是 user 对象下重名属性的属性值

// username: x 相当于将名字替换成了 x 并没有创建变量 username而是创建了变量 x
// console.log(userage)
// console.log(x)

// 数组的解构赋值
// let array = ['hello', 'es6']

// let firstStr = array[0]
// let econdStr = array[1]

// 必须注意顺序
// let [firstStr, secondStr] = array
// console.log(firstStr, secondStr)

// // 字符串的结构赋值
// let str = 'hello'
// let [a,b,c,d] = str
// console.log(a,b,c,d)

// 函数参数的解构赋值
// let obj = {
//   name: '小花儿',
//   age: 18
// }

// function show({name, age}){
//   // let {name, age} = obj
//   console.log(`我是${name}，今年${age}岁`)
// }
// show(obj)

// 解构赋值小应用 
// 交换变量的值
// let xx = 10
// let k = 20;

// [xx, k] = [k, xx]
// console.log(xx, k)

// for in 语法用来遍历对象的
// let obj = {
//   name: '小黑',
//   age: 10
// }
// //  对象 {key: value}
// for (const key in obj) {
//   // key 代表遍历的属性名
//   // console.log(key)
//   console.log(obj[key])
// }

// for of 语法用来遍历数组
// let arr = [1,2,3,4,5]
// for (const value of arr) {
//   console.log(value)
// }

// 字符串的新增
// let str = 'hello'
// 将字符串中的每个字符依次输出
// 循环 +  str.charAt(ind)

// for (const value of str) {
//   console.log(value)
// }

// let x = 10
// let y = 5
// console.log(`坐标是(${x},${y})`)

// console.log(67676565444456789n)
// const a = 2172141653n;
// const b = 15346349309n;
// console.log(a === 2172141653)
// console.log(b)

// 函数的扩展
// 函数参数的默认值
// function add(num1 = 10, num2 = 20){
//   // if(!num1 && num1 !== 0) {
//   //   num1 = 10
//   // }
//   // if(!num2 && num2 !== 0){
//   //   num2 = 20
//   // }
//   // num1 = (num1 || num1===0) ? num1 : 10
//   // num2 = (num2 || num2===0) ? num2 : 20

//   // 给函数的参数直接设置默认值
//   console.log(num1 + num2)
// }
// add(1,0)

// 函数的剩余参数
//  ...rest  得到的是数组
// 只能写在已有参数后面
// function add (a,...rest) {
//   console.log(rest)
// }
// add(1,2,3,4,5)

// 箭头函数
// 和普通函数区别
// 1. 写法   2. 函数内 this 指向(箭头函数内的 this 没有指向，只能通过上下文获取)   3. 箭头函数内不能使用 arguments 4. 不能当做构造函数

// 写法 
// function add (num1, num2) {
//   let res = num1 + num2 
//   return res.toFixed(2)
// }
// let add = function (num1, num2){
//   let res = num1 + num2 
//   return res.toFixed(2)
// }

// 箭头函数的写法

// 箭头左  函数的参数: (参数1,参数2,...) 或者  ()  或者 参数1
// 箭头  => 
// 箭头右  函数的要做的事:  { 做的事以及  return 返回值 } 或者 直接写返回值
// 注意当返回值是一个对象的时候如果不加 {} 直接写返回值的话写成 ({对象的内容})

// 箭头函数只能变量式创建 （省略了 function）
// let add = (num1, num2) => {
//   let res = num1 + num2
//   return res.toFixed(2)
// }
// 箭头右侧不加 {} 相当于直接设置了返回值
// 当操作很简单 就直接设置了返回值就可以简写
// let add = (num1, num2) => (num1+num2).toFixed(2)

// let res = add(0.1 , 0.2)
// console.log(res)

// let show = name => ({name: name})
// console.log(show('第嘉'))

// 我们之前使用的数组的很多方法 比如 filter find  map  reduce 等 搭配箭头函数写法更简单

// let arr = [1,2,3,4,5,6,7]
// let newArr = arr.filter(function(ele){
//   return ele%2 === 1
// })

// let newArr = arr.filter(ele => ele%2 === 1)
// let newArr = arr.map(ele => ele*ele)
// console.log(newArr)

// 箭头函数和普通函数内的 this


// function say() {
//   console.log(this.name)
// }

// 这个箭头函数内的 this 指向在函数创建的时候就已经绑定好了
// 要根据创建的时候箭头函数所在的上下文决定
// 绝大部分都指的是 window
// let newSay = () => {
//   console.log(this)
//   console.log(this.name)
// }

// let obj = {
//   name: '第嘉',
//   say: newSay
// }

// obj.say()
// 箭头函数的嵌套
// let a = () => () => {}

// try {
// 尝试去执行一些操作
// console.log(a)
// } catch (error) {
// 如果上面尝试执行的操作报错了
// 那么就不执行 try 执行 catch ，catch 的参数 error 记录出现的什么错误
// es2019 更新了 catch 可以不添加参数
// console.log(error)
// }

// console.log('哈哈哈')

// 数组的扩展

// entries()，keys()和values()
// 这三个方法返回都是 遍历器
// 遍历其需要使用 for  of 遍历里面的内容
// let arr = [100,50,10]
// console.log(arr.entries())
// console.log(arr.keys())
// console.log(arr.values())

// let arrEntries = arr.entries()
// let arrKeys = arr.keys()
// let arrValues = arr.values()
// for (const value of arrEntries) {
//   // arrEntries ===>   [[下标,值], [下标,值], [下标,值]]
//   console.log(value)
// }

// for (const value of arrKeys) {
//   // arrKeys  [0,1,2]
//   console.log(value)
// }

// for (const value of arrValues) {
//   // arrKeys  [100,50,10]
//   console.log(value)
// }

// 对象的扩展
// 对象的简洁表示法

// let username = '第嘉'
// let userage = 8

// let obj = {
// username,
// userage,
// say: function(){
//   console.log(this.username)
// },
// 方法的简洁表示法
// 只有用普通函数创建的方法才可以简写
// say(){
// console.log(this.username)
// }
// }
// 当创建对象的时候，可以直接就写一个属性名。
// 这样写了之后， 这个属性名的属性值是 重名的变量的值
// console.log(obj)


// 对象的合并
// let obj = {
//   name: '老张',
//   hobby: ['LOL', '前端']
// }

// let obj1 = {
//   age: 20,
//   name: '小张'
// }

// let obj2 = {}
// 方案
// 1. 分别遍历两个对象

// 当访问对象下的属性时，属性名是使用变量表示的，那么需要使用 对象[变量]
// for (const key in obj) {
//   obj2[key] = obj[key]
// }

// for (const key in obj1) {
//   obj2[key] = obj1[key]
// }

// console.log(obj2)

// 2. Object.assign(对象1,对象2, ...) 将所有对象参数合并到第一个对象参数内
// 重名的属性后面的会替换前面的
// Object.assign(obj2, obj, obj1)
// console.log(obj2)
// let x = Object.assign({}, obj, obj1)
// console.log(x)

// 3. lodash 内的 assign merge defaults defaultsDeep

// Object.keys()，Object.values()，Object.entries()

// let obj = {
//   username: '第嘉',
//   userage: 8
// }
// Object.keys(对象)  获取的是对象的属性名集合数组 
// console.log(Object.keys(obj))
// Object.values(对象)  获取的是对象的属性值集合数组 
// console.log(Object.values(obj))
// Object.entries(对象)  获取的是对象的属性名 + 属性值 集合数组 
// console.log(Object.entries(obj))

// 对象的定义 对象的修改 对象的遍历 对象的合并... 

// 运算符的扩展
// 链判断运算符
// let obj = {
//   a: 10,
//   b: {
//     c: 20,
//     d: {
//       f: 30
//     }
//   }
// }
//  ?.    主要其实就是判断 . 前面的对象是否存在
// 当我们想要获取 f 这个属性的时候，需要通过很多级的对象嵌套
// 就需要做很多的判断

// if(obj && obj.b && obj.b.d) {
//   console.log(obj.b.d.f)
// }

// console.log(obj?.b?.d?.f)
// 还可以判断对象下的属性是否存在存在的话立即执行
// let obj = {
//   say() {
//     console.log(1)
//   }
// }
// 判断 say 存不存在  存在的话调用
// obj.say?.()

// null(undefined) 判断运算符
// let a = 0
// let b
// 我们想要判断a存在的话执行操作
// 但是 a 的值是 数字 0  字符串 '' if 里面直接判断的话 认为是 false
//  a  ??  100   是一个值 a 存在(不是 null 或 undefined)就是 a 不存在就是 100
// b = a ?? 100
// console.log(b)

// 逻辑赋值运算符
// let obj = {
//   id: 10
// }

// obj.id  = obj.id ??  1
// 简化  逻辑赋值运算符 
// obj.id??=1
// 去对象内取 id 值， 如果没有新建，并赋值上新的值
// console.log(obj.id)

// 扩展运算符
// let arr = [1,2,3,4,5,6]
// let arr1 = [...arr]
// arr1.push(7)
// console.log(arr)

// let obj = {a : 10}
// let obj1 = {...obj}
// obj1.b = 20
// console.log(obj)

// let obj = {a: 10}
// let obj1 = {b: 20, a: 30}
// let obj2 = {...obj, ...obj1}
// console.log(obj2)

// const num = 10
// num = 100

// const obj = {
//   username: '第嘉'
// }

// obj.age = 8

// console.log(obj)

// obj = {}


//  symbol
// let obj = {
//   a: 10,
//   a: 20
// }
// console.log(obj)

// 创建
// 一般创建好的 symbol 值，被当做对象的属性名使用
// let x = Symbol('张三')
// let y = Symbol('赵四')
// console.log(x.toString())

// let obj = {
//   [x]: 100,
//   [y]: 200
// }

// console.log(obj)

// 创建 Symbol 的时候 传递的参数就是 Symbol 值的描述 
// 可以通过 String()  或者  toString() 获取 symbol 的值的描述的字符串

// set 和 map
// set 
// 创建 
// let setValue = new Set([1,2,3,4,5,'1',2,3,4,5])
// 自动过滤重复的值    === 的相等才算重复
// let setValue = new Set();

// [1,2,3,4,5,1,2,3,4,5].forEach(ele => {
  // set 值 有一个 add 方法用来向 set 内添加数据
//   setValue.add(ele)
// })
// console.log(setValue)

// 可以使用 for  of 遍历 

// for (const value of setValue) {
//   console.log(value)
// }

// 应用 数组去重

let arr = [1,3,1,2,1,1,5,7,4,5,3,3,5,6]
let setValue = new Set(arr)
console.log(typeof setValue)
// Array.from方法可以将 Set 结构转为数组
console.log(Array.from(setValue))