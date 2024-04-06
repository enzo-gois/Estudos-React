// Exercício 1
interface Vehicle {
  make: string;
  model: string;
  year: number
}

function describeVehicle(veiculo: Vehicle): void {
  console.log(`O veiculo é da marca: ${veiculo.make}, 
  seu modelo é: ${veiculo.model} 
  e foi fabricado em: ${veiculo.year}`)
}

const myCar: Vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2019
}

describeVehicle(myCar)

// Exercício 2
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

const newNumbers = [1,2,3]

console.log(firstElement(newNumbers))

const fruits = ["banana", "maça", "laranja"]

console.log(firstElement(fruits))

// Exercício 3
type Product = {
  id:number,
  name: string,
  price: Number
}

function freezeProduct(product: Product): Readonly<Product> {
  return Object.freeze(product)
}

const bread: Product = {id:2, name:"Pão", price: 1.99}
const frozenBread = freezeProduct(bread)

function updateProductPrice(product: Product, newPrice: Partial<Product>): Product {
  return {...product, ...newPrice}
}

const updateBread = updateProductPrice(bread, {price: 3.99})

console.log(updateBread)