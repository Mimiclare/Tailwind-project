var number = 10;
console.log(number)

let name = "Miracle";
console.log(name)

const state = "false";
console.log(state)

// activity 3
// activity 3
let myNumber = 42;
let myString = "Hello";
let myBoolean = true;
let myObject = { name: "Miracle" };
let myArray = [1, 2, 3];

console.log(typeof myNumber);   // "number"
console.log(typeof myString);   // "string"
console.log(typeof myBoolean);  // "boolean"
console.log(typeof myObject);   // "object"
console.log(typeof myArray);    // "object"

// Activity 4
let initial = "Kelvin";
console.log(initial)
initial = "J.V";
console.log(initial)

//  activity 5
// const age = "Elizabeth"
// console.log(age);

// age = "Ella"
// console.log(age);


let add = 5+ 6
console.log(add);


let sub = 10 - 5
console.log(sub);

let mult = 10 * 5
console.log(mult)

let div = 10 / 5
console.log(div);

div =  100 % 30
console.log(div)

// Task 6 - += operator
let num = 10;
num += 5;        // same as num = num + 5
console.log(num);

// Task 7 - -= operator
num -= 3;        // same as num = num - 3
console.log(num);

// Task 8
let a = 10;
let b = 5;
console.log(10 > 5);   
console.log(10 < 5);  

// Task 9
let c = 10;
let d = 5;
console.log(10 >= 10);
console.log(10 <= 9);  

// Task 10
let e = 10;
let f = 10;
console.log(10 == "10");  // true (only checks value)
console.log(10 === "10"); // false (checks value AND type)


// Task 11 - && (AND) - both conditions must be true
a = 10;
b = 5;
let result = (a > 5 && b < 10);
console.log(result); 

// Task 12 - || (OR) - at least one condition must be true
console.log(a > 10 || b < 5); 

// Task 13 - ! (NOT) - opposite
console.log(!(a > 5)); 

// conitionals task 1  and 2
number = 10;
if (number < 0) {
    console.log('this number is negative');
}
else if(number > 0) {
    console.log("this number is postive");
}     
else{
    console.log("this number is zero");       
}

// task 2
age = 80;
if (age >= 18) {
    console.log('Eligible to vote');
}   
else {
    console.log("Not Eligible to vote");       
}


// Task 3 - largest of three numbers
 a = 10, b = 20, c = 15;
if (a > b && a > c) {
    console.log("A is the largest");
} else if (b > a && b > c) {
    console.log("B is the largest");
} else {
    console.log("C is the largest");
}



let day = 2

switch (day) {
    case 1:
        console.log("Today is sunday, hope you went to church")

    case 2:
        console.log("Today is Monday")
        break;
        
    case 3:
         console.log("Today is Tuesday")  
        break;
        
    case 4:
         console.log("Today is Wednesday")
        break;

    case 5:
         console.log("Today is Thursday")  
        break; 
            
    case 6:
         console.log("Today is Friday")

    case 7:
         console.log("Today is Saturday")

    default:
        ("Pick a valid number,thanks")    

}

let score = 85;

switch (true) {
    case (score >= 90):
        console.log("A");
        break;

    case (score >= 80):
        console.log("B");
        break;

    case (score >= 70):
        console.log("C");
        break;

    case (score >= 60):
        console.log("D");
        break;

    default:
        console.log("F");
}
// conditional tenary
number = 10;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let year = 2040;

if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}





