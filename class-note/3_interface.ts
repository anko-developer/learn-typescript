interface User {
  age: number;
  name: string;
  type?: string;
}

// 변수에 인터페이스 사용
let anko: User = {
  age: 6,
  name: "anko",
};

// 함수에 인터페이스 사용
function getUser(user: User): void {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 30,
};

getUser(capt);

// 함수의 스펙에 인터페이스를 사용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = (a: number, b: number): number => {
  return a + b;
};

// 인덱싱
interface StringArray {
  // 인덱스 값은 모두 number 값이고,
  // 그 인덱스에 들어있는 값는 string 값이다.
  [index: number]: string;
}

const arr = ["a", "b", "c"];
arr[0]; // "a"

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFuke: /\.js$/,
};
// obj["cssFile"] = "a"; // error, 내가 정한 interface 규칙에 어긋났기 때문

Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
  job?: string;
}

interface Developter extends Person {
  language: string;
}

const wook: Developter = {
  language: "ts",
  name: "명욱",
  age: 37,
};
