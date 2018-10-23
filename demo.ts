let boo: boolean = true;
let str: string = 'scary';
let num: number = 3;

let a: Array<number> = [12, 33, 25];
let names: string[] = ["John", "Jane", "Joe"];

let record: [string, number] = ["Jill", 12];

function show(): void{
    console.log(boo);
    console.log(str);
    console.log(num);
}

show()

interface Person {
    id: number;
    firstN: string;
    lastN: string;
    age?: number;
}

let pers: Person = {id: 1, firstN: "Anthony", lastN: "Reininger"};
let pers2: Person = {id: 2, firstN: "Kayla", lastN: "Wilson", age: 19};

class Point{
    constructor(public _x: number, public _y: number){}

    get x(): number {
        return this._x
    }

    set x(x: number) {
        this._x = x
    }
}

class Line{
    constructor(public p1: Point, public p2: Point){}
}

class Rectangle{
    constructor(public p: Point, public width: number, public height: number){}

    show(): void{
        console.log(`(${p._x}, ${p._y})[${this.width}][${this.height}]`)
    }
}

class Square extends Rectangle {
    constructor(p: Point, width: number){super(p,width, width)}
}

let p = new Point(12,35);
let ln = new Line(new Point(45, 100), new Point(78, 90));

let s = new Square(p,45)
s.show();

