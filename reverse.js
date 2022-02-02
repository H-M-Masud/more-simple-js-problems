/*******************************
 *      reverse string
 * **************************** */ 

const greetings = "Hello, how are you?";

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}

const reverse = reverseString(greetings);
// console.log(reverse)

/*******************************
 *      reverse number
 * **************************** */ 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 , 20];

function reverseNumber(numbers){
    let reverseNum = [];
    for(const number of numbers){
        reverseNum = number + reverseNum;
    }
    return reverseNum;
}

let myNumbers = reverseNumber(numbers);
console.log(myNumbers)