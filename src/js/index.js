import '../scss/main.scss';



fetch('https://api.github.com/users/rafal-wojcik/repos?sort=created')
.then((res) => res.json())
.then((res) => {
    const container = document.querySelector('.projects-grid--js');
    for (let repo of res) {
        const {description, homepage, html_url, name} = repo;

        const template = `<article class="project">
        <div class="project_window">
          <span class="project_circle"></span>
          <span class="project_circle"></span>
          <span class="project_circle"></span>
        </div>
        <div class="project_content">
          <img src="img/github.svg" alt="">
        <h3 class="project_grid project_title">
          <span class="project_label">project:</span>
          <span class="project_special">${name}</span>
        </h3>
        <p class="project_grid project_grid--description">
          <span class="project_label">description:</span>
          <span>${description}</span>
        </p>
        <p class="project_grid">
          <span class="project_label">demo:</span>
          <span>&lt<a target="_blank" rel="noopener noreferrer" class="project_link" href="${homepage}" title="${name} - demo">see here</a>&gt</span>
        </p>
        <p class="project_grid">
          <span class="project_label">github:</span>
          <span>&lt<a class="project_link" href="${html_url}" title="${name} - code">source code</a>&gt</span>
        </p>
        </div>`;
        if (description){
            container.innerHTML += template;
        }
        
    }
})
.catch((e) => console.log(e));