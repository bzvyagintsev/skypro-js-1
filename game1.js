const word = (text) => {
  text = text.toLowerCase().split("").sort().join("");
  return text;
}

const anagramm = () => {
  word2 = prompt("Введите первое слово");
  test = prompt("Введите второе слово");
  if (word(word2) == word(test)) {
    alert("Это анаграмма");
  } else {
    alert("Это не анаграмма")
  }
}



const compare = (player1, player2) => {
  player1 = prompt("Выберите действие: \n 1 - Камень \n 2 - Ножницы \n 3 - Бумага")
  if (player1 === 1) {
    player1 = "Камень";
  } else if (player1 === 2) {
    player1 = "Ножницы"
  }
  else {
    player1 = "Бумага"
  }
  player2 = Math.floor(Math.random() * 3) + 1;
  if (player2 === 1) {
    player2 = "Камень";
  } else if (player2 === 2) {
    player2 = "Ножницы"
  }
  else {
    player2 = "Бумага"
  }
  if (player1 === player2) {
    alert("Ничья")
  } else if (player1 === "Камень") {
    if (player2 === "Ножницы") {
      alert("Ты победил")
    } else {
      alert("Ты проиграл")
    }
  }
  else if (player1 === "Ножницы") {
    if (player2 === "Бумага") {
      alert("Ты победил")
    } else {
      alert("Ты проиграл")
    }
  }
  else if (player1 === "Бумага") {
    if (player2 === "Камень") {
      alert("Ты победил")
    } else {
      alert("Ты проиграл")
    }
  }
}



const secret = {
  question: "На раскрашенных страницах \n Много праздников хранится.",
  answer: "календарь",
  askQuestion() {
    let userAnswer = prompt(this.question); {
      userAnswer = userAnswer.toLowerCase();
      if (this.answer == userAnswer) {
        alert("Вы правы!");
      } else {
        alert("Вы не угадали! Вот вам подсказка: \n  Каждый месяц, целый год \n Дням, неделям счет ведет.")
      }
      userAnswer = prompt("Вторая попытка!"); {
        userAnswer = userAnswer.toLowerCase();
        if (this.answer == userAnswer) {
          alert("Вы правы!");
        } else {
          alert("Опять не угадали. Последняя попытка! \n Каждый день роняет листочек.\n А как год пройдет – \n Последний лист опадет.");
        }
        userAnswer = prompt("Последняя попытка!"); {
          userAnswer = userAnswer.toLowerCase();
          if (this.answer == userAnswer) {
            alert("Вы правы!");
          } else {
            alert("К сожалению, вы потратили все попытки.");
          }
        }
      }
    }
  }
}

