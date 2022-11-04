let pizza = "Pizza World";

let numberOfToppings = 6;

console.log(pizza);

console.log(typeof pizza);

console.log(numberOfToppings);

console.log(typeof numberOfToppings);

console.log(`"Welcome to ${pizza}! You can put up to ${numberOfToppings} toppings on our pizza!"`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.")
} else {
  console.log("A whole lot of pizza.")
}

for (let i = 1; i <= numberOfToppings; i++){
  if ( i % 2 == 0)
  console.log(i)
}



