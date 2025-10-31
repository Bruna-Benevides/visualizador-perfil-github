const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');
const loading = document.querySelector('.loading');

const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (userName) {
        loading.style.display = 'block';
        profileResults.innerHTML = '';

        try {
            const response = await fetch(`${BASE_URL}/users/${userName}`);
            if (!response.ok) {
                alert('Usuário não encontrado, por favor, verifique o nome do usuário e tente novamente.');
                return
            }
            const userData = await response.json();

            profileResults.innerHTML = `
        <div class="profile-data">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-image"/>
            <div class="profile-info">
                <h2 class="profile-name">${userData.name}</h2>
                                <p class="profile-bio">${userData.bio || 'Não possui bio cadastrada!'}</p>
                
                <div class="profile-stats">
                    <div class="stat-item">
                        <span class="stat-value">${userData.public_repos}</span>
                        <span class="stat-label">Repositórios</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${userData.followers}</span>
                        <span class="stat-label">Seguidores</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${userData.following}</span>
                        <span class="stat-label">Seguindo</span>
                    </div>
                </div>
            </div>
        </div>
        `;

        } catch (error) {
            console.error('Erro ao buscar o perfil do usuário:', error);
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');

        } finally {
            loading.style.display = 'none';
        }

    } else {
        alert('Por favor, digite um nome de usuário do GitHub.');
    }
});