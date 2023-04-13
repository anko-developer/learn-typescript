// 문자열 선언
const str: string = 'hello';

// 숫자열 선언
const num: number = 1;

// 배열타입<숫자 혹은 문자>
const arr: Array<number> = [1,2,3]; // 배열<숫자>
const items: number[] = [1,2,3]; // 배열<숫자>
const heroes: Array<string> = ['하하', '호호'];

// 튜플 (배열의 순서 타입까지 지정하는 것을 튜플이라고 한다)
// 모든 인덱스에 타입이 정해져있는 것
const address: [string, number] = ['string', 10];

// 객체
const obj: object = {};

// const person: object = {
//     name: 'anko',
//     age: 5
// };

// object 안에 속성값의 타입도 각각 지정이 가능
const person: {name: string, age: number} = {
    name: 'anko',
    age: 5
}

// 진위값
let show: boolean = true;