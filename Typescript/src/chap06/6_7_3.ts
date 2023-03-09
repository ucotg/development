import { Z_NO_COMPRESSION } from "zlib";

export {};

type NumberAndStrings = [number, ...string[]];

const arr1: NumberAndStrings = [25, "uhyo", "hyo", "hyo"];
const arr2: NumberAndStrings = [25];
// const arr3: NumberAndStrings = ["uhyo", "hyo"];
// const arr4: NumberAndStrings = [25, 26, 37];
// const arr5: NumberAndStrings = [];

type NumberStringNumber = [number, ...string[], number];

const arr6: NumberStringNumber = [25, "uhyo", "hyo", "hyo", 0];
const arr7: NumberStringNumber = [25, 25];
// const arr8: NumberStringNumber = [25, "uhyo", "hyo", "hyo"];
// const arr9: NumberStringNumber = [];

type NSN = [number, string, number];
type SNSNS = [string, ...NSN, string];
