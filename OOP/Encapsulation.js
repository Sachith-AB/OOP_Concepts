class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
        let address;

        this.setAddress = function (addr){
            address = addr;
        }

        this.getAddress = function(){
            return address;
        }
    }

    getDetail(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.getAddress()}`)
    }
}

const person = new Person("Sachith", 23)
person.setAddress("Weliwa junction, Morawaka")
person.getDetail();
