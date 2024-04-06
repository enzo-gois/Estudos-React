// Generics
// TS -> tipar
// f -> tipo x
// f -> tipo y --> erro
// f -> tipo G -> x,y
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items)
}

let numberArray = getArray([1,2,3,4])
let stringArray = getArray(["joao", "marcos", "maria"])
console.log(numberArray, stringArray)

// Restringir tipos
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {...obj1, ...obj2}
}

const result = merge(
  {name: "enzo", age:20},
  {job: "Programador", isActive: true}
)

console.log(result)

// Utilitários de tipo
type Todo = {
  title: string;
  description: string;
  completed: boolean
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo,...fieldsToUpdate}
}

const meuTodo: Todo = {
  title: "Teste",
  description: "Alguma coisa",
  completed: false
}

const todoAtualizado = updateTodo(meuTodo, {completed: true})

console.log(todoAtualizado)

// Somente leitura
const meuSegundoTodo: Readonly <Todo> = {
  title: "Teste",
  description: "Alguma coisa",
  completed: false
}

// meuSegundoTodo.title = "testando"