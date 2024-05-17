var initialCol = document.querySelector('#initial-col')

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.innerHTML)

    setTimeout(() => {
        this.classList.add('invisible')
    }, 0)
}

function dragOver(e) {
    e.preventDefault()
}

function dropEvent(e) {
    e.preventDefault()

    console.log('dropped')

    const el = document.createElement('li')
    el.innerHTML = e.dataTransfer.getData('text')
    el.draggable = true
    this.appendChild(el)
}

const tasksNull = () => {
    const card = document.querySelector('#initial-card')
    const p = card.querySelector('p')

    if (!initialCol.children.length) {
        if(!p) {
            const p = document.createElement('p')
            p.innerHTML = 'Não há nenhuma tarefa no momento!'
            card.append(p)
        }
    } else {
        if (p) {
            card.removeChild(p)
        }

        const items = document.querySelectorAll('li')
        const columns = document.querySelectorAll('ul')

        items.forEach(i => {
            i.addEventListener('dragstart', dragStart)
        })

        columns.forEach(c => {
            c.addEventListener('dragover', dragOver)
            c.addEventListener('drop', dropEvent)
        })
    }
}

const addTask = () => {
    const input = document.getElementById('new-task')

    if(input.value) {
        const li = document.createElement('li')
        li.innerHTML = input.value
        li.draggable = true
        initialCol.append(li)
    } else {
        alert('Adicione uma tarefa válida!')
        return
    }

    tasksNull()
}

tasksNull()