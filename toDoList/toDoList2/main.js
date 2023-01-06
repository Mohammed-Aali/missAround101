window.addEventListener(`load`, ()=> {
    toDos = JSON.parse(localStorage.getItem(`toDos`)) || [];
    const nameInput = document.querySelector(`#name`);
    const newToDoForm = document.querySelector(`#newToDoForm`);
    
    
    const userName = localStorage.getItem(`userName`) || "";
    
    nameInput.value = userName;
    
    nameInput.addEventListener(`change`, e => {
        localStorage.setItem(`userName`, e.target.value)
    })

    newToDoForm.addEventListener(`submit`, e => {
        e.preventDefault();

        const toDo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        toDos.push(toDo);
        localStorage.setItem(`toDos`, JSON.stringify(toDos));

        e.target.reset()

        displayToDos();
    })
    
    displayToDos();
})

function displayToDos() {
    const toDoList = document.querySelector(`#toDoList`);
    toDoList.innerHTML = ``;

    toDos.forEach(toDo => {
        const toDoItem = document.createElement(`div`);
        toDoItem.classList.add(`toDoItem`)

        const label = document.createElement(`label`);
        const input = document.createElement(`input`);
        const span = document.createElement(`span`);
        const content = document.createElement(`div`);
        const actions = document.createElement(`div`);
        const edit = document.createElement(`button`);
        const deleteButton = document.createElement(`button`);

        input.type = `checkbox`;
        input.checked = toDo.done;
        span.classList.add(`bubble`);
        
        if (toDo.category == `personal`) {
            span.classList.add(`personal`);
        } else {
            span.classList.add(`business`);
        }

        content.classList.add(`toDoContent`);
        actions.classList.add(`actions`);
        edit.classList.add(`edit`);
        deleteButton.classList.add(`delete`);

        content.innerHTML = `<input type='text' value ='${toDo.content}' readonly />`
        edit.innerHTML = `Edit`;
        deleteButton.innerHTML = `Delete`;

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        toDoItem.appendChild(label);
        toDoItem.appendChild(content);
        toDoItem.appendChild(actions);

        toDoList.appendChild(toDoItem);

        if (toDo.done){
            toDoItem.classList.add(`done`)
        }

        input.addEventListener(`click`, e => {
            toDo.done = e.target.checked;
            localStorage.setItem(`toDos`, JSON.stringify(toDos));

            if(toDo.done) {
                toDoItem.classList.add(`done`);
            } else {
                toDoItem.classList.remove(`done`);
            }

            displayToDos();
        })

        edit.addEventListener(`click`, e => {
            const input = content.querySelector(`input`);
            input.removeAttribute(`readonly`);
            input.focus();
            input.addEventListener(`blur`, e => {
                input.setAttribute(`readonly`, true);
                toDo.content = e.target.value;
                localStorage.setItem(`toDos`, JSON.stringify(toDos));
            })
        })
        deleteButton.addEventListener(`click`, e => {
            toDos = toDos.filter(t => t != toDo)
            localStorage.setItem(`toDos`, JSON.stringify(toDos));
            displayToDos();
        })

    })
}

