"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNamesIfAllHuman(users) {
    if (users.every((user) => user.tag === "human")) {
        return users.map((user) => user.name);
    }
    return undefined;
}
