class Bird {

    #wings // private data member

    setWing(wng){
        this.#wings = wng;
        return this.#wings;
    }

    fly(name){
        console.log(`${name} fly ${this.#wings}`)
    }
}

class Crow extends Bird{
    fly(){
        console.log("Crow fly");
    }
}

const crow = new Crow;
const bird = new Bird;

crow.fly();
bird.setWing(2)
bird.fly('Owl');