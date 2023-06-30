// TYPE ALIASES

// before
let user = (username: { name: string; age: number }) => {
  console.log(username.name);
};

// uses aliases
type users2 = {
  firstname: string;
  lastname: string;
  middlename?: string;
};

let getUsers = (fullname: users2) => {
  console.log(fullname.firstname);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(`${num} times ${str}`);
};

type userDetails = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const userProfile: userDetails = {
  name: "ryan",
  age: 23,
  // gender: unicorn
  // the gender must be male or female
  gender: "male",
};

console.log(userProfile);
