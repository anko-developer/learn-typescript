// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

class Person {
  name: string;
}

let developer: Developer; 
let person: Person;

person = developer;
developer = new Person();

// function
let add = function(a: number) {
  // ...
  
}
let sum = function(a: number, b: number) {
  // ...
}

sum = add;


// generic
interface Empty<T> {
  // ...
}

let empty1 = Empty<string>;
let empty2 = Empty<number>;

interface NoEmpty<T> {
  data: T;
}
let notempty1: NoEmpty<string>;
let notempty2: NoEmpty<nmuber>;