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
    age: 6,
    skill: 'wang'
  }
}

const anko = introduce();
// 유니온 타입 때문에 함께 중복된 name 값만 읽을 수 있음
console.log(anko.skill); 

if ((anko as Developer).skill) {
  const skill = (anko as Developer).skill;
  console.log(skill);
} else if ((anko as Person).age) {
  const age = (anko as Person).age;
  console.log(age);
}

function  isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(anko)) {
  anko.skill;
} else {
  anko.age;
}