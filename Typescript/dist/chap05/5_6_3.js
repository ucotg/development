const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));
function createUser(name, age) {
    return (message) => `${name} (${age}) 「${message}」`;
}
export {};
