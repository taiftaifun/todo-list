let projects = [];

const DOM = (() => {
    // project mgmt pane
    const projectsDiv = document.querySelector("#projects");
    const newProjectBtn = document.querySelector("#new-project-btn");
    const projectWizard = document.querySelector("#new-project-form");
    const projectWizardCancelBtn = document.querySelector("#cancel-project-btn");
    const projectNameInput = document.querySelector("#project-name-input");
    projectNameInput.addEventListener("keyup", enterAddProject)
    const projectWizardAddBtn = document.querySelector("#add-project-btn");
    newProjectBtn.addEventListener("click", showProjectWizard);
    projectWizardCancelBtn.addEventListener("click", hideProjectWizard);
    projectWizardAddBtn.addEventListener("click", addProject);

    // task mgmt pane
    const tasksDiv = document.querySelector("#tasks");
    const newTaskBtn = document.querySelector("#new-task-btn");
    const taskWizard = document.querySelector("#new-task-form");
    const taskWizardCancelBtn = document.querySelector("#cancel-task-btn");
    const taskNameInput = document.querySelector("#task-name-input");
    taskNameInput.addEventListener("keyup", enterAddTask)
    const taskWizardAddBtn = document.querySelector("#add-project-btn");
    newTaskBtn.addEventListener("click", showTaskWizard);
    taskWizardCancelBtn.addEventListener("click", hideTaskWizard);
    taskWizardAddBtn.addEventListener("click", addTask);

    
    function showProjectWizard() {
            projectWizard.style.display = "block";
            projectNameInput.focus();
        }

    function hideProjectWizard() {
        projectWizard.style.display = "none";
        projectNameInput.value = "";
    }

    // allow the user to add new project by hitting 'enter'
    function enterAddProject(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
            projectWizardAddBtn.click();
        }
    }

    function addProject() {
        projectName = projectNameInput.value.trim();
        if(projectName != "") {
            projectId = projectName.replace(/\s+/g, "-");
            let newProject = Project(projectNameInput.value, projectId);
            projects.push(newProject);
            hideProjectWizard();
            renderProject(newProject);
        }
    }

    function removeProject(e) {
        projectId = e.target.parentNode.id
        projects = projects.filter(project => project.id != projectId);
        e.target.parentNode.remove();
    }

    function renderProject(project) {
        let projectLi = document.createElement("li");
        projectLi.className = "project";
        projectLi.id = project.id;
        let projectNameField = document.createElement("p");
        projectNameField.className = "project-name-field";
        projectNameField.textContent = project.name;
        let deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.className = "delete-project-btn";
        deleteProjectBtn.textContent = "x";
        projectLi.appendChild(projectNameField);
        projectLi.appendChild(deleteProjectBtn);
        deleteProjectBtn.addEventListener("click", removeProject);
        projectsDiv.appendChild(projectLi);
        }

        function enterAddTask(e) {
            if(e.keyCode === 13) {
                e.preventDefault();
                taskWizardAddBtn.click();
            }
        }

        function showTaskWizard() {
            taskWizard.style.display = "block";
            taskNameInput.focus();
        }

        function hideTaskWizard() {
            taskWizard.style.display = "none";
            taskNameInput.value = "";
        }

        function addTask() {
            taskName = taskNameInput.value.trim();
            if(taskName != "") {
                taskId = taskName.replace(/\s+/g, "-").toLowerCase();
                let newTask= Project(taskNameInput.value, taskId);
                projects.push(newProject);
                hideProjectWizard();
                renderProject(newProject);
            }
        }

    return {renderProject}

})();

const Project = (name, id) => {
    let tasks = [];
    return {name, id, tasks};
    }

const Task = (name, id, description, dueDate) => {
    return {name, id, description, dueDate}
}    

let defaultProject = Project("Your First Project", "your-first-project");
projects.push(defaultProject);
DOM.renderProject(projects[0]);