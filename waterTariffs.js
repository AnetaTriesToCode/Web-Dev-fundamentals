let waterConsumed = prompt("How many kilolitres of water have you consumed? 1kl = 1000 litres");
let waterConsumed2 = Number(waterConsumed);
const level1 = 15.73; //charge for tariff 1
const level2 = 22.38; // charge for tariff 2
const level3 = 31.77; // charge for tariff 3
const level4 = 69.76; // charge for tariff 4
let tariff1 = 6; // top limit of tariff 1
let tariff2 = 10.5; // top limit of tariff 2
let tariff3 = 35; // top limit of tariff 3
let step1 = 6 * level1; // 94.38 price per 6 kl in tariff 1
let step2 = 4.5 * level2; // 100.71 price per 4.5 kl in tariff 2
let step3 = 24.5 *level3; // 778.365 price per 24.5 kl in tariff 3
if (waterConsumed2 <= tariff1){
    console.log(`You will pay R${level1 * waterConsumed2}`);
} // if user's input within tariff 1
else if (waterConsumed2 >tariff1 && waterConsumed2 <=tariff2){
    console.log(`You will pay R${step1 + (level2 * (waterConsumed2 - tariff1))}`);
} // if user's input within tariff 2
else if (waterConsumed2 >tariff2 && waterConsumed2 <= tariff3){
    console.log(`You will pay R${step1 + step2 + (level3 * (waterConsumed2 - (tariff1 + 4.5)))}`);
} // if user's input within tariff 3
else if(waterConsumed2 > tariff3){
    console.log(`You will pay R${step1 + step2 + step3 + (level4 * (waterConsumed2 - (tariff1 + 4.5 + 24.5)))}`)
} // if user's input greater than tariff 3, it makes it a tariff 4
