import { isSymbolObject } from "util/types";

export {};

type Option<T> =
  | {
      tag: "some";
      value: T;
    }
  | {
      tag: "none";
    };

function showOptionValue(value: Option<number>): void {
  if (value.tag === "some") {
    console.log(value.value);
  }
}

const four: Option<number> = {
  tag: "some",
  value: 4,
};

const nothing: Option<number> = {
  tag: "none",
};

showOptionValue(four);
showOptionValue(nothing);

function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}

function showNumberIfExists(obj: Option<number>) {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

function mapOption<T, U>(obj: Option<T>, map: (x: T) => U): Option<U> {
  if (isSome(obj)) {
    return {
      tag: "some",
      value: map(obj.value),
    };
  }
  return {
    tag: "none",
  };
}

function mapOption2<T, U>(obj: Option<T>, map: (x: T) => U): Option<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: map(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
}

function doubleOption(obj: Option<number>) {
  return mapOption(obj, (x) => x * 2);
}

console.log(doubleOption(four));
console.log(doubleOption(nothing));
