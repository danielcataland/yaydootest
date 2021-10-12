const { Product, NewProducts, CarInsurance } = require('./src/coTest')
const readline = require('readline');




const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 20, 30),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new NewProducts('Super Sale', 2, 49,{}),
    new NewProducts('Hot Sale', 40, 49,{"legendary":true, "legendaryPrice": 90}),
    new NewProducts('Mega Sale', 2, 49, {"increasePrice":true, "amountPerDay":3}),
    new NewProducts('Ultra Coverage', 40, 45,{"minusByDay": 5}),
    new NewProducts('Ultra High Coverage', 17, 25,{"specialDays": [{"day":15, "price":3},{"day":10, "price": 4}, {"day":5, "price":5}]})
  ];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };
  
  for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
  }  
 