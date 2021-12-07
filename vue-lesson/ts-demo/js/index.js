var _this = this;
// 基础类型
// 布尔值类型
var bool = true;
// 数字类型
var num = 6;
var num1 = 0xf00d;
// 字符串类型
var str = "hello ".concat(num);
// 数组
// 数字数组
var arr = [1, 2, 3];
var arr1 = [1, 2, 3];
// 元组   特殊的数组类型
// 元组类型允许表示一个已知元素数量和类型的数组
var arr2;
arr2 = [1, '2'];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// 从0开始为元素编号
// 其实枚举类型就可以认为是一个对象  {Red: 0, Green: 1, Blue: 2, 0: 'Red', 1: 'Green', 2: 'Blue'}
// 编号可以随意设置， 如果编号是数字的话，后面的值的编号依次加一。
// 如果编号是非数字的话，就需要给所有的值设置编号
console.log(Color.Red);
// any 类型
var x;
x = 100;
x = 'hello';
x = [1, 2, 3];
// void 类型   代表无  
// 只能赋值 null 或 undefined
var a = null;
// null 和 undefined  类型
// never 类型
// obj 类型     后面会讲 类 和 接口去定义对象
// let obj: object = {}
// 类型断言
var xx = 'hello world';
// 将 xx 断言 成字符串
// let arrLength: number = (<string>xx).length
var arrLength = xx.length;
// 类型推论  如果变量不定义类型那么 ts 会根据变量的值 来推论值的类型
var text = 'hello';
// 虽然没有规定 text 的类型，但是根据 类型推论 自动推论成了 字符串类型， 所以下面赋值 100 数字 出错
text = 'world';
var xxx = [0, 1, null];
// 函数
// ts 需要定义参数和返回值
// 函数的声明分为左右两部分 箭头左面是参数的声明  箭头右面是 返回值的声明
// 完整的函数声明
var fun = function (num1, num2) {
    return num1 + num2;
};
// 因为有类型推论 所以函数的类型声明一般省略
var add = function (num1, num2) {
    return num1 + num2;
};
var fun1 = function (num1, num2) { return num1 + num2; };
// 制作一个数字数组求和函数
var fun2 = function (arr) { return arr.reduce(function (res, item) { return res += item; }, 0); };
console.log(fun2([1, 2, 3]));
// 函数的可选参数和默认参数
var fun3 = function (a, b, c) {
    if (b === void 0) { b = 'hello'; }
    console.log(a);
    console.log(b);
    console.log(c);
};
fun3('world', 'x');
// 函数的剩余参数
var fun4 = function (a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return 1;
};
// 函数内的 this
var fun5 = function () {
    console.log(_this);
};
fun5();
