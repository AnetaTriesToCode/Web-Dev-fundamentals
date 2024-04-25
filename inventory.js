function Shoes  (name, productCode, quantity, valuePerItem){ //defining object Shoes
 this.name = name;  //object properties
 this.productCode = productCode;
 this.quantity = quantity;
 this.valuePerItem = valuePerItem;
};
let shoes1 = new Shoes("Adidas", "1234", "3", "29.90");  //object instance
let shoes2 = new Shoes("Puma", "5678", "12", "34.75");
let shoes3 = new Shoes("Nike", "8910", "8", "22.89");
let shoes4 = new Shoes("Vans", "1112", "10", "45.99");
let shoes5 = new Shoes("Reebok", "1314", "5", "19.20");
let shoesArray = [];
shoesArray.push(shoes1,shoes2,shoes3,shoes4,shoes5); //pushing instances into an array

function findShoeByName (nameOfTheShoe) {     
    const searchedShoe = shoesArray.find((item)=> item.name === nameOfTheShoe);                    
    console.log(searchedShoe); // logging the cheapest ones as they are first in the order
}
findShoeByName("Nike"); //calling the function by the name of the shoe

function findCheapest (array) {                                    
    array.sort((firstShoes, secondShoes) =>
    firstShoes.valuePerItem < secondShoes.valuePerItem ? -1 : 1  //sorting the shoes based on their value 
    );
    console.log(`The cheapest shoes are the ${array[0].name}, which cost ${array[0].valuePerItem}`); // logging the cheapest ones as they are first in the order
}
findCheapest(shoesArray); //calling the function

function findExpensive (array) {
    array.sort((firstShoes, secondShoes) =>
    firstShoes.valuePerItem > secondShoes.valuePerItem ? -1 : 1 //same logic, just < turned into >
    );
    console.log(`The most expensive shoes are the ${array[0].name}, which cost ${array[0].valuePerItem}`);
}
findExpensive(shoesArray);

function editName(shoes, shoesName, newShoesName) {
    for (let i=0; i <shoes.length; i++) {       //iteration through all items in the array
        if (shoes[i].name === shoesName) {      //if the name to be changed matches the name of the currently iterated shoes
            shoes[i]["name"] = newShoesName;    //the name will be changed to whatever the user wants
            return shoes[i];
        }
    }
}
editName(shoesArray, "Reebok", "Converse"); //change shoes name here
console.log("\n Table with new names:");    //description to the table below
console.table(shoesArray);

function editProductCode(shoes, shoesCode, newProductCode) {        //same logic as editName, just with different parameters
    for (let i=0; i <shoes.length; i++) {
        if (shoes[i].productCode === shoesCode) {
            shoes[i]["productCode"] = newProductCode;
            return shoes[i];
        }
    }
}
editProductCode(shoesArray, "1234", "6666"); //change shoes product code here
console.log("\n Table with product codes:");
console.table(shoesArray);

function editQuantity(shoes, shoesQty, newShoesQty) {       //same logic as editName, just with different parameters
    for (let i=0; i <shoes.length; i++) {
        if (shoes[i].quantity === shoesQty) {
            shoes[i]["quantity"] = newShoesQty;
            return shoes[i];
        }
    }
}
editQuantity(shoesArray, "5", "99"); //change shoes quantity here
console.log("\n Table with new quantities:");
console.table(shoesArray);


function editValuePerItem(shoes, shoesValue, newShoesValue) {       //same logic as editName, just with different parameters
    for (let i=0; i <shoes.length; i++) {
        if (shoes[i].valuePerItem === shoesValue) {
            shoes[i]["valuePerItem"] = newShoesValue;
            return shoes[i];
        }
    }
}
editValuePerItem(shoesArray, "19.20", "59.34"); //change shoes value here
console.log("\n Table with new values:");
console.table(shoesArray);

function findAscending(array) {         //same function as findCheapest, but instead of logging just the cheapest pair of shoes, it logs the entire table in the ascending order based on their value
    array.sort((firstShoes, secondShoes) =>
    firstShoes.valuePerItem < secondShoes.valuePerItem ? -1 : 1
    );
    console.log("\n Table with ascending order of value per item:");
    console.table(shoesArray);
}
findAscending(shoesArray);