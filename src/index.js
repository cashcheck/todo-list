import './style.css';
import {project, toDo, projects} from './logic-modules/factory.js';
import createProject from './dom-modules/projectDOM.js';
import {addFormToDo, addFormProject} from './dom-modules/formDOM.js';

const allProjects = projects();

export default allProjects;

const project1 = project('project1', 'test project 1, this is the description area');
project1.addToDo(toDo('Be born','07/12/1997'));
project1.addToDo(toDo('Graduate','06/06/2016'));


const project2 = project('project2', 'test project 2, this is the description area')

const project3 = project('project3', 'test project 2, this is the description area')


createProject(project2);

createProject(project1);

createProject(project3);

console.log(allProjects);

allProjects.removeProject('project2');

console.log(allProjects);

//button to add projects

const projectButton1 = addFormProject();

document.querySelector('#sideContainer').appendChild(projectButton1);
