class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get mind() {
    console.log(this.name);
  }
}

const wook = new Person('욱', 36);
wook.mind;