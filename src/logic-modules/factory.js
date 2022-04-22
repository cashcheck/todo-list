//factory function which creates the toDo object

function toDo(title, description, dueDate, priority) {
    
    return {title, description, dueDate, priority};

}

//factory function which creates the project object

function project(title) {

    const toDoList = [];

    function addToDo(toDo) {
        toDoList.push(toDo);
    }

    return {title, toDoList, addToDo};

}

export {toDo, project};
