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
            // console.log(pokemon);  
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      let modalContainer = document.querySelector('#modal-container');

      function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function(){
            showModal(item)
        })
    }

    function showModal(pokemon){
      // clear contents
      modalContainer.innerHTML = '';

      // create elements for modal
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let modalContent = document.createElement('div');
      modalContent.classList.add('modal-Content');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal) ;

      let nameElement = document.createElement('h2');
      nameElement.innerText = pokemon.name;

      let heightElement =document.createElement('p');
      heightElement.innerText = `Height: ${pokemon.height}`;

      let imgElement = document.createElement('img');
      imgElement.src = pokemon.imageUrl;
      imgElement.alt = pokemon.name;

      // append to modal content
      modalContent.appendChild(closeButtonElement)
      modalContent.appendChild(nameElement);
      modalContent.appendChild(heightElement);
      modalContent.appendChild(imgElement);

      // append modelContent to modal
      modal.appendChild(modalContent);

      // append modal to modalContainer
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible')
    }

    function hideModal(){
      modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

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



    