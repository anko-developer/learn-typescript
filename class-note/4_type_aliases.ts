// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

const anko: Person = {
  name: '앙꼬',
  age: 5
}

type MyString = string;
const str: MyString = 'hi';

type Todo = { 
  id: string;
  title: string;
  done: boolean;
}

function getTodo(todo: Todo) {
  
}