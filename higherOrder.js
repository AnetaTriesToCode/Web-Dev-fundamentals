const myArray = ["crocodiles", "foxes", "cats", "dogs", "squirrels", "sheep", "whales", "kangaroos", "chimpanzees", "mice" ];
let myFilterFunction = (array) => (fcn) => { //defining higher order function
    const newArray = []; 
    for (let i = 0; i < array.length; i++) { //iteration through all array items, callback function of HoF is applied to all items of the array
        if(fcn(array[i])) { 
    newArray.push(array[i]); //making sure the word itself gets pushed into the array instead of boolean result of the IF condition
        }
    }
    return newArray; //adding closure
};
const outputArray = myFilterFunction(myArray)((item) => item.length >=6); //calling myArray after the changes (after the functions have been applied) + condition of all words equal to or longer than 6 letters
console.log("Words longer than or equal 6 letters are:" + outputArray);


//the function can be easily adjusted to only printing words that are JUST 6 letters, no more.