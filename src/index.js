import './style.css';
import {factory, project, toDo} from './logic-modules/factory';
import {addToDoDom, createForm} from './dom-modules/addToDo.js'

console.log('something');

const cleanHouse = toDo('cleanHouse', 'take out trash, sweep floor', 'never', 'high');

const chores = project('chores');

chores.addToDo(cleanHouse);

console.log(chores);

const task1 = addToDoDom(cleanHouse);

const project1 = document.querySelector('.projectContainer');

console.log(project1);

project1.appendChild(task1);
