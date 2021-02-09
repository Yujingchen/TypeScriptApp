let apples: number = 1;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'blue', 'yellow'];
let numbers: number[] = [1, 2, 3, 4, 5, 6];
let truths: boolean[] = [true, true, false];
let color = "red"

//Classes
class Car {
}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


//type annotation is neccessay in these cases:

// When to use annotation
//1 function return any type
const json = '{"x"10,"y":20}'
const coordinate: { x: 10, y: 20 } = JSON.parse(json);
console.log(coordinate)

//When declare variable on one line and initilize the value on the another
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

//When a variable whoes type cannot be find correctly
let numbersArry = [-10, -1, -12]
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbersArry.length; i++) {
    if (numbersArry[i] > 0) {
        numberAboveZero = numbersArry[i]
    }
    else {
        numberAboveZero = false
    }
}