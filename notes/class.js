const Animal = class 
{
    constructor(name)
    {
        this.name = name;
    }
    identify()
    {
        return 'I am a ${name}';
    }
};

const empty = new Animal();
console.log(empty)

const english = ['Sat', 'Sun']
const french = english;
french[0] = "Samedi";
console.log(english);
console.log(french)