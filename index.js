let projects = [];

const DOM = (() => {
    const projectsDiv = document.querySelector("#projects");
    const newProjectBtn = document.querySelector("#new-project-btn");
    const projectWizard = document.querySelector("#new-project-form");
    const projectWizardCancelBtn = document.querySelector("#cancel-project-btn");
    const projectNameInput = document.querySelector("#project-name-input");
    projectNameInput.addEventListener("keyup", enterAdd)
    const projectWizardAddBtn = document.querySelector("#add-project-btn");
    newProjectBtn.addEventListener("click", showProjectWizard);
    projectWizardCancelBtn.addEventListener("click", hideProjectWizard);
    projectWizardAddBtn.addEventListener("click", addProject);
    
    function showProjectWizard() {
            projectWizard.style.display = "block";
            projectNameInput.focus();
        }

    function hideProjectWizard() {
        projectWizard.style.display = "none";
        projectNameInput.value = "";
    }

    // allow the user to add new project by hitting 'enter'
    function enterAdd(e) {
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
})();

const Project = (name, id) => {
    let tasks = [];
    return {name, id, tasks};
    }

//let defaultProject = Project("Your First");