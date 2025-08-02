class Vehicle{
    constructor(wheel){
        this.wheel = wheel;
    }

    Count(){
        console.log(`${this.wheel} in given vehicle`)
    }
}

class Car extends Vehicle{
    constructor(wheel) {
        super(wheel)
        console.log('given vehicle car');
    }
}

const benze = new Car(4);
benze.Count();