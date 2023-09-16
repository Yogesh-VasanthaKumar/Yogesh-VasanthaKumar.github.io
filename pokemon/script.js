document.addEventListener("DOMContentLoaded", () => {
    const pokemonContainer = document.getElementById("pokemonContainer");
    const searchInput = document.getElementById("searchInput");
    const resetButton = document.getElementById("resetButton");

   
    async function fetchPokemonsByType(type) {
        
        if(type==="all"){
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
           const response1 = await fetch(`https://pokeapi.co/api/v2/`)
        //    console.log(response1.json())
            const data = await response.json();
            data1 = data.results
            const pokemonNames = data1.map((entry) => entry.name);
            
            return pokemonNames;
        }
      else{
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
           
            const data = await response.json();
            
            const pokemonNames = data.pokemon.map((entry) => entry.pokemon.name);
            
            return pokemonNames;
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
            return [];
        }
      }
        
    }

    
    function displayPokemons(pokemonNames) {
        pokemonContainer.innerHTML = "";
        
        pokemonNames.forEach(async (name) => {
            const card = document.createElement("div");
            card.classList.add("pokemon-card");

          
            const pokemonData = await fetchPokemonData(name);
            if (pokemonData) {
               
                card.innerHTML = `
                    <img src="${pokemonData.image}" alt="${name}">
                    <p>${name}</p>
                `;
            }

            card.addEventListener("click", () => {
                
            });

            pokemonContainer.appendChild(card);
        });
    }

    
    async function fetchPokemonData(name) {
        
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            const image = data.sprites.front_default;
            return { image };
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
            return null;
        }
    }

    
    const typeFilterButtons = document.querySelectorAll(".type-filter");
    typeFilterButtons.forEach((button) => {
        button.addEventListener("click", async () => {
            const selectedType = button.getAttribute("data-type");
            const pokemonNames = await fetchPokemonsByType(selectedType);
            displayPokemons(pokemonNames);
        });
    });


    resetButton.addEventListener("click", async () => {
        const allPokemonNames = await fetchPokemonsByType("all"); 
        
        displayPokemons(allPokemonNames);
    });



    resetButton.click();
});
