//I can't say I'd be 100% confident at understanding the assignment, so I pulled it together how I inrerpret it
function hide(location) { //defining hide funtion
    let hideLocation = location; //assigning a functional variable 
    function seek() { //defining seek function
        return hideLocation; //returning variable in a parental scope
    }
    return seek; //closure
}
// console.log(hideLocation); if I log the hideLocation straight after the functions, ReferenceError shows up because hidelocation is not defined due to the variable being only accessible within the function scope
let startGame = hide("In the drawer");
console.log(startGame());