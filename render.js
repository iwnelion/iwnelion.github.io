// renders the content from projects.js to the project pages
let projectsContainer = document.querySelector(".projects-container")

let webProjects = projects.filter(p => p.category === "web-frontend")
let project = webProjects[1]
let projectHTML = `
  <div class="project-card">
    <h3>${project.title}</h3>
    <p>${project.shortDescription}</p>
  </div>
`;

projectsContainer.innerHTML += projectHTML