// 布尔值
let isDone = false;
// 数字
let decLiteral = 6;
let hexLiteral = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral = 0b1010;
// ES6 中的八进制表示法
let octalLiteral = 0o744;
let notANumber = NaN;
let infinityNumber = Infinity;
// 字符串
let name = "jake";
let age = 28;
let sentence = `Hello, my name is ${name}, i'll be ${age + 1} years old next month.`;
// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function alertName() {
    console.log("My name is Tom");
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable = undefined;
// Null 和 Undefined
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u = undefined;
let n = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 这样不会报错
let num = undefined;
// 这样也不会报错
let u2;
let num2 = u;
// 而 void 类型的变量不能赋值给 number 类型的变量：
let u1;
let num1 = u;
// 枚举
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
let c = Color.Green;
let c1 = Color.Blue;
console.log(Color);
// let colorName: string = Color[4];
// console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
console.log(c, c1);
