function get(obj, key) {
    return obj[key];
}
const uhyo = {
    name: "uhyo",
    age: 26,
};
const uhyoName = get(uhyo, "name");
const uhyoAge = get(uhyo, "age");
export {};
// const uhyoGender = get(uhyo, "genfer");
