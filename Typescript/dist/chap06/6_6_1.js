"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doWhatever(obj) {
    console.log(obj.user.name);
    obj();
    const result = obj * 10;
    return result;
}
doWhatever(3);
doWhatever({
    user: {
        name: "uhyo",
    },
});
doWhatever(() => {
    console.log("hi");
});
function useNumber(num) {
    console.log(num);
}
function doWhatever2(obj) {
    const str = obj;
    useNumber(obj);
}
