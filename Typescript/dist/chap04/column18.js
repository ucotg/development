function sum(nums) {
    let result = 0;
    for (const num of nums) {
        result += num;
    }
    return result;
}
const nums1 = [1, 10, 100];
console.log(sum(nums1));
const nums2 = [1, 1, 2, 3, 5, 8];
console.log(sum(nums2));
const uhyoify = (user) => {
    user.name = "uhyo";
};
const john = {
    name: "John Smith",
};
// john.name = "unko";
uhyoify(john);
console.log(john.name);
export {};
