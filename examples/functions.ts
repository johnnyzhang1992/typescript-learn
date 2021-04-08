// 函数名后面的：number 表示函数返回参数的类型
// 函数声明
function sum(x: number, y?: number): number {
    return x + y;
};
sum(1, 2);
sum(1);
// sum(1, 2,3); 参数多余声明的也不可以

// 函数表达式
let mySum = function (x: number, y: number): number {
    return x + y;
}
mySum(1, 2);