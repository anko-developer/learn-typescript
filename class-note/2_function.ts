//함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}


//===========================================================
// 함수의 타입을 정의하는 기본적인 방식
function sum(a: number, b: number): number {
  return a + b;
}

// sum(10, 20, 30, 40); // 내가 정의한 파라미터 갯수보다 적거나 혹은 많거나 했을 때 TS 체크된다.


// 함수의 옵셔널 파라미터
// 파라미터에 ?를 붙여주면 옵셔널 파라미터로 사용 가능하다
function log(a: string, b?: string) {

}

log('hello anko');
log('hello anko', 'gogo');
