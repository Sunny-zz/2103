// CommonJS规范
// const a = 100
// module.exports = {a}


// es6 模块

const num = 100
export const str = 'hello world'
export const bool = true

// 导出方式
// 导出的数据 不限类型
// 1. 命名导出， 可以使用多次
export { num }
//  或者直接在定义变量的时候直接导出 参考 9 行
// 也可以一次性直接使用 export {需要导出的所有}

// 这种命名导出方式导出的是个对象 例如  {num: num, str: str, bool: bool}

// 导出的时候也可以使用 as 重命名
// 比如 export {num as number} 导出的其实就是 number

// export 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// 例如 
let username = '小张'

setTimeout(() => {
  username = '小刘'
}, 1000);
export { username }