document.getElementById('button').addEventListener('click', function() {
    const pokemonNumber = document.getElementById('entradapokemon').value;
    
    // Check if the user entered a number
    if (!pokemonNumber || isNaN(pokemonNumber)) {
        alert('Por favor ingresa un número de Pokémon válido');
        return;
    }
    
    // Fetch data from the API
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            // Display Pokémon info
            const pokemonInfoDiv = document.getElementById('PokemonInfoDiv');
            pokemonInfoDiv.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height} hectómetros</p>
                <p>Peso: ${data.weight} hectogramos</p>
                <p>Habilidades: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            const pokemonInfoDiv = document.getElementById('PokemonInfoDiv');
            pokemonInfoDiv.innerHTML = `<p>${error.message}</p>`;
        });
});
