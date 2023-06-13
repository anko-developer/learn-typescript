class Person {
  // ts는 변수 정의를 미리 해줘야한다
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}