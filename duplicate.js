// remove duplicate element from an array
/* 
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'fabul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names){
    const unique = [];
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names)
console.log(uniqueNames) */


// remove duplicate number form an array
/* 
const numbers = [3, 4, 5, 3, 5, 3, 4, 6, 7, 8, 9, 0, 1,2,3, 4,5, 11, 23, 43, 23,2, 3, 4, 5, 6, 4, 3, 1,2, 11, 12, 32, 3, 45, 54, 33, 23, 34, 34, 35, 12, 11, 1, 2, 3, 4, 5,3,3, 2,2 , 3,3 , 4, 4, 5, 5,3, 3, 4];
function removeDuplicateNumber(numbers){
    const unique = [];
    for(const number of numbers){
        if(unique.indexOf(number) == -1){
            unique.push(number)
        }
        // console.log(number)
    }
    return unique;
}

const uniqueNumbers = removeDuplicateNumber(numbers)
console.log(uniqueNumbers)

 */


// remove duplicate latter from a sentence

const text = "Bangladesh is a small country. There are many beautiful rivers in Bangladesh.";
function removeDuplicateLatter(text){
    const uniqueItem = [];
    for(const item of text){
        if(uniqueItem.indexOf(item) == -1){
            uniqueItem.push(item)
        }
    }

    return uniqueItem;
}

const uniqueLatter = removeDuplicateLatter(text);
console.log(uniqueLatter)
