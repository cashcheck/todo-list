//factory function which creates the toDo object
function toDo(title, dueDate) {
    
    return {title, dueDate};

}

//factory function which creates the project object

function project(title, description) {

    const toDoList = [];

    function addToDo(toDo) {
        toDoList.push(toDo);
    }

    function findToDo(toDoTitle) {
        const toDoObject = toDoList.find(element => element.title == toDoTitle);
        return toDoObject;

    }

    return {title, description, toDoList, addToDo, findToDo};

}

function projects() {
    
    const projectList = [];

    function addProject(project) {
        projectList.push(project);
    }

    function findProject(projectTitle) {
        const projectObject = projectList.find(element => element.title == projectTitle);
        return projectObject;
    }

    function removeProject(projectTitle) {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].title==projectTitle) {
                projectList.splice(i, 1);
            }

        }

    }


    return {projectList, addProject, findProject, removeProject};

}

export {toDo, project, projects};
