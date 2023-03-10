const tama = {
    tag: "animal",
    species: "Felis silvestris catus",
};
const uhyo = {
    tag: "human",
    name: "uhyo",
};
// const alien: User = {
//   tag: "alien",
//   name: "gray",
// };
function getUserName(user) {
    if (user.tag === "human") {
        return user.name;
    }
    else {
        return "名無し";
    }
}
console.log(getUserName(tama));
console.log(getUserName(uhyo));
export {};
