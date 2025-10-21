class Person {
    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    introduce() {
        document.getElementById('profile').innerHTML = 'My name is ' + this.name + 'I am' + this.age + 'i am ' + this.gender + 'i live ' + this.address;
    }

    isAdult() {
        if (this.age >= 18) {
            document.getElementById('tuoi').innerHTML = 'dung'
        } else {
            document.getElementById('tuoi').innerHTML = 'sai'

        }
    }
}
const person1 = new Person('huy',18,'nam','hanoi');
person1.introduce();
person1.isAdult();