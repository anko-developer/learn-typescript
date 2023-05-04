// js 문자열 선언
const str = 'hello';

// ts 문자열 선언
const str1: string = 'hello';

// 숫자열
let num: number = 1;

// 배열<숫자열>
let arr: Array<number> = [1,2,3];
let items: number[] = [1,2,3];

// 배열<문자열>
let heroes: Array<string> = ['하하', '토르', '히히'];

// ts 튜플 - 배열의 각각 인덱스에 타입을 지정하는 것을 튜플
let address: [string, number] = ['seoul', 100];

// ts 객체
let obj: object = {};

// ts 객체 - 객체 안의 속성 각각에 타입을 지정
let person: { name: string, age: number | string } = {
    name: 'anko',
    age: 5
};

// ts 진위값
let show: boolean = true;
