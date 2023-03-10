function getFirstFiveLetters(strOrNum) {
    const str = strOrNum;
    return str.slice(0, 5);
}
console.log(getFirstFiveLetters("uhyohyohyohyo"));
function getNamesIfAllHuman(users) {
    if (users.every((user) => user.tag === "human")) {
        return users.map((user) => user.name);
    }
    return undefined;
}
export {};
