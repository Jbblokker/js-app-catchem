//this is an arry of pokemon. we are using name, height, and type as objects.
let pokemonRepository = (function () {
let pokemonList =[
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
  function add(pokemon) {
      pokemonList.push(pokemon);
    }
  function getAll() {
      return pokemonList;
    }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.addEventListener('click', function (pokemon){console.log (name);});
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  return { add: add,
     getAll: getAll,
     addListItem: addListItem
  };
})();
//forEach value being used to display array.
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});





//document.write used to display pokemon from array
  //document.write('<br>' + 'My name is ' + pokemon.name + ' and I am ' + ' (height: ' +
//pokemon.height + ')' + ' tall, and I am a ' + pokemon.type + ' pokemon.' );
//});

//For loop that was previously used to display pokemonList
//for (let i=0; i < pokemonList.length; i++){
  //if (pokemonList[i].height <= 7){
    //document.write('<br>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' );
  //}else{
    //document.write('<br>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')'
    //+ ',Wow that is one big Pokemon');
