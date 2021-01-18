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
//
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <6 && pokemonList[i].height >4){
    document.write('<br>' + pokemonList[i].name + ' height is ' + pokemonList[i].height );
  }else if (pokemonList[i].height >7){
    document.write('<br>' + pokemonList[i].name + ' height is ' + pokemonList[i].height
    + ', Wow that is one big Pokemon');
  }
}
