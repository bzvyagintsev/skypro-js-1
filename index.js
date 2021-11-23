"use strict"
let product = "Кресло ";
let price = 25000;
let show = product + ", цена " + price + " Рублей"
console.log(show)




function get(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
console.log("Неправально число")
}
}



