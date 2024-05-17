var initialCol = document.querySelector('#initial-col')

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.innerHTML)

    setTimeout(() => {
        e.target.classList.add('invisible')
    }, 0)
}

function dragEnd(e) {
    e.target.classList.remove('invisible')
}

function dragOver(e) {
    e.preventDefault()
}

function dropEvent(e) {
    e.preventDefault()

    const text = e.dataTransfer.getData('text/plain')
    const el = document.createElement('li')
    el.innerHTML = text
    el.draggable = true
    el.classList.add('items')
    addDragAndDropEvents(el)
    this.appendChild(el)
    e.dataTransfer.clearData();
}

function addTask() {
    const input = document.getElementById('new-task')

    if (input.value) {
        const li = document.createElement('li')
        li.innerHTML = input.value
        li.draggable = true
        li.classList.add('items')
        initialCol.appendChild(li)
        addDragAndDropEvents(li)
        input.value = ''
    } else {
        alert('Adicione uma tarefa válida!')
        return
    }
}

function addDragAndDropEvents(element) {
    element.addEventListener('dragstart', dragStart)     
    element.addEventListener('dragend', dragEnd)  
}

const columns = document.querySelectorAll('ul')
columns.forEach(column => {
    column.addEventListener('dragover', dragOver)
    column.addEventListener('drop', dropEvent)
})

