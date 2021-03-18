const projects = [];

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
        }

    function hideProjectWizard() {
        projectWizard.style.display = "none";
        projectNameInput.value = "";
    }

    function enterAdd(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
            projectWizardAddBtn.click();
        }
    }

    function addProject() {
        if(projectNameInput.value.trim() != "") {
            console.log(projectNameInput.value);
            let newProject = Project(projectNameInput.value);
            projects.push(newProject);
            hideProjectWizard();
            renderProject(newProject);
            console.log(projects);
        }
    }

    function removeProject(e) {
        //
    }

    function renderProject(project) {
        let projectLi = document.createElement("li");
        projectLi.className = "project";
        projectLi.id = project.name;
        projectLi.textContent = project.name;
        projectsDiv.appendChild(projectLi);
        }
})();

const Project = (name) => {
    let tasks = [];
    return {name, tasks};
    }

let defaultProject = Project("Your First");