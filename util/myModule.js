function helloWorld() {
    console.log("hello world");
}

function numbers() {
    let number1 = 10;
    let number2 = 31;
    let combinedNumber = number1 + number2;
    console.log(combinedNumber);
}

function sayName() {
    console.log("my name is mike.");
}

module.exports = {
    helloWorld,
    numbers,
    sayName
}