
// 函数重载
// 对函数进行多次类型声明
// function addFun(a: number, b: number): number

// function addFun(a: string, b: string): string

// function addFun(a: any, b: any) {
//   return a + b
// }

// const res = addFun(1, 2)
// const res1 = addFun('hello', 'world')
// console.log(res.toFixed(2))


// 元组
// const arr: ['first', ...string[]] = ['first', '1', '2']

// unknown   
// 跟 any 类似
// any 类型可以赋值给任意类型
// unknown 不可以赋值给其它类型
// 所有类型赋值给 any 和 unknown

// let x: unknown
// x = 10
// x = 'hello'

// let y: number

// 下面赋值会报错
// y = x

// 联合类型
// 类别的别名
// type typeName = number | string | number[]
// let value: typeName;
// value = 100



// 非空断言  !
// let value1: (undefined | string);
// value1 = '123'
// value1!.slice(1)

// 确定赋值断言
// let value2 !: number
// function fun() {
//   value2 = 100
// }
// fun()
// console.log(value2 * 2)


// 接口
// interface Obj {
//   readonly todoText: string
//   age?: number
//   // 任意的属性值 要包括接口中的所有属性的属性值
//   [propName: string]: string | number | undefined
// }

// const obj: Obj = { todoText: '13', age: 12 }

// 接口的继承

// interface Animal {
//   name: string
//   age: number
// }

// interface Cat extends Animal {
//   type: string
// }
// 接口会自动合并
// interface Cat  {
//   say:() => void
// }

// const cat: Cat = { name: '大白', age: 10, type: '加菲猫', say(){} }

// 鸭式辩型法
// 函数参数的类型是 接口 LabelledValue  但是传递参数的时候 提供的并不是接口 LabelledValue 类型， 并没有报错
// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);


// 类

// class Greeter {
//   message: string
//   constructor(message: string) {
//     // 对于 message 属性来说
//     // 默认 this 上没有 message 直接修改提示错误， 所以先要定义 message 属性
//     this.message = message
//   }
//   say() {
//     console.log('hello ' + this.message)
//   }
// }

// let greeter = new Greeter("world");
// console.log(greeter.message)
// greeter.say()

// public  private protected 来声明成员是公有还是私有或者受保护的 
// 私有成员 类之外无法访问 子类也无法访问
// 受保护的 类之外无法访问 子类可以访问



// 泛型
// 实现一个函数 传递一个参数并且返回该参数
// function identity<T> (arg: T) {
//   // 因为设置了 泛型 T  参数的类型设置成了 T  返回值就是这个参数， 那么会自动推论返回值类型为 T
//   // 泛型 T 在函数调用的时候被传递真正的类型   

//   return arg
// }
// 泛型的使用
// let res2 = identity<string>('hello')
// 传递的参数是 字符串类型   那么里面的所有 T 类型都被推论成 字符串类型
// let res2 = identity('hello')
// console.log(res2)
// const 创建的变量 默认被推论成 字面量类型     字符串字面量  布尔值字面量  数字字面量
// 字面量类型 具体的某个值也可以被当做是一个类型
// 字面量类型就是对应类型的特殊类型
// const pi = 'π'
// let pi1: string
// pi1 = pi


// 泛型的约束    泛型需要满足一定的条件

// interface SizeObj{
//   size: number
// }
// function identity<T extends SizeObj>(arg: T) {
//   console.log(arg.size)
//   return arg
// }

// 泛型的类型  
// T type  值的类型
// K key   对象的属性类型
// V value 对象的值的类型

// function identity<T, U>(message: T, value: U) {
//   console.log(value)
//   return message
// }
// let res = identity(1, 'hello')
// console.log(res)


// tsconfig.json   ts 的配置项
// include 需要编译的文件，路径模式规则
// exclude 不需要编译的文件，路径模式规则
// files  编译的文件名称
// compilerOptions

// 装饰器
// 对类或类的属性及方法的修改


// 类的装饰器
// const decoratorClass = (targetClass) => {
//   targetClass.prototype.num = 100
// }
// 带参装饰器  需要写成高阶函数  函数返回另一个函数
// const decoratorClass = (num: number) => (targetClass) => {
//   targetClass.prototype.num = num
// }

// 利用装饰器给 类 添加了一个公共属性 num 值是 100
// @decoratorClass(1000)
// class Test{
//   text = 'hello'
// }

// const test = new Test()

// console.log(test)

// 类的属性装饰器

// 我想制作一个装饰器 装饰一下 name 属性，让其变成只读属性

// const testFun = (target, name) => {
//   // target 指的是 class 的原型对象
//   // name 指的是修饰的属性名
//   console.log(target)
//   console.log(name)
// }

// const testFun = (text: string) => (target, name) => {
//   console.log(text)
//   console.log(target)
//   console.log(name)
// }

// class Person {
//   @testFun('hello') name = '第嘉'
//   say(){

//   }
// }
// const username = new Person()
// console.log(username)
// 类的方法装饰器
// const methodFun = (target, name ,descriptor) => {
//   // target 指的是 class 的原型对象
//   // name 是方法名
//   // descriptor  该方法的数据描述符
//   console.log(target, name ,descriptor)
//   // 利用数据描述符重写了 say 方法
//   descriptor.value = () => console.log('哈哈哈')
// }
// class Test {
//   name = '第嘉'
//   @methodFun
//   say(){
//     console.log(this.name)
//   }
// }

// const test = new Test()

// test.say()