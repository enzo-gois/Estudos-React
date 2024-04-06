// Utilizando interface
const myUser = {
    id: 1,
    name: "enzo",
    isActive: false
};
console.log(myUser);
// Classes
class Person {
    constructor(id, name, isActive) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
    }
    greet(isNew) {
        console.log(`Olá, meu nome é ${this.name}`);
        if (isNew) {
            console.log("E sou novo por aqui");
        }
    }
}
const personData = new Person(14, "João", true);
console.log(personData);
personData.greet(false);
