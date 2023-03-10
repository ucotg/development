const obj = {
    0: "uhyo",
    "1": 26,
};
obj["0"] = "john";
obj[1] = 15;
function get(obj, key) {
    const keyName = key;
    return obj[key];
}
export {};
