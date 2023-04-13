// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40); // 정의한 파라미터의 갯수에 맞게 사용하지 않을 시 에러

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {

}

log('Hello world');
log('Hello', 'World');