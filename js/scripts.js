let pokemonRepository = (function(){
let pokemonList=[] ;
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);  
    }

    // To add, append elements (li & button) and event listener.
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let li = document.createElement('li');
        pokemonList.appendChild(li);
    
        let button = document.createElement('button');
        button.innerHTML = pokemon.name;
        li.appendChild(button);
        button.classList.add('name-btn');
        addEventListenerToButton(button, pokemon)
    }
    function addEventListenerToButton(button, pokemon) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        })
        
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);  
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function(){
            console.log(item);
        })
    }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Details we want to add
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }
    

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
}) ();


pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon)  
    });
})



    