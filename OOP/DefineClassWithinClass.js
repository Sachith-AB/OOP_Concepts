class Address {
    constructor(street, district, province){
        this.street = street;
        this.district = district;
        this.province = province
    }
}

class Person {
    constructor(name, age, gender, address){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getDetails(){
        console.log(this.name, this.age, this.gender, this.address)
    }
}

const address = new Address('A17', 'Matara', 'South');
const person = new Person('sachith', 23, 'M', address);
person.getDetails();