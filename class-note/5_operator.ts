// function logMessage(value: any): void {
//   console.log(value);
// }
// logMessage("hello");

// 하나의 타입 이상 쓸 수 있는 것을 유니온 타입이다.
let kmw: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value ,ust be string or mbmber");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person): void {
  someone.name; // Developer, Person 서로 중복되는 name 값만 사용 가능한 특징이 있음
}

// & 를 넣은 인터섹션 타입
// function askSomeone(someone: Developer & Person): void {
//   someone.skill; // Developer, Person 에 들어있는 모든 값이 다 들어가야함 "&" 인터섹션 타입의 특징
// }

// 실무에서는 인터섹션 보다는 유니온 타입이 상대적으로 더 많이 쓰인다.
askSomeone({ name: "디벨로퍼", skill: "개발" });
askSomeone({ name: "명욱", age: 100 });
