// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('Hi');
// logMessage(100);

let anko: string | number; 

function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  } else if(typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);



interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone1(someone: Developer | Person) {
  // 유니온타입의 2개 인터페이스에서 공통 속성만 접근 가능함
  someone.name; 
}
askSomeone1({ name: '개발', skill: '개발' });
askSomeone1({ name: '호호', age: 5 });


function askSomeone2(someone: Developer & Person) {
  // 인터섹션타입의 2개 인터페이스에서 모든 속성과 타입을 모두 접근 가능함
  someone.name; 
  someone.age;
  someone.skill;
}

// 유니온타입과는 달리 에러가 난다
// 인터섹션타입의 모든 속성이 들어가야한다고 가이드가 나옴 (name, skill, age)
askSomeone2({ name: '개발', skill: '개발' });
askSomeone2({ name: '호호', age: 5 });

