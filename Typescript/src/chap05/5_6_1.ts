export {};

type User = {
  name: string;
  age: number;
};

function createUser(name: string, age: number): User {
  if (name === "") {
    throw new Error("名前は空にできません!");
  }
  return {
    name,
    age,
  };
}

function getMessage(user: User, message: string): string {
  return `${user.name} (${user.age}) 「${message}」`;
}

const uhyo = createUser("uhyo", 26);

console.log(getMessage(uhyo, "こんにちは"));

class User2 {
  readonly #name: string;
  readonly #age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません!");
    }
    this.#name = name;
    this.#age = age;
  }

  getMessage(message: string): string {
    return `${this.#name} (${this.#age}) 「${message}」`;
  }
}

const uhyo2 = new User2("uhyo", 26);
console.log(uhyo2.getMessage("こんにちは"));
