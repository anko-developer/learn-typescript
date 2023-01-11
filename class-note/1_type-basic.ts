// Js String
const str = 'hello';

// Ts String
const foo: string = 'hello';

// Ts Number
const num: number = 10;

// Ts Array
const arr: Array<number> = [1, 2, 3]; // number 만 들어가는 Array를 말함
let items: number[] = [1, 2, 3]; // number 만 들어가는 Array를 말함
let heroes: Array<string> = ['Thor', 'Anko']; // string 만 들어가는 Array를 말함

// Ts 튜플
let address: [string, number] = ['강남', '판교']; // 배열의 특정 순서의 타입까지 정하는게 튜플 이라고함

// Ts 객체
const obj: object = {};
// const person: object = {
//   name: 'anko',
//   age: 5,
// };
const person: {name: string, age: number} = {
    name: 'anko',
    age: 5
}

// Ts 진위값(boolean)
let show: boolean = true;