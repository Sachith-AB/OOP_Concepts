class Bird {
    fly(name){
        console.log(`${name} fly`)
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
bird.fly();