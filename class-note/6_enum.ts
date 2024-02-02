enum Shoes {
  Nike = "나이키",
  Adidas = "아이다스",
}

let myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer): void {
  if (answer === Answer.Yes) {
    console.log("정답", Answer.Yes);
  }
  if (answer === Answer.No) {
    console.log("오답", Answer.No);
  }
}
askQuestion(Answer.Yes);
