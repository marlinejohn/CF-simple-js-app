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

    // Display names and height from the pokemonList.

    for(let i = 0; i < pokemonList.length; i++ ){
    // Display extra note if height of a character is greater than 3.1
        if (pokemonList[i].height > 3.1){
            document.write('<p>', pokemonList[i].name + ': ' + pokemonList[i].height + ' .Wow, that\'s big !! </p>');
        } else{
            document.write('<p>', pokemonList[i].name + ': ' + pokemonList[i].height  + ' </p>');

        }    
    }

    