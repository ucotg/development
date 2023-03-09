export {};

function doWhatever(obj: any) {
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

function useNumber(num: number) {
  console.log(num);
}

function doWhatever2(obj: any) {
  const str: string = obj;
  useNumber(obj);
}
