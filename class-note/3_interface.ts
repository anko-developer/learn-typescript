interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const anko: User = {
  age: 6,
  name: '앙꼬',
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
  
}

const ming = {
  name: '밍',
  age: 33,
};

getUser(ming);
getUser(anko);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0];
arr[1] = 10; // string 만 넣을 수 있기 때문에 에러남