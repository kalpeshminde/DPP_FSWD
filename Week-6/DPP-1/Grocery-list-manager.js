let groceryList=[];
let item1={
    name: "Mango",
    quantity: 12,
    purchased: true,
    costPerUnit:100
};
let item2={
    name: "orange",
    quantity: 10,
    purchased: false,
    costPerUnit:20
};
let item3={
    name: "Lemon",
    quantity: 8,
    purchased: true,
    costPerUnit:5
};
let item4={
    name: "Apple",
    quantity: 6,
    purchased: false,
    costPerUnit:30
};
groceryList[0] = item1;
groceryList[1] = item2;
groceryList[2] = item3;
groceryList[3] = item4;

console.log(groceryList);

groceryList[2]=null;

console.log(groceryList);

groceryList[3].purchased=true;

console.log(groceryList);

let item5 = {
    name: "Banana",
    quantity: 6,
    purchased: false,
    costPerUnit: 6,
    
};
groceryList[4] = item5;

console.log(groceryList);

groceryList[3]=undefined;
console.log(groceryList);

console.log('Total Cost of orange: ', groceryList[1].quantity * groceryList[1].costPerUnit);
console.log('Total Cost Banana: ', groceryList[4].quantity * groceryList[4].costPerUnit);