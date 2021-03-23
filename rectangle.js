function Rectangle(length, width) {
    this.length = length;
    this.width = width;

    this.area = function () {
        this.area = this.length * this.width;
        return this.area;
    };

    this.perimeter = function () {
        this.perimeter = 2 * (this.length + this.width);
        return this.perimeter;
    };
}

let thatRectangle = new Rectangle(500, 800);

function count() {
    let area = thatRectangle.area();
    let perimeter = thatRectangle.perimeter();
    document.write(
        "<br/>" + "area: " + area + "<br/>"
    );
    document.write("perimeter " + perimeter);
}
count();
function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createRectangle() {

    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(22, 22,thatRectangle.width , thatRectangle.length);
}
createRectangle();

