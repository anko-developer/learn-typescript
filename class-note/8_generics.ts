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
logText<boolean>(true)