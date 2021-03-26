class Mice {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
        this.speak = "";
    }

    speaking(str) {
        return this.speak += str;
    }
}

class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.speed = maxSpeed;
        this.speak = ""
        this.catchmice = Mice;
    }

    speaking(str) {
        return this.speak += str;
    };

    catch(Mice) {
        if (this.speed > Mice.speed) {
            alert(this.name + " catched " + Mice.name);
            return true;
        } else {
            alert(this.name + " didn't catch " + Mice.name);
            return false;
        }
    }

    eatMice(Mice) {
        this.weight += Mice.weight;
    }
}
let mice = new Mice("Jerry",20,15);
let cat = new Cat("Tom",50,20);
mice.speaking("chitchit");
cat.speaking("meowmeow");
cat.catch(mice);
cat.eatMice(mice);
console.log(cat.weight);