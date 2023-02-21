 const poke_container = document.getElementById('poke-container')
 const poke_count = 150;
 const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#d49ff4',
    bug: '#9bdeae',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#d4ebff',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
 }

 //el async lo puso al final
 const fetchPokemons = async () => {
    for(let i = 1; i <= poke_count; i++) {
        await getPokemon(i)
    }
 }

 const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    createPokemonCard(data)
}

fetchPokemons()

const createPokemonCard = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon')
    // Si hay dos tipos, hacemos degradado con los 2. Si no, repetimos el mismo
    card.style.background = 'linear-gradient(' + colors[pokemon.types[0].type.name] + ',' + (pokemon.types[1] ? colors[pokemon.types[1].type.name] : colors[pokemon.types[0].type.name]) + ')'
    // Como el objeto tenia una propiedad de nombre official-artwork, con guión, tuve que poner el [] y la propiedad dentro
    card.innerHTML = `
    <div class="img-container">
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="">
        </div>
    <div class="info">
        <span class="number">#${pokemon.id}</span>
        <h3 class="name" style="text-transform: capitalize">${pokemon.name}</h3>
        <small class="type" style="text-transform: capitalize">Type: <span>${pokemon.types[0].type.name}${pokemon.types[1] ? '/' + pokemon.types[1].type.name : ''} </span></small>
    </div>
    `;
    // Para probar: console.log(pokemon.types[0].type.name)
    poke_container.appendChild(card)
}