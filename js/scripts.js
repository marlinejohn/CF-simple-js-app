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

    return {
        getAll : function(){
            return pokemonList;
        },
        add: function (item) {
            pokemonList.push(item);
      }
    }

}) ();
console.log( pokemonRepository.getAll());
console.log(pokemonRepository.add({ name: "Golem", height: 1.4, type: ['mineral'] }));



pokemonRepository.getAll().forEach(function(pokemon){
        if (pokemon.height > 3.1){
            document.write( '<p>', pokemon.name + ': ' + pokemon.height + ' .Wow, that\'s big !! </p>');
        } else{
            document.write('<p>', pokemon.name + ': ' + pokemon.height  + ' </p>');
        }    
    })



    