let fibonacci: number[] = [1, 1, 2, 3, 5];
// let fibonacci1: number[] = [1, '1', 2, 3, 5];
// 数组的项不能出现其他类型

// 数组泛型
let arr1: Array<number> = [1, 2, 3, 4, 5];

// NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];
console.log(fibonacci2)