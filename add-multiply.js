/* 
chariWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    
    // wood Calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    // adding all wood quantity
    const totalWood =  chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
};

const firstOption = woodCalculator(5, 12, 7);
// console.log(firstOption)


/* 
shirtPrice = 100/shirt
pantPrice = 200/pant
shoesPrice = 500/shoes
*/

function shoppingCalculator(shirtQuantity, pantQuantity, shoesQuantity){
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoesPrice = 500;

    // price calculation
    const shirtPriceQuantity = shirtQuantity * perShirtPrice;
    const pantPriceQuantity = pantQuantity * perPantPrice;
    const shoesPriceQuantity = shoesQuantity * perShoesPrice;

    // adding all price
    const totalPrice = shirtPriceQuantity + pantPriceQuantity + shoesPriceQuantity;
    return totalPrice;
}

const firstShopping = shoppingCalculator(1,1,1);
// console.log(firstShopping)