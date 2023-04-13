
let backpack = [];
let belt = [];
let equippedItems = [];
let sadleBag = [];

backpack.push('sword', 'shield', 'food');

let firstItem = backpack.shift()

belt.push(firstItem);

let furCoat = "Fur Coat"

backpack.unshift(furCoat);

equippedItems.push(backpack.splice(0, 1)[0])

backpack.push("flint", "blanket", "knife", "toothbrush");

sadleBag.push(...backpack.splice(2, 3));

let backpackCount = backpack.length;

//console.log(backpack, backpackCount, belt, equippedItems, sadleBag);
//console.log(sadleBag[1]);

backpack.push("nintendo switch", "torch");

console.log(backpack);

for(let i=0; i < backpack.length; i++){
    if(i >= 3){
        let overflow = backpack.splice(3);
        sadleBag.push(...overflow);
    }

}

console.log(backpack);

let firstThree = sadleBag.slice(0, 3);
let lastThree = sadleBag.slice(sadleBag.length - 3)
console.log(firstThree, lastThree);
console.log(sadleBag);

console.log("---------------------------");


for(let i=0; i < sadleBag.length; i++){
   // console.log(saldeBag[i]);
}


let guessMe = 54;
let count = 0;


while (guessMe < 150){
    console.log("--------------------");
    if (guessMe % 4 === 0 || guessMe % 5 === 0){
        guessMe += 25;
    }else if(guessMe % 3 === 0){
        guessMe -=27
    }else{
        guessMe +=3
    }
        guessMe += 22
        count ++;
}

console.log(`final number is ${guessMe}`, `the loop ran ${count} times`)
