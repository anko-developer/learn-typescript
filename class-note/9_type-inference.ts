// 타입 추론 기본1
const a = 10;

function getB(b = 10) {
  const c = '하이';
  return b + c;
}

// 타입 추론 기본2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// const shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: '제목'
// };

// 타입 추론 기본3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
  description?: string;
  tag: K;
}

const detailedItem: DetailDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'value1',
  tag: '#태그',
};

// best Common Type 
const arr = [1,2,true, true, 'a'];
