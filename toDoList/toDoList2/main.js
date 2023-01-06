window.addEventListener("load", () => {
    toDos = JSON.parse(localStorage.getItem('toDos')) || [];
    const nameInput = document.getElementById("name");
    const newToDoForm = document.getElementById("newToDoForm");

    const userName = localStorage.getItem("userName") || "";

    nameInput.value = userName;

    nameInput.addEventListener('change', eventObj => {
        localStorage.setItem('userName', eventObj.target.value);
    })

    newToDoForm.addEventListener('submit', eventObj => {
        eventObj.preventDefault();

        const toDo = {
            content: eventObj.target.elements.content.value,
            category: eventObj.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()

        }

        toDos.push(toDo);

        localStorage.setItem("toDos", JSON.stringify(toDos));

        eventObj.target.reset();
    })
    displayToDos();
})

function displayToDos () {
    const toDoList = document.getElementById("toDoList");

    toDoList.innerHTML = "";

    toDos.forEach( toDo => {
        const toDoItem = document.createElement(`div`);
        toDoItem.classList.add(`toDoItem`);

        const label = document.createElement(`label`);
        const input = document.createElement(`input`);
        const span = document.createElement(`span`);
        const content = document.createElement(`div`);
        const acitons = document.createElement(`div`);
        const edit = document.createElement(`button`);
        const deleteButton = document.createElement(`button`);

        input.type = `checkbox`;
        input.checked = toDo.done;
        span.classList.add(`bubble`);

        if(toDo.category == `personal`) {
            span.classList.add('personal');
        } else {
            span.classList.add('business');
        }
    })
}