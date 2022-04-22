function addTodoButton() {

    const addTodo = document.querySelector(`.addToDo`);
    addTodo.addEventListener('click', function() {
    
    })
}

function createForm() {

const toDoForm = document.createElememt(`form`);

//creates input to add text

const title = document.createElement(`input`);
title.type = 'text';
title.placeholder = 'What is your task?';
title.classList.classList('toDoTitle');
toDoForm.appendChild(title);

//creates buttons to submit and cancel

const submit = document.createElement(`button`);
submit.textContent = 'Submit';

const cancel = document.createElement(`button`);
cancel.textContent = 'Cancel';

}

function addToDoDom(toDoObject) {

    const toDoTask = document.createElement('div');
    toDoTask.classList.add('toDoTask');

    const title = document.createElement('p');
    title.textContent = toDoObject.title;
    toDoTask.appendChild(title);

    const dueDate = document.createElement('p');
    dueDate.textContent = toDoObject.dueDate;
    toDoTask.appendChild(dueDate);

    return toDoTask;

}

export {addToDoDom, createForm};