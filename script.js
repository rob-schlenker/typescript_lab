"use strict";
let mountains = [
    { mtnname: "Kilimanjaro", height: 19341 },
    { mtnname: "Everest", height: 29029 },
    { mtnname: "Denali", height: 20310 }
];
const findNameOfTallestMountain = (mtnarray) => {
    let tallestMountain = mtnarray[0];
    mtnarray.forEach(mountain => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    });
    return tallestMountain.mtnname;
};
let tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);
let products = [
    { productName: "phone", price: 800 },
    { productName: "computer", price: 2000 },
    { productName: "speakers", price: 600 }
];
const calcAverageProductPrice = (productarray) => {
    let sum = 0;
    productarray.forEach((prod) => {
        sum += prod.price;
    });
    let average = sum / productarray.length;
    return average;
};
let avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);
let inventory = [
    // {product: {productname: "motor", price: 10.00}, quantity: 10}, correct way
    { productName: "motor", price: 10.00, quantity: 10 },
    { productName: "sensor", price: 12.50, quantity: 4 },
    { productName: "LED", price: 1.00, quantity: 20 }
];
const calcInventoryValue = (arrayitems) => {
    let sum = 0;
    arrayitems.forEach((prod) => {
        sum += prod.price * prod.quantity;
    });
    return sum;
};
let inventoryvalue = calcInventoryValue(inventory);
console.log(inventoryvalue);
