class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        let speed = 0;

        this.setSpeed = function(){
            speed += 10;
        }

        this.getSpeed = function(){
            return speed;
        }
    }

    getDetails(){
        console.log(`Brand: ${this.brand} Model: ${this.model} Speed: ${this.getSpeed()}`)
    }
}

const car = new Car("BMW", "M5");
car.setSpeed();
car.getDetails();
