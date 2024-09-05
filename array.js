
let fruits = ["Apple", "Banana", "Cherry"];


document.write( fruits);
document.write('<br>');
document.write('<br>'); 
fruits.push("Date");
fruits.unshift("Avocado");

document.write(fruits);


fruits.pop();
fruits.shift();
document.write('<br>');
document.write('<br>');
document.write( fruits);
document.write('<br>');
document.write('<br>');
document.write(fruits[1]);
document.write('<br>');
document.write('<br>');
document.write( fruits);

fruits.forEach((fruit, index) => {
    document.write(`${index}: ${fruit}`);
});

let foundFruit = fruits.find(fruit => fruit.startsWith("C"));
document.write(foundFruit);


let filteredFruits = fruits.filter(fruit => fruit.length > 6);
document.write(filteredFruits);


fruits.sort();
document.write(fruits);

fruits.reverse();
document.write(fruits);
