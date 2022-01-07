const compare = (player1, player2) => {
  player1 = prompt("Выберите действие: \n 1 - Камень \n 2 - Ножницы \n 3 - Бумага" )
  if (player1 === 1) {
  player1 =  "Камень";
  } else if (player1 === 2) {
  player1 =  "Ножницы"}
  else {
  player1 =  "Бумага"
  }
  player2 = Math.floor(Math.random() * 3) + 1;
  if ( player2 === 1) {
  player2 =  "Камень";
  } else if (player2 === 2) {
  player2 =  "Ножницы"}
  else {
  player2 = "Бумага"
  }
  if (player1 === player2 ) {
  console.log("Ничья")
  } else if (player1 === "Камень") {
      if (player2 === "Ножницы") {
      console.log("Ты победил")
      } else {
      console.log("Ты проиграл")
      }
      }
   else if (player1 === "Ножницы") {
         if (player2 === "Бумага") {
    console.log("Ты победил")
    } else {
    console.log("Ты проиграл")
    }
    }
    else if (player1 === "Бумага") {
        if (player2 === "Камень") {
        console.log("Ты победил")
        } else {
        console.log("Ты проиграл")
        }
    }
   }
  compare()
