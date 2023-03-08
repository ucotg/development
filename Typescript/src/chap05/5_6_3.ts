export {};

const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));

function createUser(name: string, age: number): (message: string) => string {
  return (message: string) => `${name} (${age}) 「${message}」`;
}
