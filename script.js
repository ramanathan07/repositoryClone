function login() {
    const usernameInput = document.getElementById('username');
    const loggedInContainer = document.getElementById('loggedInContainer');
    const loggedInUsername = document.getElementById('loggedInUsername');
    const loginBtn = document.getElementById('loginBtn');
    if (usernameInput.value.trim() !== '') {
        const username = usernameInput.value;
        loggedInUsername.textContent = `Logged in as: ${username}`;
        loggedInContainer.style.display = 'block';
        loginBtn.style.display = 'none';
        usernameInput.style.display = 'none';
        document.getElementById('password').style.display = 'none';
    }
}
function logout() {
    const usernameInput = document.getElementById('username');
    const loggedInContainer = document.getElementById('loggedInContainer');
    const loginBtn = document.getElementById('loginBtn');
    usernameInput.value = '';
    loggedInContainer.style.display = 'none';
    loginBtn.style.display = 'block';
    usernameInput.style.display = 'block';
    document.getElementById('password').style.display = 'block';
}
const repositories = [
    { name: 'JavaScript Basics', language: 'javascript', stars: 10 },
    { name: 'Python Projects', language: 'python', stars: 25 },
    { name: 'Games Using Java', language: 'java', stars: 15}
];
function displayRepositories(languageFilter, searchTerm) {
const repositoriesContainer = document.getElementById('repositories');
repositoriesContainer.innerHTML = '';
repositories
    .filter(repo => (!languageFilter || repo.language === languageFilter) &&
                    (!searchTerm || repo.name.toLowerCase().includes(searchTerm.toLowerCase())))
    .forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.classList.add('repository');
        repoElement.innerHTML = `
            <h2>${repo.name}</h2>
            <p>Language: ${repo.language}</p>
            <p>Stars: ${repo.stars}</p>
            <button onclick="starRepository(this, '${repo.name}')">Star</button>
        `;
        repositoriesContainer.appendChild(repoElement);
        const lineElement = document.createElement('div');
        lineElement.classList.add('repository-line');
        repositoriesContainer.appendChild(lineElement);
    });
}
document.getElementById('language-filter').addEventListener('change', function () {
const selectedLanguage = this.value;
const searchTerm = document.getElementById('repo-search').value;
displayRepositories(selectedLanguage, searchTerm);
});
function searchRepositories() {
const selectedLanguage = document.getElementById('language-filter').value;
const searchTerm = document.getElementById('repo-search').value;
displayRepositories(selectedLanguage, searchTerm);
}
function starRepository(button, repoName) {
const repoIndex = repositories.findIndex(repo => repo.name === repoName);
if (repoIndex !== -1) {
    repositories[repoIndex].stars = repositories[repoIndex].stars === 0 ? 1 : 0;
    button.style.backgroundColor = repositories[repoIndex].stars === 1 ? '#008000' : '#1a1a1a';
}
}
displayRepositories();