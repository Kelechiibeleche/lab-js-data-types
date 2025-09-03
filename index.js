/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = ["Fred ", "fed ", "Ted ", "bread ", "and ", ].join("") + [ "Ted ", "fed " , "Fred ", "bread "].join("");
// Print out the concatenated string
console.log (tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const lastLetter1 = part1[3] . toUpperCase()
const restLetters1 = part1 .slice(0, 3)
const finished1 = (restLetters1 + lastLetter1)
console.log (finished1); 

const lastLetter2 = part2[5] . toUpperCase()
const restLetters2 = part2 .slice(0, 5)
const finished2 = (restLetters2 + lastLetter2);
console.log (finished2); 

const finalWord = [finished1] + [finished2];

// Print the cameLtaiL-formatted string

console.log (finalWord);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
 
let percentageValue = 15;
let tip = (billTotal * percentageValue) / 100;


// Print out the tipAmount
console.log (tip); //12.6//



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let num = Math.random(Math.random()*10) +1;
console.log (num);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
false

const expression2 = a || b;
true
const expression3 = !a && b;
false
const expression4 = !(a && b);
true
const expression5 = !a || !b;
true
const expression6 = !(a || b);
false
const expression7 = a && a;
true