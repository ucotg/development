export {};

function doNothing(val: unknown) {
  console.log(val);
}

doNothing(3);
doNothing({
  user: {
    name: "uhyo",
  },
});
doNothing(() => {
  console.log("hi");
});

function useUnknown(val: unknown) {
  if (typeof val === "string") {
    console.log("valは文字列です");
    console.log(val.slice(0, 5));
  } else {
    console.log("valは文字列以外の何かです");
    console.log(val);
  }
}

useUnknown("foobar");
useUnknown(null);
