// Definindo interface
// tabelas => entidades: Usuário -> nome, email, senha
// back => front
// Interfaces => mapear todos os campos
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Utilizando interface
const myUser: User = {
  id: 1,
  name: "enzo",
  isActive: false
}

console.log(myUser)

// Classes
class Person implements User {
  id: number;
  name: string;
  isActive: boolean;

  constructor(id:number, name: string, isActive: boolean) {
    this.id = id
    this.name = name
    this.isActive = isActive
  }

  greet(isNew: boolean) {
    console.log(`Olá, meu nome é ${this.name}`)
    if(isNew) {
      console.log("E sou novo por aqui")
    }
  }
}

const personData = new Person(14, "João", true)

console.log(personData)

personData.greet(false)