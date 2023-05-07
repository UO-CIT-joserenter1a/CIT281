/*
	CIT 281 Project 1
	Name: Jose Renteria
*/

// lowercase chars
const chars = "abcdefghijklmnopqrstuvwxyz";


// helper function to generate random int
function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}

let emp = ""; // empty string to accumulate to

let len = getRandomInteger(5, 26) // random length between 5 (inclusive) and 26 (exclusive)

for(let i = 0; i < len; i ++) // for loop structure 
{
	emp += chars[getRandomInteger(0, 25)]; // accumulate to our empty string by generating a random index in our lowercase chars str
}

console.log(emp);
