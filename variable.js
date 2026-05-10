const scores = [
  { name: 'Kelvin',  Grade: 100 },
  { name: 'Chinaza', Grade: 90 },
  { name: 'Tolu',    Grade: 10  },
  { name: 'David',   Grade: 5   },
  { name: 'Amara',   Grade: 60 },
  { name: 'Chidi',   Grade: 100 },
  { name: 'Miracle', Grade: 125 },
]

const filteredScores = scores.filter((item) => {
  return item.Grade < 100
})

console.log(scores)
console.log(filteredScores)




function Cart() {
    this.items = [];
}
Cart.prototype.addItem = function(name, price) {
    this.items.push({name: name, price: price})
}    
   
Cart.prototype.removeItem = function(name) {
    this.items = this.items.filter(function(item) {
        return item.name !== name
    })
}

Cart.prototype.getTotal = function(){
    let total = 0
    this.items.forEach(element => {
        total = total + element.price
    });
    return total
}

Cart.prototype.displayCart = function(){
    this.items.forEach(element => {
        console.log(element.name + '-' +  element.price);

    })
    console.log ('Total: ' + this.getTotal())
}
const myCart = new Cart()

myCart.addItem('Rice', 10000)
myCart.addItem('Fried-Rice', 10000)
myCart.addItem('Beans', 10000)
myCart.addItem('Coconut-Rice', 10000)
myCart.addItem('Abacha', 10000)
myCart.displayCart()

const findRice = myCart.items.filter(function(item){
    return item.name === 'Rice'
})

console.log(findRice)












//  { name: 'Rice',  Price: 10000 },
//   { name: 'Beans', Price: 9000 },
//   { name: 'Nsala', Price: 1000  },
//   { name: 'Egwusi', Price: 5000   },
//   { name: 'Amala',  Price: 6000 },
//   { name: 'Fried rice', Price: 100 },
//   { name: 'Miracle', Price: 125 },

















// constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);


// factory function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);
// circle.draw();
