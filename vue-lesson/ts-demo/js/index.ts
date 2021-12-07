
// 基础类型
// 布尔值类型
let bool = true
// 数字类型
let num: number = 6
let num1: number = 0xf00d
// 字符串类型
let str: string = `hello ${num}`
// 数组
// 数字数组
let arr: number[] = [1, 2, 3]
let arr1: Array<number> = [1, 2, 3]
// 元组   特殊的数组类型
// 元组类型允许表示一个已知元素数量和类型的数组
let arr2: [number, string]
arr2 = [1, '2']
// 枚举
enum Color { Red, Green, Blue }
// 从0开始为元素编号
// 其实枚举类型就可以认为是一个对象  {Red: 0, Green: 1, Blue: 2, 0: 'Red', 1: 'Green', 2: 'Blue'}
// 编号可以随意设置， 如果编号是数字的话，后面的值的编号依次加一。
// 如果编号是非数字的话，就需要给所有的值设置编号
console.log(Color.Red)
// any 类型
let x: any
x = 100
x = 'hello'
x = [1, 2, 3]

// void 类型   代表无  
// 只能赋值 null 或 undefined
const a: void = null

// null 和 undefined  类型

// never 类型

// obj 类型     后面会讲 类 和 接口去定义对象
// let obj: object = {}

// 类型断言
let xx: any = 'hello world'
// 将 xx 断言 成字符串
// let arrLength: number = (<string>xx).length
let arrLength: number = (xx as string).length

// 类型推论  如果变量不定义类型那么 ts 会根据变量的值 来推论值的类型
let text = 'hello'
// 虽然没有规定 text 的类型，但是根据 类型推论 自动推论成了 字符串类型， 所以下面赋值 100 数字 出错
text = 'world'

let xxx = [0, 1, null];


// 函数
// ts 需要定义参数和返回值
// 函数的声明分为左右两部分 箭头左面是参数的声明  箭头右面是 返回值的声明

// 完整的函数声明
let fun: (x: number, y: number) => number = function (num1: number, num2: number): number {
  return num1 + num2
}
// 因为有类型推论 所以函数的类型声明一般省略
let add = function (num1: number, num2: number): number {
  return num1 + num2
}

let fun1 = (num1: number, num2: number): number => num1 + num2

// 制作一个数字数组求和函数

let fun2 = (arr: number[]): number => arr.reduce((res, item) => res += item, 0)

console.log(fun2([1, 2, 3]))

// 函数的可选参数和默认参数

let fun3 = (a: string, b = 'hello', c?: string): void => {
  console.log(a)
  console.log(b)
  console.log(c)
}

fun3('world', 'x')

// 函数的剩余参数
let fun4 = (a: string,...rest: [number, string]) => {
  return 1
}

// 函数内的 this
// let fun5 = () => {
//   console.log(this)
// }
// fun5()

// 接口
// 接口名称 首字母大写
interface Label {
  label: string
  size?: number
  readonly a?:number
  // 对象内的方法
  say: (text: string) => void
}

const labelObj: Label = { label: 'hello', size: 100, a: 100, say: (text) => {}}

interface TodoItem {
  isDone: boolean,
  id: string,
  text: string
}
const todo: TodoItem= {id: '1123',text: '12312', isDone: false}
const todos: TodoItem[] = [
  {
    id: '13123',
    isDone: true,
    text: 'hhh'
  }
]

// 函数接口 
interface Fun {
  (source: string, subString: string): boolean;
}
let y: Fun = (a: string,b: string) => true