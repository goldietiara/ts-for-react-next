//GENERICS
// tool that provides a way to create reuseable component

interface Iauthor {
  name: string;
  age: number;
}

interface Icategory {
  id: number;
  name: string;
}

interface blog {
  blogName: string;
  desc: string;
  datePosted: number;
  extra: Iauthor[] | Icategory[];
}

interface generics<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: generics<string> = {
  id: 1,
  title: "test-title",
  desc: "test-desc",
  extra: ["str", "str"],
};

interface generics2<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: generics2<{ id: number; author: string }> = {
  id: 2,
  title: "test-title",
  desc: "test-desc",
  extra: [{ id: 27, author: "ryan" }],
};
const testMe3: generics2<Icategory> = {
  id: 3,
  title: "test-title",
  desc: "test-desc",
  extra: [{ id: 7, name: "ryan" }],
};

console.log(testMe);
console.log(testMe2);
console.log(testMe3);
