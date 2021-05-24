const url = "https://pokeapi.co/api/v2/pokemon";

let getPokemons = () => {
  return fetch(url)
    .then((dat) => dat.json())
    .then((data) => data.results);
};
let getPokemon = (url) => {
  return fetch(url).then((data) => data.json());
  /* .then(data=> console.log(data.sprites.other.official-art.front_default) ) */
};

export default { getPokemons, getPokemon };
