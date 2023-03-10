const showName = (obj) => {
    console.log(obj.name);
};
const g = showName;
g({
    name: "uhyo",
    age: 26,
});
export {};
