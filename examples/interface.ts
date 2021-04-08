interface Person {
	readonly id: number; //只读属性
	name: string;
	age?: number; // 可选属性
	[propName: string]: any; // 任意属性
}

// 这时仍然不允许添加未定义的属性：
let tom: Person = {
	id: 123,
	name: "Tom",
};

let jake: Person = {
	id: 234,
	name: "jake",
	age: 28,
	gender: "female",
};
