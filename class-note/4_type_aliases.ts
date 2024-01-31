interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// }

let kmw: Person = {
  name: "명욱",
  age: 37,
};

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

function getTodo(todo: Todo): void {}
