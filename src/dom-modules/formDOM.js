import { projects, project, toDo} from '../logic-modules/factory.js';
import createToDo from './toDoDom.js';
import createProject from './projectDOM.js';
import allProjects from '../index.js';

//functions to create forms for new toDo objects

//function creates button which triggers form popUp

function addFormToDo() {

    const formButton = document.createElement('div');
    formButton.classList.add('addFormToDo');

    formButton.textContent = 'Add toDo'

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

toDoForm.addEventListener('submit', function(e) {

e.preventDefault();

let title = document.querySelector('#formTitle').value;

let date = document.querySelector('#formDate').value;

//creates and adds toDo project

const toDo1 = toDo(title, date);
const currentProject = toDoForm.parentNode;

allProjects.findProject(currentProject.id).addToDo(toDo1);
console.log(allProjects);

//

const toDoDom = createToDo(toDo1);

toDoForm.parentNode.appendChild(toDoDom);

toDoForm.parentNode.removeChild(toDoForm);

const formButton = addFormToDo();

toDoDom.parentNode.appendChild(formButton);


})

//required input fields

const title = document.createElement(`input`);
title.type = 'text';
title.value = 'What is your task?';
title.id='formTitle'
toDoForm.appendChild(title);

const date = document.createElement(`input`);
date.type = 'date';
date.id = 'formDate';
toDoForm.appendChild(date);

const submit = document.createElement(`button`);
submit.textContent = 'Submit';
toDoForm.appendChild(submit);

return toDoForm;

}







//functions to create div which when clicked creaets form for new projects objects

function addFormProject() {
    const formButton = document.createElement('div');
    formButton.classList.add('addFormProject');

    formButton.textContent = 'Add Project'

    formButton.addEventListener('click', function() {

    const form = createFormProject();
    console.log(formButton.parentNode)
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

//creates and adds project to all projects

const newProject = project(projectTitle, projectDescription);
allProjects.addProject(newProject);
console.log(allProjects);

//

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