// number => number, texto => string, objeto => {name: string, age: number}
// Tipos báscios
let isActive;
isActive = true;
console.log(typeof isActive);
let total = 150;
let myName = "Enzo";
// Inferencia de tipos
let isComplete = false;
let amount = 200;
let userName = "jhon";
console.log(typeof isComplete, typeof amount, typeof userName);
let money;
console.log(typeof money);
money = 200;
console.log(typeof money);
// Arrays e objetos
let numbers = [1, 2, 3, 4];
console.log(typeof numbers);
let user = {
    name: "enzo",
    age: 20
};
console.log(typeof user);
// Tuplas 
// [n,n,n]
let rgb = [255, 0, 0];
console.log(typeof rgb, rgb);
//Funções
function greet(nome) {
    return `Olá, ${nome}`;
}
console.log(greet("enzo"));
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        default:
            return "Ficou parado";
    }
}
console.log(getDirectionMessage(Direction.Up));
console.log(getDirectionMessage(Direction.Left));
console.log(getDirectionMessage(Direction.Down));
