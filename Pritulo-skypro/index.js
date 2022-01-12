"use strict"
let productName = 'яблоко';
let productCost = 10;
let product = `${productName}, цена ${productCost} рублей`;
alert(product);

function randomNumber (min, max) {
  min = Math.ceil(min);// Округление до ближайшего целого вверх
  max = Math.floor(max);// Округление до ближайшего целого вниз

  if (min >= max) {
    return console.log('Минимальное значение больше максимального');
  } else if (min < 0 || max < 0) {
    return console.log('Присутствует значение меньше нуля');
  }
  return Math.floor(Math.random()* (max - min) + min);
}

console.log(randomNumber(-15,10));
