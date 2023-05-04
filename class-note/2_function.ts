// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function total(a: number, b: number): number {
  return a + b;
}
// 인자의 개수가 맞지 않으면 에러
total(10, 20, 30, 40);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  
}

// 물음표를 붙여서 옵셔널 파라미터로 지정해줬기 때문에 
// 필요에 따라서 넣을 수도 뺄 수도 있는 파라미터기 때문에 에러 X
log('하하', '히히');

