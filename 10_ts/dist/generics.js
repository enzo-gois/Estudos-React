// Generics
// TS -> tipar
// f -> tipo x
// f -> tipo y --> erro
// f -> tipo G -> x,y
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["joao", "marcos", "maria"]);
console.log(numberArray, stringArray);
// Restringir tipos
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "enzo", age: 20 }, { job: "Programador", isActive: true });
console.log(result);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const meuTodo = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false
};
const todoAtualizado = updateTodo(meuTodo, { completed: true });
console.log(todoAtualizado);
// Somente leitura
const meuSegundoTodo = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false
};
// meuSegundoTodo.title = "testando"
