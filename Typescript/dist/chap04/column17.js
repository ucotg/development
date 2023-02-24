"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const something = {
    func: (user) => user.name,
    method: (user) => user.name,
};
const getAge = (user) => String(user.age);
// something.func = getAge; これはエラー
something.method = getAge;
