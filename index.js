const projects = [];

const DOM = (() => {
    const newProjectBtn = document.querySelector("#new-project-btn");
    const projectWizard = document.querySelector("#new-project-form");
    const projectWizardCancelBtn = document.querySelector("#cancel-project-btn");
    const projectNameInput = document.querySelector("#project-name-input");
    const projectWizardAddBtn = document.querySelector("#add-project-btn");
    newProjectBtn.addEventListener("click", showProjectWizard);
    projectWizardCancelBtn.addEventListener("click", hideProjectWizard);
    projectWizardAddBtn.addEventListener("click", addProject);
    
    function showProjectWizard() {
            projectWizard.style.display = "block";
        }
    function hideProjectWizard() {
        projectWizard.style.display = "none";
    }
    function addProject() {
        if(projectNameInput.value != "") {
            projects.push(Project(projectNameInput.value));
            hideProjectWizard();
        }
    }
})();

const Task = (taskName, dueDate, priority, taskDetails, projectName) => {
    //
}

const Project = (name) => {
    let tasks = [];
    addTask = (taskName) => {
        tasks.push(Task);
    }

    removeTask = (taskName) => {
        tasks = tasks.filter(task.name != taskName);
    }

    return {tasks};
}

let defaultProject = Project("Your First");