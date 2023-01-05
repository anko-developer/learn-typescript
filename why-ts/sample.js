

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b  두번째 숫자
 */
function sum(a, b) {
  return a + b;
}
sum(10, '20');


/**
 * 테스트 객체
 * @property {string} name 이름
 * @property {number} age 나이
 */
const test = {
  name: 'kim',
  age: 35,
};

// @ts-check

/**
 * 어떤 함수인지 설명
 * @todo 내일까지 XX 기능 추가
 * @param {string} name 이름
 * @param {number} age 나이
 * @returns 두개 합쳐서 문자로 뱉어줘요
 */
const hello = (name, age) => {
	return `${name}은 ${age}살 입니다.`;
};

hello('멍멍이', '5');

/**
 * @version 16.19.0
 * @see https://naver.com
 */
function test() {

}

/**
 * @readonly
 * @const {number}
 */
const num = 1;


/** @type {string | number} */
const name = 'kim';

/** @type {number[]} */
const num = [1, 2, 3];

/**
 * @deprecated 이제 이거 그만쓰고 다른거 써야합니다
 */ 
function gridMake(col, row) {

}

gridMake();

/**
 * 두 수의 합을 구한다.
 * @type { (a: number, b: number) => number }
 */
const add = (a, b) => a + b;

/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id - 할일 id
 * @property {string} content - 할일 내용
 * @property {boolean} completed - 할일 완료 여부
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
];
