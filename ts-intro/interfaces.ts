// INTERFACES
interface Iusers {
  name: string;
  age: number;
}

interface Iemployee extends Iusers {
  employeeId: number;
}

const employeeDetails: Iemployee = {
  name: "ryan",
  age: 23,
  employeeId: 27,
};

const userDetails: Iusers = {
  name: "ryan",
  age: 23,
};

console.log(employeeDetails);
