/* find largest number in an array */
/* function largestElement(numbers){
    let biggest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > biggest){
            biggest = element;
        }
    }
    return biggest;
}

const myNumbers = [3, 2, 4, 7, 12, 34, 74,12, 45, 67];
const result = largestElement(myNumbers);
console.log(result) */



/* find smallest number in an array */
/* 
function smallestElement(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}

const myNumbers = [3, 2, 4, 7, 12, 34, 74,12, 45, 67];
const result = smallestElement(myNumbers);
console.log(result) */



//  javaScript even numbers
/* 
function evenNumber(){
    for(let i = 1; i <= 50; i++){
        if(i % 2 == 0){
            console.log('even number is: ', i)
        }
        else{
            
        console.log(i)
        }
    }
}
evenNumber() */



//  javaScript odd numbers

function evenNumber(){
    for(let i = 1; i <= 50; i++){
        if(i % 2 != 0){
            console.log('odd number is: ', i)
        }
        else{
            
        console.log(i)
        }
    }
}
evenNumber()