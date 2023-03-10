function showOptionValue(value) {
    if (value.tag === "some") {
        console.log(value.value);
    }
}
const four = {
    tag: "some",
    value: 4,
};
const nothing = {
    tag: "none",
};
showOptionValue(four);
showOptionValue(nothing);
function isSome(obj) {
    return obj.tag === "some";
}
function showNumberIfExists(obj) {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}
function mapOption(obj, map) {
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
function mapOption2(obj, map) {
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
function doubleOption(obj) {
    return mapOption(obj, (x) => x * 2);
}
console.log(doubleOption(four));
console.log(doubleOption(nothing));
export {};
