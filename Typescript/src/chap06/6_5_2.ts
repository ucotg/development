export {};

const names1 = ["uhyo", "John", "Taro"]; // string[]

const names2 = ["uhyo", "John", "Taro"] as const; // readonly ["uhyo", "John", "Taro"]

type Name = typeof names2[number]; // "uhyo" | "John" | "Taro"

const names: Name[] = ["uhyo", "John", "Taro"];
