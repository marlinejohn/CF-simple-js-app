let pokemonRepository = (function(){
let pokemonList=[
    {
        name: 'Bulbasaur',
        height: 2.04,
        type: ['Monster', 'Grass']
    }, 
    {
        name: 'Beedrill',
        height: 3.03,
        type: ['Bug']
    }, 
    {
        name: 'Electrode',
        height: 3.11,
        type: ['Electric']
    }];

    function getAll() {
        return pokemonList;
    }

    function add(item) {
        pokemonList.push(item);
    }
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let li = document.createElement('li');
        pokemonList.appendChild(li);
    
        let button = document.createElement('button');
        button.innerHTML = pokemon.name;
        li.appendChild(button);
        button.classList.add('name-btn')
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };

    

}) ();
console.log( pokemonRepository.getAll());
console.log(pokemonRepository.add({ name: "Golem", height: 1.4, type: ['mineral'] }));



pokemonRepository.getAll().forEach(function(pokemon){
   

        // if (pokemon.height > 3.1){
        //     document.write( '<p>', pokemon.name + ': ' + pokemon.height + ' .Wow, that\'s big !! </p>');
        // } else{
        //     document.write('<p>', pokemon.name + ': ' + pokemon.height  + ' </p>');
        // }  
        pokemonRepository.addListItem(pokemon)  
    })



    