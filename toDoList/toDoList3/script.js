const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector("[data-delete-list-button]")
const listDisplayContainer = document.querySelector("[data-list-display-container]")
const listTitleElement = document.querySelector("[data-list-title]")
const listCountElement = document.querySelector("[data-list-count]")
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')

console.log(taskTemplate);

const LOCAL_STORAGE_LIST_KEY = "task.lists"
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId"
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

listContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRender();
    }
})

deleteListButton.addEventListener("click", e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null;
    saveAndRender();
})

newListForm.addEventListener("submit", e => {
    e.preventDefault()
    const listName = newListInput.value
    if(listName == null || listName === "") return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender();
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function saveAndRender(){
    save()
    render()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)

}

function render() {
    clearElement(listContainer)
    renderList();

    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(tasksContainer)
        renderTaskCount(selectedList)
    }
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {

    })
}

function renderTaskCount(selectedList) {
    const incompleteTasksCount = selectedList.tasks.filter(task => !task.complete).length
    const taskString = incompleteTasksCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTasksCount} ${taskString} task remaining`
}

function renderList() {
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add("list-name");
        listElement.dataset.listId = list.id;
        listElement.innerText = list.name;
        if (list.id === selectedListId) listElement.classList.add("active-list")
        listContainer.appendChild(listElement);
    })

}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render();