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
    this.items {name: name, price: price}
   
} 



 { name: 'Rice',  Price: 10000 },
  { name: 'Beans', Price: 9000 },
  { name: 'Nsala', Price: 1000  },
  { name: 'Egwusi', Price: 5000   },
  { name: 'Amala',  Price: 6000 },
  { name: 'Fried rice', Price: 100 },
  { name: 'Miracle', Price: 125 },

















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
