import addToDo from './toDoDom.js'
import {addFormToDo, addFormProject} from './formDOM.js';


function createProject(project) {

    //creates contents of tab

    const projectContent = createProjectContent(project.title,project.description);

    document.querySelector('#mainContainer').appendChild(projectContent);

    //adds toDo elements to the DOM

    if (project.toDoList.length) {

    console.log(project.toDoList);

    project.toDoList.forEach(element => {

        let toDoDom = addToDo(element);
        const projectDom = document.getElementById(project.title);
        projectDom.appendChild(toDoDom);

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
    projectTab.textContent = title;

    return projectTab;

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