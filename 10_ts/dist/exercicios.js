function describeVehicle(veiculo) {
    console.log(`O veiculo é da marca: ${veiculo.make}, 
  seu modelo é: ${veiculo.model} 
  e foi fabricado em: ${veiculo.year}`);
}
const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2019
};
describeVehicle(myCar);
// Exercício 2
function firstElement(arr) {
    return arr[0];
}
const newNumbers = [1, 2, 3];
console.log(firstElement(newNumbers));
const fruits = ["banana", "maça", "laranja"];
console.log(firstElement(fruits));
// Exercício 3
