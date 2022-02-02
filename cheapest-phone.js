// get cheapest phone with for loop
const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'walton m32', price: 15000, camera: 8, storage: 8},
    {name: 'shaomi m3', price: 12000, camera: 10, storage: 16},
    {name: 'oppo 12', price: 17000, camera: 8, storage: 32},
    {name: 'nokia n95', price: 80000, camera: 8, storage: 4},
    {name: 'htc h81', price: 25000, camera: 8, storage: 16}
];
/* 
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest) */

//  get cheapest phone with function
/* 
function cheapestPhone(phones){
    
    let cheapest = phones[0];
    for(const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;

}

const cheapestPhoneChoose = cheapestPhone(phones);
console.log(cheapestPhoneChoose)
 */


// find lessPage book for an object
const books = [
    {name:'start with whay', author:'Nuzmul hasan', price: 250, pages: 300},
    {name:'english for today', author:'shofik hasan', price: 430, pages: 250},
    {name:'English lecture book', author:'Rohim kader', price: 521, pages: 630},
    {name:'Magic English', author:'ansarul islam', price: 1200, pages: 580},
    {name:'programming er chodo gosti', author:'jhonker mahbub', price: 270, pages: 180},
    {name:'spoken english', author:'shapins', price: 1150, pages: 512},
]
function lessPageBook(books){
    let lessPage = books[0];
    for(const book of books){
        if(book.pages < lessPage.pages){
            lessPage = book;
        }
    }

    return lessPage;
}

const chooseBook = lessPageBook(books);
console.log(chooseBook)