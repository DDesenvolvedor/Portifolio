function openProject(projectId) {
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');
    const projectDetails = document.getElementById('project-details');

    // Simule dados do projeto (substitua com seus próprios dados)
    const projectsData = {
        'project1': { title: 'Projeto 1', description: 'Descrição do Projeto 1...' },
        'project2': { title: 'Projeto 2', description: 'Descrição do Projeto 2...' },
        // Adicione mais projetos conforme necessário
    };

    if (projectsData[projectId]) {
        projectTitle.textContent = projectsData[projectId].title;
        projectDescription.textContent = projectsData[projectId].description;
        projectDetails.classList.remove('hidden');
    }
}

function closeProject() {
    document.getElementById('project-details').classList.add('hidden');
}





const app = new Vue({
    el: '#app',
    data: {
        isMenuVisible: false,
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },
        // ... restante do código
    },
});

document.addEventListener('click', (event) => {
    const menuButton = document.getElementById('toggleButton');
    const menuList = document.querySelector('.menu ul');

    if (event.target !== menuButton && !menuList.contains(event.target)) {
        app.isMenuVisible = false;
    }
});