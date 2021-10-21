// 之前的构造函数加原型

// 坐标构造函数

// function Point(x, y) {
//   this.x = x
//   this.y = y
// }

// Point.prototype.toString = function(){
//   return `(${this.x},${this.y})`
// }

// 创建一个实例化对象
// let point = new Point(1,2)

// console.log(point.toString())


// 使用 es6  class 改写
// class Point {
//   // 类 内部一般只写 方法 而且 方法之间不需要加逗号
//   // 默认存在一个 constructor 方法
//   constructor(x, y){
//     // 这个方法就相当于之前的构造函数
//     this.x = x
//     this.y = y
//   }
//   // 创建的方法都是 公共方法，相当于之前的 原型
//   toString(){
//     return `(${this.x},${this.y})`
//   }
//   a () {
//     console.log('xxxx')
//   }
// }
// let point = new Point(1,2)
// // 实例化对象下的 __proto__  指的就是 class 的 prototype
// console.log(point.__proto__ === Point.prototype)
// console.log(Point.prototype)

// class MyClass {
//   // 将构造函数内的写法简化了
//   numbers = 100
//   constructor() {
//     // this.numbers = 100 
//   }
//   // 创建一个公共属性 prop 属性的值使用 get 提供 函数的返回值
//   // 当对 prop 属性进行修改的时候 对应的 set prop 就会触发， 默认接受修改的值为参数
//   get prop() {
//     return 'getter';
//   }
//   // 用了 set 的话，那么该属性就变成了 可监测的
//   set prop(value) {
//     console.log('setter: '+value);
//   }
// }
// // 类里面使用到的 this 指的是实例化对象
// let myClass = new MyClass()
// myClass.prop = '修改的'
// let myClass1 = new MyClass()
// console.log(myClass)
// console.log(myClass1)


class People {
  constructor(name, age){
    this.name = name
    this.age = age 
  }
  say(){
    console.log(`我是${this.name}`)
  }
}
// 构造函数的原型内默认就有 constructor 指向的是构造函数本身
const user = new People('小张', 20)
console.log(user)

// es6 class 的继承
class Student extends People {
  constructor(name, age, numbers){
    super(name, age)
    // super 是相当于执行  new People() 并且将里面 this 指向替换成 Student 的实例化对象
    this.numbers = numbers
  }
}

//  Student 完全继承 People 内所有
const student = new Student('小刘', 22, 110)
console.log(student)