const fruits = ['apple', 'orange', 'banana', 'pear', 'grapes']
fruits.forEach(myFunction); // acts as an iterator function to apply some parameter function/effect to each instance housed within the iterable which gets passed in

function myFunction(item)
{
    console.log(item);
}

let ages = [11,12,13,14,15,16,17,18,19,20]
function oldEnough(el)
{
    return el >= 18;
}

console.log(ages.filter(oldEnough))

const str = "Hello   "
console.log(str.trim())

const x = function(a, b) { return a * b};

const text = ["ford"]
const myCar = JSON.stringify(text)
console.log(typeof(myCar))

function fizzbuzz(n)
{
    c1 =n % 3 == 0
    c2 =  n % 3 == 5
    if (c1)
    {
        console.log("fizz")
    }
    else if(c2)
    {
        console.log("buzz")
    }
    else if(c1 && c2)
    {
        console.log("fizzbuzz")

    }
    else{
        console.log(n)
    }
}

console.log(fizzbuzz(15))