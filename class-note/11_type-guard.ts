interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}
function introduce(): Developer | Person {
  return {
    name: 'anko',
    age: 5,
    skill: 'wow',
  };
}

const anko = introduce();
console.log(anko.skill); // union type 에서는 중복된 속성만 불러올 수 있음

// 타입 단언으로 연결해야 찾을 수 있음
if ((anko as Developer).skill) {
  const skill = (anko as Developer).skill;
  console.log(skill); 
} else if ((anko as Person).age) {
  const age = (anko as Person).age;
  console.log(age); 
}

// 타입 가드 정의 (is 패턴)
function isDeverloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeverloper(anko)) {
  console.log(anko.name);
}  else {
  console.log(anko.age);
}