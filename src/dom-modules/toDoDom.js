import allProjects from '../index.js';
import {project, toDo, projects} from '../logic-modules/factory.js';

//function creates button which triggers form popUp

function createToDo(toDoObject, projectTitle) {

    allProjects.findProject(projectTitle).addToDo(toDoObject);
    
    const projectDom = document.getElementById(projectTitle);

    const toDo = document.createElement('div');
    toDo.classList.add('toDo');

    const toDoLeft = document.createElement('div');
    toDoLeft.classList.add('toDoLeft');

    const toDoRight = document.createElement('div');
    toDoRight.classList.add('toDoRight');

    //checkbox and title appended to left side

    const check = document.createElement('div');
    check.classList.add('checkBox');

    check.addEventListener('click', function(e) {
        e.target.classList.toggle('active');
        e.target.parentNode.parentNode.classList.toggle('active');
    })

    toDoLeft.appendChild(check);

    const title = document.createElement('p');
    title.textContent = toDoObject.title;
    toDoLeft.appendChild(title);

    //date appended to right side

    const dueDate = document.createElement('p');
    dueDate.textContent = toDoObject.dueDate;
    toDoRight.appendChild(dueDate);

    toDo.appendChild(toDoLeft);
    toDo.appendChild(toDoRight);

    projectDom.appendChild(toDo);

}

export default createToDo;