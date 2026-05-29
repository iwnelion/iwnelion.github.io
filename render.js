// renders the content from projects.js to the project pages
let wordpressContainer = document.querySelector("#wordpress-projects");
let learningContainer = document.querySelector("#learning-projects");

let wordpressProjects = projects.filter(p => p.category === "web-frontend" && p.subcategory === "wordpress")
wordpressProjects.forEach(project => {
    let projectHTML = `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
        </div>
    `
    projectsContainer.innerHTML += projectHTML;
})