interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용
const anko: User = {
  name: 'anko',
  age: 5
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}
const dog = {
  name: 'anko',
  age: 100
}
getUser(dog);



// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number) {
  return a + b;
}

// 인덱싱 - 인덱스로 접근을해서~
interface StringArray {
  // 배열 안에 들어가는 모든 값들이 모두 string 이다
  [index: number]: string; 
}

const arr: StringArray = ['a', 'b', 'c'];

// 배열의 인덱싱 방식에 대해서 인터페이스를 string 으로 정의했기 때문에
// number 가 오면 아래처럼 에러가 난다.
// arr[0] = 10; 


// 딕셔너리 패턴
interface StringRegexDictionary {
  // 왼쪽 키값은 string, 오른쪽 속성 값은 정규식으로
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  sth: /abc/, 
  cssFile: /\.css$/,
  jsfile: /\.js$/,
  // cssFile: 'css',
};

// interface에서는 정규식이 정의되어야하는데 문자열을 넣었으니 에러남
// obj['cssFile'] = 'a';

Object.keys(obj).forEach((value) => {
  console.log(value);
});


// 인터페이스 확장(상속)
interface Person {
  name: string;
  age: number;
}

// Person 의 interface 를 상속 받아서 사용할 수 있음
interface Developer extends Person {
  // name: string;
  // age: number;
  lang: string;
}

const wook: Developer = {
  lang: 'ts',
  age: 100,
  name: '욱'
};