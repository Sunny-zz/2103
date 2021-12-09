// function foo (){
//   let a = b = 0
//   // let a    window.b = 0    a = b
//   a++
//   return a
// }

// foo()
// try {
//   console.log(a)
// } catch (error) {

// }
// console.log(b)

// let i ;
// for (i = 0; i < 4; i++) {
//   const fun = () => {
//     console.log(i)
//   }
//   setTimeout(fun, 1000)
// }

// 
// 所有类型深拷贝
// 浅拷贝

// const obj = {
//   a: {
//     b: 20
//   }
// }
// ...
// for in
// Object.assign
// const copyObj = _.cloneDeep(obj)
// obj.a.b = 100
// console.log(copyObj)

// let arr = [{ a: 10 }, { b: 20 }]
// const copyArr = _.cloneDeep(arr)


// arr[1].b = 100
// console.log(copyArr)

// function cloneDeep(value){
//   if(typeof value === 'object'){
//     // 定义一个空值
//     let targetValue = Array.isArray(value) ? [] : {}
//     for (const key in value) {
//       // 下面的拷贝同样适用于数组的拷贝
//       targetValue[key] = cloneDeep(value[key])
//     }
//     return targetValue
//   }else{
//     return value
//   }
// }

// const obj = {
//   a: {
//     b: 20,
//     c: {
//       d: 60
//     }
//   }
// }

// const copyObj = cloneDeep(obj)
// obj.a.c.d = 100
// console.log(copyObj)



//  {}   []   null    typeof   --->  object
// function   typeof   --->  function


// const arr = [1,2,3]
// let arr1 = []
// for (const key in arr) {
//   arr1[key] = arr[key]
// }
// console.log(arr1)

// var a = 100
// function create () {
//   var a = 200
//   fn()
// }

// function fn (){
//   console.log(a)
// }
// create()