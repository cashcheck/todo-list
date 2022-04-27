import allProjects from '../index.js';
import createToDo from './toDoDom.js';
import {addFormToDo, addFormProject} from './formDOM.js';
import xIcon from '../images/xIcon.png'

function createProject(project) {

    allProjects.addProject(project);

    //creates contents of tab

    const projectContent = createProjectContent(project.title,project.description);

    document.querySelector('#mainContainer').appendChild(projectContent);

    //adds toDo elements to the DOM

    if (project.toDoList.length) {

    project.toDoList.forEach(element => {

        createToDo(element, project.title);

    })

    }

    //adds formButton to projectContainer

    const form = addFormToDo();

    projectContent.appendChild(form);

    
    //creates tab
    
    const projectTab = createProjectTab(project.title);

    document.querySelector('#sideContainer').appendChild(projectTab);

    projectTab.addEventListener('click', function(e) {
        projectTabs(e, project.title);
    }
    );

    
}

//function to create project Tab

function createProjectTab(title) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('projectTab');
    
    const projectTabText = document.createElement('p');
    projectTabText.textContent = title;

    projectTab.appendChild(projectTabText);

    const closeProjectButton = new Image();
    closeProjectButton.src = xIcon;
    closeProjectButton.classList.add('xIcon');

    closeProjectButton.addEventListener('click', function(e) {
        removeProjectContent(title);
        e.target.parentNode.remove();
    })

    projectTab.appendChild(closeProjectButton);


    return projectTab;

}

function removeProjectContent(projectTitle) {
    allProjects.removeProject(projectTitle);
    const projectContentDiv = document.getElementById(projectTitle);
    projectContentDiv.remove();
}

//function to create projectContent section 

function createProjectContent(title, description) {
    const projectContent = document.createElement('div');
    projectContent.classList.add('projectContent');
    projectContent.id = title;

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('projectInfo');

    const projectContentTitle = document.createElement('h4');
    projectContentTitle.textContent = title;
    projectInfo.appendChild(projectContentTitle);

    const projectContentDescription = document.createElement('p');
    projectContentDescription.textContent = description;
    projectInfo.appendChild(projectContentDescription);

    projectContent.appendChild(projectInfo);

    return projectContent;
}



//switch between different project tabs.

function projectTabs(event, projectName) {
    
    const projectTab = document.querySelectorAll('.projectTab');
    const projectContent = document.querySelectorAll('.projectContent');

    projectTab.forEach(e => e.classList.remove('active'));

    projectContent.forEach(content => content.classList.remove('active'));

    event.target.classList.toggle('active');

    document.getElementById(projectName).classList.toggle('active');

}




export default createProject;