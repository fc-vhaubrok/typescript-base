import { createTodo, completeTodo, getOpenTodos, getCompletedTodos, assignTodo } from "./todoList";
console.log('Hello from first TypeScript project!');

console.log(getOpenTodos());

createTodo("Blumen gießen");
createTodo("Wäsche waschen", "ich");
createTodo("Katze füttern");

console.log(getOpenTodos());

let firstTodoId = getOpenTodos().at(0)?.id;
if (firstTodoId) {
    assignTodo(firstTodoId, "meins");
    completeTodo(firstTodoId);
}

console.log(getCompletedTodos());