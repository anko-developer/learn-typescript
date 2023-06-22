// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// const shoppingItem: Dropdown<string> = {
//   value: 'a',
//   title: 'good'
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

const detaildITem: DetailDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: '#vue',
};

// Best Common Type
const arr = [1,2,true];