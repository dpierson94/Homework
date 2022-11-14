let pizzaToppings = ["Pineapple", "Mushroom", "Pepperoni", "Ham"];

function greetCustomer() {
  console.log("Welcome to Pizza World, our toppings are: ");
  for (let greeting of pizzaToppings){
  console.log(greeting);
  }

}

function getPizzaOrder(size, crust, ...restToppings) {
  console.log(`One ${size} ${crust} crust pizza with ${restToppings} coming up!`);
  return [size, crust, ...restToppings];
}

function preparePizza([size, crust, ...restToppings]) {
  const cookingPizza = {
    size: size,
    crust: crust,
    restToppings: restToppings
}
  console.log("...Cooking pizza...");
  return cookingPizza;
};

function servePizza(cookingPizza) {
  console.log(`Order up! Here's your ${cookingPizza.size} ${cookingPizza.crust} crust pizza with ${cookingPizza.restToppings}, enjoy!`);
  return cookingPizza;
}

greetCustomer();

servePizza(preparePizza(getPizzaOrder("Medium", "Thin", "Pineapple", " Ham", " Pepperoni")));
