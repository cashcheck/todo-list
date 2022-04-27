import { projects, project, toDo} from '../logic-modules/factory.js';
import createToDo from './toDoDom.js';
import createProject from './projectDOM.js';
import plusIcon from '../images/plusIcon.png';


//functions to create forms for new toDo objects

//function creates button which triggers form popUp

function addFormToDo() {

    const formButton = document.createElement('div');
    formButton.classList.add('addFormToDo');

    const formButtonIcon = new Image();
    formButtonIcon.src = plusIcon;
    formButtonIcon.classList.add('formButtonIcon');

    const formButtonText = document.createElement('p')
    formButtonText.textContent = 'Add toDo';

    formButton.appendChild(formButtonIcon);
    formButton.appendChild(formButtonText);

    formButton.addEventListener('click', function() {

    const form = createFormToDo();
    formButton.parentNode.appendChild(form);
    formButton.parentNode.removeChild(formButton);

    });

    return formButton;

}

//function creates form and returns it

function createFormToDo() {

const toDoForm = document.createElement(`form`);
toDoForm.classList.add('toDoForm');

toDoForm.addEventListener('submit', function(e) {

e.preventDefault();

let title = document.querySelector('#formTitle').value;

let date = document.querySelector('#formDate').value;

//creates and adds toDo project

const toDo1 = toDo(title, date);
const currentProject = toDoForm.parentNode;

const toDoDom = createToDo(toDo1, currentProject.id);

toDoForm.parentNode.removeChild(toDoForm);

const formButton = addFormToDo();

document.getElementById(currentProject.id).appendChild(formButton);


})

//required input fields

const title = document.createElement(`input`);
title.type = 'text';
title.value = 'What is your task?';
title.id='formTitle'
title.size = '40';
toDoForm.appendChild(title);

const date = document.createElement(`input`);
date.type = 'date';
date.id = 'formDate';
toDoForm.appendChild(date);

const submit = document.createElement(`button`);
submit.textContent = 'Submit';
toDoForm.appendChild(submit);

const cancel = document.createElement(`button`);
cancel.textContent = 'Cancel';

cancel.addEventListener('click', function(e) {

const formDOM = document.querySelector('.toDoForm');

const addForm = addFormToDo();

formDOM.parentNode.appendChild(addForm);

formDOM.parentNode.removeChild(formDOM);

})

toDoForm.appendChild(cancel);

return toDoForm;

}

//function for cancel button









//functions to create div which when clicked creaets form for new projects objects

function addFormProject() {
    const formButton = document.createElement('div');
    formButton.classList.add('addFormProject');

    formButton.textContent = 'Add Project'

    formButton.addEventListener('click', function() {

    const form = createFormProject();
    formButton.parentNode.appendChild(form);
    formButton.parentNode.removeChild(formButton);
    
    });

    return formButton;
}

//function creates the form and returns it

function createFormProject() {

const projectForm = document.createElement('form');
projectForm.classList.add('projectForm');

projectForm.addEventListener('submit', function(e) {

e.preventDefault();

const projectTitle = document.querySelector('#projectFormTitle').value;
const projectDescription = document.querySelector('#projectFormDescription').value;

const newProject = project(projectTitle, projectDescription);

createProject(newProject);

projectForm.parentNode.removeChild(projectForm);

const projectButton = addFormProject();

document.querySelector('#sideContainer').appendChild(projectButton);

})

//required input fields

const title = document.createElement(`input`);
title.type = 'text';
title.placeholder = 'What is your task?';
title.id='projectFormTitle';
title.required = true;
projectForm.appendChild(title);

const description = document.createElement('input');
description.type = 'text';
description.placeholder = 'Description';
description.id = 'projectFormDescription';
description.required = true;
projectForm.appendChild(description);


const submit = document.createElement(`button`);
submit.textContent = 'Submit';
projectForm.appendChild(submit);

return projectForm;

}

export {addFormToDo, addFormProject};