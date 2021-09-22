const container = document.querySelector('.container');
const cartasPokemon = document.querySelector('.cartas-pokemon');

let url = 'https://pokeapi.co/api/v2/pokemon?limit=200';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
                tratarDatos(datos.results);
        })


    function tratarDatos(datos) {

        datos.forEach(element => {
                const url = element.url;
                fetch(url)
                .then(respuesta => respuesta.json())
                .then(pokemones => {
                    tratarPokemones(pokemones);
                })
        });

    }

    function tratarPokemones(pokemonUrl) {
        console.log(pokemonUrl)
        const {name, stats} = pokemonUrl;
        let imagen = pokemonUrl.sprites.other["official-artwork"].front_default;

        const pokemon = document.createElement('div');
        pokemon.classList.add('cartas-pokemon');
        pokemon.innerHTML = `
        
        <div class ="pokemon">

        <div class ="pokemon-nombre">
            <h2>${name}</h2>
        </div>

        <div class ="pokemon-imagen">
            <img src="${imagen}" alt="">
        </div>

        <div class ="pokemon-stacks">
            <h2>Hp: ${stats[0].base_stat}</h2>
            <h2>Atack: ${stats[1].base_stat}</h2>
            <h2>Defense: ${stats[2].base_stat}</h2>
            <h2>Speed: ${stats[5].base_stat}</h2>
        </div>
        <div class ="pokemon-stacks">
            <p>By: Ricardo Cañas</p>
        </div>

        </div>
        `;

        
        container.appendChild(pokemon);
    }


    