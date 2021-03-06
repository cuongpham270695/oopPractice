class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        return this.weight === 0;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;//boolean
        this.weight = weight;
    }

    isMale() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(apple) {
        return apple.weight > 0;
    }

    eat(apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.weight--;

            const h4 = document.createElement('h4')
            h4.innerText = `${this.name} bites one, apple has ${apple.getWeight()} remaining`
            document.getElementById('game').appendChild(h4);
        } else {
            alert('No more apple');
        }
    }

    say(string) {
        console.log(string);
    }

    getName() {
        return this.name;
    }

    setName(string) {
        this.name = string;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(interge) {
        this.weight = interge;
    }
}


//Drama
const adam = new Human('adam', true, 70);
const eva = new Human('eva', true, 50);
const apple = new Apple();

while (!apple.isEmpty()) {
    adam.eat(apple);
    eva.eat(apple);
}