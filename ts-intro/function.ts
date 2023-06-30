//FUNCTION

let hello = () => {
  console.log("hello");
  return console.log("hello");
  // return "hello"
  // return is void
};

let funcStr = (): string => {
  // console.log("hi")
  return "hello everynyan";
};

let multiple = (num: number) => {
  return num * 2;
};
let multiple2 = (num: number): number => {
  return num * 2;
};
// funciton multiple and multiple2 is the same

let multiple3 = (num: number): void => {
  //   return num * 2;
  //  cant return num because the return is void
  // return console.log();
};

let sum = (num: number, num2: number, num3?: number) => {
  return num + num2;
};
console.log(sum(5, 5));

let users = (username: {
  firstname: string;
  lastname: string;
  middlename?: string;
}) => {
  console.log(username.firstname);
};
