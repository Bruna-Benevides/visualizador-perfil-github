const BASE_URL = 'https://api.github.com';

export async function fetchGithubUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
  if (!response.ok) {
    throw new Error('Usuário não encontrado.');
  }
  return await response.json();
}

export async function fetchGithubUserRepos(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}/repos?sort=pushed&direction=desc&per_page=10`);
  if (!response.ok) {
    throw new Error('Não foi possível buscar os repositórios do usuário.');
  }
  return await response.json();
}