// function logText(text) {
//   console.log(text);
//   return text;
// }

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
  
// }

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abs');
str.split('');
logText<boolean>(true);


// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: 'abc',
  selected: false,
};

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(text => {
//     console.log(text);
    
//   });
  
//   return text;
// }
// logTextLength<string>(['hi']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('a');
logTextLength({ length: 10 });

// 제네릭 타입 제한 3 - keyof
// key 값으로 타입을 지정한다!
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name');
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');