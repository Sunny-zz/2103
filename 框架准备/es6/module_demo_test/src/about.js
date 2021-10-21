// const a = 100

// module.exports = a 

// es6 模块的导出  
// export 
// 导出的方式
// 1. 命名导出 可以使用多次


// export const a = 100

// 和上述导出一样
const a = 100
export const b = 200
let c = 300
const d = 500
setTimeout(() => {
  c = 400
}, 1000)
// export语句导出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

// 导出并重命名 
export { a as x , c}

// 合并一起导出
// export { a , b }
// 导出的其实是一个对象  类似于  {x: a, b: b, c: c}

// 2. 默认导出  export default
// 不需要使用花括号导出想 导出什么直接导出
// 默认导出只能使用一次
// 可以和命名导出一起写
export default d


// 其实只要是导出不管是命名还是默认的都是导出到同一个对象  default 表示的是默认导出的
// 例如 {x:a,b:b,c:c,default: d}