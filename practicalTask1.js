let findSum=(x,y,z)=> x+y+z; //declaring all digits to be added (array not yet known)
let subtractNumbers=(x,y) => x-y; // declaring second digit subtracting from first (array not yet known)
let multiplyNumbers=(x,y) => x*y; // declaring two unknown array digits to multiply
let divideNumbers=(x,y) => { 
if (y===0) { //condition for division by 0, which will lead into error message
    console.error("Division by zero"); 
}
return x/y; // dividing first digit or an unknown array by the second digit of the unnkown array
};
let array = [3, 4, 7]; //declaring array numbers
console.log("Sum:",findSum(...array)); //addition of all integers present in the array
console.log("Subtract:", subtractNumbers(array[0], array[1])); // using first and second array numbers for subtraction
console.log("Multiply:", multiplyNumbers(array[2], array[0])); // multiplying third and first numbers of the array
console.log("Division:", divideNumbers(findSum(...array), array[2])); //diving the third number from the array with sum of all array numbers. 
//If the third number wasn't divided by sum of all numbers, but stuck to the original structure of the function and the second array number were 0, it would throw an error