// 타입 단언
// 내가 정의한 타입으로 그렇게 간주를 해라
let a;
a = 20;
a = 'bb';
const b = a as string;

// DOM API 조작
// <div id="app"></div>
const div = document.querySelector('#app') as HTMLDivElement;
if (div) {
  div.innerText = 'ddd';
}