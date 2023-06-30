// VARIABLE
let fullname = "ryan fadhilah";
fullname = "goldie tiara";
let age = 20;
age = 23;
// when we created variable like the above variable
// it will define its variable data type even if we didnt define any
// we cant change the variable type and must use the same variable throughout coding

let numberIsDefine: number = 30;
numberIsDefine = 12;
let stringIsDefine: string;
stringIsDefine = "hello";
let numOrStrIsDefine: number | string;
numOrStrIsDefine = 10;
numOrStrIsDefine = "ten";
// although we can define more than one datatype to a variable, like above

// ARRAY
let names = ["ryan", "odi", "pitskhap"];
names.push("chiyo");
// names.push(12)
// must assign the same data type

//how to define an array
let numbers: number[] = [1, 2, 3];
numbers.push(4);
let numAndStr: (number | string)[];
numAndStr = ["one", 2, "three"];

// OBJECTS
let user = {
  name: "owy",
  age: 23,
  employeed: false,
}; // it auto define the data type, and property is required / must be filed / not empty

user.name = "ryan";
user.age = 20;
user = {
  name: "ryan",
  age: 20,
  employeed: false,
};

let user2: {
  name: string;
  age: number;
  employeed: boolean;
  phoneNumber?: number;
}; // "?" means  not require, meanding we can ignore / leave it empty

user2 = {
  name: "odi",
  age: 23,
  employeed: false,
};

//ANY
let anyDatatype;

anyDatatype = "one";
anyDatatype = 1;
anyDatatype = 2.25;
anyDatatype = false;
anyDatatype = [];
anyDatatype = [true];
anyDatatype = {};

let anyArray: any[];
anyArray = [1, "one", 2.25, false, {}];

// we can use any datatype but its not a good idea because we use a typescript is to use a type
