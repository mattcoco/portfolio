const form = document.getElementById('form')
const input = document.getElementById('input')
// la ul en html
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}



form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    // lo que esté en la celda input
    let todoText = input.value

    // if a todo is passed in
    if(todo) {
        todoText = todo.text        
    }
    
    console.log(todoText)

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText
        // left click
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })
        // right click
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)
        // clears de form
        input.value = ''

        updateLS()
    }

}
// Ejemplo en localstorage
// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(localStorage.getItem(obj))

function updateLS() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}