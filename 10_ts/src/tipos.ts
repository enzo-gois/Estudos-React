// number => number, texto => string, objeto => {name: string, age: number}
// Tipos báscios
let isActive: boolean
isActive = true

console.log(typeof isActive)

let total: number = 150

let myName: string = "Enzo"

// Inferencia de tipos
let isComplete = false

let amount = 200

let userName = "jhon"

console.log(typeof isComplete, typeof amount, typeof userName)

let money
console.log(typeof money)
money = 200
console.log(typeof money)

// Arrays e objetos
let numbers: number[] = [1,2,3,4]

console.log(typeof numbers)

let user: {name: string, age: number} = {
  name: "enzo",
  age: 20
}

console.log(typeof user)

// Tuplas 
// [n,n,n]
let rgb: [number,number,number] = [255,0,0]

console.log(typeof rgb, rgb)

//Funções
function greet(nome: string): string {
  return `Olá, ${nome}`
}

console.log(greet("enzo"))

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function getDirectionMessage(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Movendo para cima"
    case Direction.Down:
      return "Movendo para baixo"
    case Direction.Left:
      return "Movendo para esquerda"
    case Direction.Right:
      return "Movendo para direita"
    default:
      return "Ficou parado"
  }
}

console.log(getDirectionMessage(Direction.Up))
console.log(getDirectionMessage(Direction.Left))
console.log(getDirectionMessage(Direction.Down))