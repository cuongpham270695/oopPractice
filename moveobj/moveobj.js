function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += 20;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function () {
        this.top -= 20;
        console.log('ok: ' + this.top);
    }
}

var hero = new Hero('toothless.png', 20, 30, 200);

function moveRight() {
    if (hero.left < window.innerWidth - hero.size && hero.top===20) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(moveRight, 100);
}

function moveDown() {
    if (hero.top < window.innerHeight - hero.size && hero.left>=window.innerWidth-hero.size) {
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(moveDown, 50);
}

function moveLeft() {
    if (hero.left >0 && hero.top>= window.innerHeight-hero.size) {
        hero.moveLeft();
    }
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(moveLeft, 100);
    }

function moveUp() {
    if (hero.top >0 && hero.left===30) {
        hero.moveUp();
    }
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(moveUp, 50);
}
moveRight();
moveDown();
moveLeft();
moveUp();
