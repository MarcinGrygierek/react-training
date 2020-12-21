class Duck {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`I am a duck named ${this.name}`);
    }
}

class RubberDuck extends Duck {
    constructor(name, level = 'medium') {
        super(name);
        this.level = level;
    }
    speak() {
        console.log('Rubber ducks can"t speak');
    }
    debug() {
        console.log(`${this.level} duck says - Your code is wrong on so many levels`);
    }
}

const duck = new Duck('Franek');
duck.speak();

const duck2 = new Duck('Tomek');
duck2.speak();

const rubberDuck = new RubberDuck('Quacky');
rubberDuck.speak();
rubberDuck.debug();

const rubberDuckSr = new RubberDuck('Quacky sr', 'senior');
rubberDuckSr.speak();
rubberDuckSr.debug();