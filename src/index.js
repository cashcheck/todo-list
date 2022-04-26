import './style.css';
import {project, toDo, projects} from './logic-modules/factory.js';
import createProject from './dom-modules/projectDOM.js';
import {addFormToDo, addFormProject} from './dom-modules/formDOM.js';

const allProjects = projects();

const project1 = project('project1', 'test project 1, this is the description area');
project1.addToDo(toDo('Be born','07/12/1997'));
project1.addToDo(toDo('Graduate','06/06/2016'));

createProject(project1);


//button to add projects

const projectButton1 = addFormProject();

document.querySelector('#sideContainer').appendChild(projectButton1);

export default allProjects;