export {};

type Human = {
  name: string;
  age: number;
};

function useMaybeHuman(human: Human | undefined) {
  const age = human?.age;
  console.log(age);
}

type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  const timeOrUndefined = getTimeFunc?.().toString();
}

type User = {
  isAdult(): boolean;
};

function checkForAdultUser(user: User | null) {
  if (user?.isAdult()) {
    // showSpecialContents(user);
  }
}
