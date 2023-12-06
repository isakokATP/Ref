// import { Todo } from './lib/todo.js'
const Todo = require('./todo.js')
function todoManagement() {
    let todos = []
    function addTodo(id, desc, done) {
        todos.push(new Todo(id, desc, done))
        return todos[todos.length - 1].id
    }

    function getNumberOfDone() {
        return todos.filter((todoCurrent) => todoCurrent.done === true).length
    }

    function getNumberOfNotDone() {
        return todos.filter((todoCurrent) => todoCurrent.done === false).length
    }

    function clearTodo() {
        todos = []
    }

    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id !== removeId)
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }
    function getTodos() {
        return todos
    }
    function setItemToDone(doneId) {
        const doneItem = todos.find((todo) => todo.id === Number(doneId))
        // console.log(doneItem)
        if (doneItem !== undefined) doneItem.setDone(true)
        // else console.log(doneId)
      }

    function loadTodos(userTodos) {
        // todos = [...userTodos]
        Todo.setRunningId(userTodos[userTodos.length - 1].id + 1)
    
        userTodos.forEach((todo) => {
            addTodo(todo.id, todo.description, todo.done)
        })
    }
        return {
            addTodo,
            getNumberOfDone,
            getNumberOfNotDone,
            clearTodo,
            removeTodo,
            findTodo,
            getTodos,
            loadTodos,
            setItemToDone,
        };
    }
    // const tm = todoManagement();
    // tm.loadTodos([
    //     { id: 1, description: "Example1 Todo", done: false },
    //     { id: 2, description: "Example2 Todo", done: true },
    // ]);
    // tm.addTodo(undefined, "Example3 Todo", false);
    // console.log(tm.getNumberOfDone());

module.exports = todoManagement