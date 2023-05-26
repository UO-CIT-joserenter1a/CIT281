/*
Author: Jose Renteria
CIT281 Project 6

*/

class Shape 
{
    constructor(arr)
    {
        arr ? this.sides = arr : [];
    }
    perimeter = () => this.sides ? this.sides.reduce((total, side) => side + total, 0): 0;
}

class Rectangle extends Shape
{
    constructor(length = 0, width = 0)
    {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    
    area = () => this.length * this.width;
}

class Triangle extends Shape
{
    constructor(sideA = 0, sideB = 0, sideC = 0)
    {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area ()
    {
        const s = (this.sideA + this.sideB + this.sideC) / 2; // calculate semi-perimeter
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
}

function testShape()
{
    x = new Shape([5, 10]).perimeter();  // 15
    y = new Shape([1, 2, 3, 4, 5]).perimeter(); // 15
    z = new Shape().perimeter(); // 0
    if(x == 15 && y == 15 && z == 0)
    {
        return (`Shape Class Success ✓`);
    }
}

function testRect()
{
    x = new Rectangle(4, 4);
    x_perim  = x.perimeter()
    x_area = x.area();
    y = new Rectangle(5, 5);
    y_perim = y.perimeter();
    y_area = y.area();
    z = new Rectangle();
    z_perim = z.perimeter();
    z_area = z.area();
    const check = (x_perim == 16 && x_area == 16 && y_perim == 20 && y_area == 25 && z_perim == 0 && z_area == 0);
    return check ? (`Rectangle Class Success ✓`) : "Rectangle Class Failure";


}

console.log(testShape());
console.log(testRect());

console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0