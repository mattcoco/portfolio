// Mejoras: A veces el nombre y la descripción salen null. Debería haber un mensaje alternativo para cuando esto ocurre
// axios.get() = axios()

const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


// getUser('bradtraversy')

// function getUser(username) {
//     // esto devuelve una promise
//     axios.get(APIURL+ username)
//         // .then(res => res.json()) esto es lo que hariamos con json
//         .then(res => console.log(res.data)) // pero como usamos axios, podemos acceder al objeto data directamente
//         .catch(err => console.log(err))
//     }

//  Mismo de arriba pero en forma de async function
// async function getUser(username) {
//     // ponemos el await aqui, si no no funciona
//     const res = await axios(APIURL + username)
//     console.log(res.data)
// }

// Mismo de arriba pero destructurized
// async function getUser(username) {
//     const { data } = await axios(APIURL + username)
//     console.log(data)
// }

// Con try/catch. Si no lo ponemos, el error sale en la consola as is.
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)

        console.log(data)

    } catch (err) {
        console.log(err)
        // Asi nos topamos con el caso que el usuario no existe
        if(err.response.status == 404) {
            createErrorCard('No profile with this user name');
        }
    }
}

async function getRepos(username) {
    try {
        // EL ?=created es una query. Ordena el resultado por los ultimos creados
        const { data } = await axios(APIURL + username + '/repos?=created')
        // Aquí data es un objeto con todos los repos. Entrar en https://api.github.com/users/bradtraversy/repos para verlo
        addReposToCard(data)
    } catch (err) {
        createErrorCard('Problem fetching repositories');
    }
}

function createUserCard(user) {
    const cardHTML = `
    
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="" class="avatar">
        </div>

        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos"></div>

        </div>
    </div>
    `;

    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;
    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    // reposEl - ReposElement. El elemento se crea después de la función createUserCard
    const reposEl = document.getElementById('repos')
    repos
    .slice(0,10) // Solo cogeremos las 10 primeras repos
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo')
            // en el objeto repo que hemos llamado, la url para poner en el atributo href="" del html es repo.html_url
            repoEl.href = repo.html_url;
            // No queremos que se abra en la misma pag, asi que lo ponemos en target =_black
            repoEl.target ='_blank';
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl)
        })
}

form.addEventListener('submit', (e) => {
    // Prevent the default behavior
    e.preventDefault();
    const user = search.value;

    if(user) {
        getUser(user);
        // Clearing the search value after the search
        search.value= '';
    }
})