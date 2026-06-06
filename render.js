// renders the content from projects.js to the project pages
function renderProjects(projectsArray, container){
    container.innerHTML = "";
    let output = "";
    
    
    projectsArray.forEach(project => {
        let technologiesHTML = "";
        
        // loop through the technologies array
        project.technologies.forEach(technology => {
            technologiesHTML += `<span class="tech-pill">${technology}</span>`;
        });

        output += `
            <div class="project-card">
                <span class="project-type">[ ${project.type} ]</span>
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="project-technologies">
                    ${technologiesHTML}
                </div>
            </div>
        `;
    });

    container.innerHTML = output;
}

let wordpressContainer = document.querySelector("#wordpress-projects");
let learningContainer = document.querySelector("#learning-projects");

let wordpressProjects = projects.filter(
  p => p.category === "web-frontend" && p.subcategory === "wordpress"
);

let learningProjects = projects.filter(
  p => p.category === "web-frontend" && p.subcategory === "learning"
);

renderProjects(wordpressProjects, wordpressContainer);
renderProjects(learningProjects, learningContainer);