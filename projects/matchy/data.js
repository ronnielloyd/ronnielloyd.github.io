/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = "Elephant";
animal["name"] = "Tundra";
animal["noises"] = noises;


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises = ["Harumph"];
noises.push("Aaaaoooooo");
noises.unshift("Huzzah!");
noises[-1] = "Yo";

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises["I never forget"];
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species:"Duck",
    name:"Jerome",
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);

var tiger = {
    species:"Tiger",
    name:"Muffin",
    noises: ['Roar', 'Good Golly!']
};
animals.push(tiger);

var moose = {
    species:"Moose",
    name:"David",
    noises: ['I am moose', 'honk', 'sneeze', 'woomp']
};
animals.push(moose);

console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//We went with array since it is just a simple list
var friends = [];

 function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

friends.push(animals[getRandom(0, 3)].name);

console.log(friends);

moose.friends = friends;
console.log(moose);

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
