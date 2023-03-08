export {};

function getHelloStr(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return `Hello, world!`;
  } else if (rand < 0.6) {
    return `Hello, my world!`;
  } else if (rand < 0.9) {
    return "Hello, w0rld!";
  } else {
    return `Hello, w!`;
  }
}

function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}

const uhyoKey: "user:uhyo" = makeKey("uhyo");

function fromKey<T extends string>(key: `user:${T}`): T {
  return key.slice(5) as T;
}

const user = fromKey("user:uhyo");
