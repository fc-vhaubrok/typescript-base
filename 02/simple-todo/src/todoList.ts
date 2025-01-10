import { Todo } from "./Todo";

const todoList: Todo[] = [];

function createTodo(description: string, assignee?: string) {
    const newTodo: Todo = {
        id: getNextId(),
        description: description,
        completed: false,
        assignee: assignee
    };
    todoList.push(newTodo);
}

function getNextId() {
    let highestId = 0;
    if(todoList.length == 0){
        return 1;
    }
    todoList.forEach(todo => {
        if (todo.id > highestId) {
            highestId = todo.id;
        }
    });
    return highestId + 1;
}

function assignTodo(todoId: number, username: string) {
    let todoWithMatchingId = todoList.find(todo => todo.id === todoId);
    if (todoWithMatchingId) {
        todoWithMatchingId.assignee = username;
    }
}

function completeTodo(todoId: number) {
    let todoWithMatchingId = todoList.find(todo => todo.id === todoId);
    if (todoWithMatchingId) {
        todoWithMatchingId.completed = true;
    }
}

function getOpenTodos() {
    return todoList.filter(todo => !todo.completed);
}

function getCompletedTodos() {
    return todoList.filter(todo => todo.completed);
}

export {assignTodo, createTodo, completeTodo, getOpenTodos, getCompletedTodos};