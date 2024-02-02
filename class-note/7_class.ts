class Person {
  // ts에서는 멤버변수의 타입을 이렇게 제일 위에 작성해줘야한다
  // 변수의 접근범위 설정 도 가능하다
  private name: string; // class 안에서만 쓰겠다고 하면 private
  public age: number; // 기본적으로는 public
  readonly log: string; // readonly는 접근만 가능하고 값을 변경할 수 는 없다, 읽기만 가능

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
