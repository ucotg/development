"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUserName1(user) {
    if (user.tag === "human") {
        return user.name;
    }
    else {
        return "名無し";
    }
}
function getUserName2(user) {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
        case "robot":
            return `CPU ${user.name}`;
    }
}
