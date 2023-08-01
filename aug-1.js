//Create a pizza object that has four properties and three methods
let pizza = {}


pizza.size = 'large'
pizza.toppings = ['spinach', 'onion', 'bacon']
pizza.crust = 'stuffed'
pizza.sauce = 'heavy'


pizza.estimatedDeliveryTime = function(){
    console.log('Calculating.....')
}
pizza.burnMouth = function(){
    console.log('It burns!!')
}
pizza.frisbee = function(){
    console.log('Yeeeeeetttt!')
}

//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size, toppings, crust, sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.estimatedDeliveryTime = function(){
        console.log('Calculating.....')
    }
    this.burnMouth = function(){
        console.log('It burns!!')
    }
    this.frisbee = function(){
        console.log('Yeeetttt!!!!')
    }
}

let pizza = new PizzaMachine('large', ['spinach', 'garlic'], 'stuffed', 'white')
