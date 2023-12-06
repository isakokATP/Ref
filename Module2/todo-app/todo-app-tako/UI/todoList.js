function todoUserInterface() {
    function showTodoItem(newId, newDescription) {
        const listTodoDiv = document.getElementById('listTodo')
        console.log(listTodoDiv.children.length)

        // div
        const newTodoDiv = document.createElement('div')
        newTodoDiv.className = 'todoItem'
        newTodoDiv.setAttribute('id', newId)

        // p
        const newTodoItem = document.createElement('p')
        newTodoItem.textContent = newDescription
        newTodoDiv.appendChild(newTodoItem)

        // done button
        const doneButton = document.createElement('button')
        doneButton.textContent ='Not Done'

        newTodoDiv.appendChild(doneButton)

        //remove button
        const removeButton = document.createElement('button')
        removeButton.textContent ='remove'
        newTodoDiv.appendChild(removeButton)

        listTodoDiv.appendChild(newTodoDiv)

    }
    function showNumberOfDone(numberOfDone){
        const doneP = document.getElementById('done')
        doneP.textContent =`Number of Done:${numberOfDone}`
    }

    function showNumberOfNotDone(numberOfNotDone){
        const notDoneP = document.getElementById('notDone')
        notDoneP.textContent =`Number of Not Done:${numberOfNotDone}`
    }
    function removeTodoItem(removeId) {
        const removeTodoNode = document.getElementById(removeId)
        removeTodoNode.parentElement.removeChild(removeTodoNode)
      }

    return { 
        showTodoItem, 
        showNumberOfDone, 
        showNumberOfNotDone, 
        removeTodoItem 
    }
}
export {todoUserInterface}