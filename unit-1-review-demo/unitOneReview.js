// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

let C = "New Note"
let goodMusic = true
const firstNumber = 1


// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

let codingLanguage = ["Python", "Javascript", "Java", "C#"];


/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

let element3 = codingLanguage[2];


/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//console.log(codingLanguage2 = [...codingLanguage]);
//console.log(codingLanguage2)
let codingLanguage2 = codingLanguage.slice(0) //or (0, 4) or (0, codingLanguage.length) <to include any updates or just ()


/* 
    Add another coding language to the codingLanguage2 array by using an array method.
*/

codingLanguage2.push("Rust", "PHP")
console.log(codingLanguage2)

//OR codingLanguage2.unshift("SQL")


// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

instruments.pop("cello")


/* 
Use a built-in array function to remove 'piano' from the instruments array
*/

instruments.shift()


/* 
Use a built-in array function to add 'guitar' to the front of the instruments array
*/

instruments.unshift()


/* 
Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

instruments.splice(2, 1, "glockenspiel")
//instrument[2] = `glockenspiel`
console.log(instruments);



// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

if(num % 2 === 1){
    console.log("num")
} else {
    console.log("num is not an even number")
}


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

if (score <= 10){
    console.log("Failed")
} else if (score > 10 && score < 41){
    console.log("The grade is C")
} else if (score > 40 && score < 71){
    console.log("The grade is B")
} else{
    console.log("The grade is A")
} 

//  score >= 70 ? console.log(`The grade is an A`):
//  score >= 40 ? console.log(`The grade is a B`):
//    ...etc


// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//for (let i = 0; i < price.length; i++){
//    sum += array[i]
//}
let totalPrice = 0

for (let i = 0; i < price.length; i++){
    totalPrice += price[i]
    // totalPrice = totalPrice + price[i]
}

console.log(total)

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let average = totalPrice / price.length
console.log("average:" ,average)

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

for (i = 0; i < colors.length; i++){
    if(colors[i] === "red"){
        console.log("apple")
    }else if(colors[i] === "green"){
        console.log("melon")
    }else if(colors[i] === "yellow"){
        console.log("banana")
    }
}
console.log(colors)



// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning: Deciding the purpose & aesthetics of application
    -- Analysis of Requirements: Decide needs and expectations
    -- Design: psuedo-code, lay out/format, & logic 
    -- Implementation: Start coding/building & putting in algorithm to coding language
    -- Testing & Integration: Testing for a viable product. Testing MVP/ testing core features 
    -- Maintain: Software updates, debugging, etc
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git: Version control software
        -- github: Popular web host for git remote repositories
        -- git init: Initializes git on a folder in computer
        -- git clone: Download repository from github
        -- git status: last changed, what needs to be changed
        -- git add: Puts changes on for next commit
        -- git commit: Saves state of the file
        -- git push: pushes repository to remote repository (github)
    - How to push git to github
*/

