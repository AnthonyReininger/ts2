let boo = true;
let str = 'scary';
let num = 3;
let a = [12, 33, 25];
let names = ["John", "Jane", "Joe"];
let record = ["Jill", 12];
function show() {
    console.log(boo);
    console.log(str);
    console.log(num);
}
show();
let pers = { id: 1, firstN: "Anthony", lastN: "Reininger" };
let pers2 = { id: 2, firstN: "Kayla", lastN: "Wilson", age: 19 };
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
}
class Line {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
}
class Rectangle {
    constructor(p, width, height) {
        this.p = p;
        this.width = width;
        this.height = height;
    }
    show() {
        console.log(`(${p._x}, ${p._y})[${this.width}][${this.height}]`);
    }
}
class Square extends Rectangle {
    constructor(p, width) { super(p, width, width); }
}
let p = new Point(12, 35);
let ln = new Line(new Point(45, 100), new Point(78, 90));
let s = new Square(p, 45);
s.show();
