//this is an arry of pokemon. we are using name, height, and type as objects.
let pokemonList = [
  { name: 'Blastoise',
  height: 5,
  type: 'water'
  },

  { name: 'Charzard',
  height: 5,
  type: [ 'fire', 'flying']
  },

  { name: 'Lapras',
  height: 8,
  type: [ 'water','ice']
  }
];
//forEach value being used to display array.
pokemonRepository.getAll().forEach(function(pokemon) {
  document.write('<br>' + 'My name is ' + pokemon.name + ' and I am ' + ' (height: ' +
pokemon.height + ')' + ' tall, and I am a ' + pokemon.type + ' pokemon.' );
});

pokemonRepository.add({name: 'Bulbasaur '});
//For loop that was previously used to display pokemonList
//for (let i=0; i < pokemonList.length; i++){
  //if (pokemonList[i].height <= 7){
    //document.write('<br>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' );
  //}else{
    //document.write('<br>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')'
    //+ ',Wow that is one big Pokemon');
