// function logText(text: string) {
//   console.log(text);
//   return text;
// }

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("하이");

// 실제로 함수를 정의할 때 타입을 비어놓은 상태에서
// 그 타입에 뭐가 들어 갈 거다를 호출한 시점에 정의하는 것이 바로 제네릭
// 타입을 추론해서 최종 반환값 까지 붙일 수 있는 것이 바로 제네릭!
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("abcdefg");
const replace = str.split("").reverse().join("");
console.log(replace);

const login = logText<boolean>(true);
console.log(login);
