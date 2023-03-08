"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useMaybeHuman(human) {
    const age = human?.age;
    console.log(age);
}
function useTime(getTimeFunc) {
    const timeOrUndefined = getTimeFunc?.().toString();
}
function checkForAdultUser(user) {
    if (user?.isAdult()) {
        // showSpecialContents(user);
    }
}
