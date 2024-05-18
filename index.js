var toDo = document.getElementById('to-do-list')
var doing = document.getElementById('doing-list')
var done = document.getElementById('done-list')
var input = document.getElementById('new-task')

function addTask() {
    if (input.value) {
        const li = document.createElement('li')
        li.innerHTML = input.value
        li.draggable = true
        li.id = `task-${Date.now()}`
        li.classList.add('items')
        toDo.appendChild(li)
        addDragAndDropEvents(li)
        input.value = ''
    } else {
        alert('Adicione uma tarefa válida!')
        return
    }
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id)

    setTimeout(() => {
        e.target.classList.add('invisible')
    }, 0)
}

function dragEnd(e) {
    e.target.classList.remove('invisible')
}

function addDragAndDropEvents(element) {
    element.addEventListener('dragstart', dragStart)     
    element.addEventListener('dragend', dragEnd)  
}

function dragOver(e) {
    e.preventDefault()
}

function dropEvent(e) {
    e.preventDefault()

    const id = e.dataTransfer.getData('text/plain')
    const el = document.getElementById(id)
    const dropZone = e.target.closest('ul')
    dropZone.appendChild(el)
    e.dataTransfer.clearData()
}

[toDo, doing, done].forEach(list => {
    list.addEventListener('dragover', dragOver)
    list.addEventListener('drop', dropEvent)
})


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})