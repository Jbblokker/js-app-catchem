// //this is an arry of pokemon. we are using name, height, and type as objects.
//this is an arry of pokemon. we are using name, height, and type as objects.
let pokemonRepository = (function () {
let pokemonList =[];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
      pokemonList.push(pokemon);
    }
  function getAll() {
      return pokemonList;
    }
//This function will allow the modal to show and data in the console log
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);

    });
  }
  function loadList() {
    return fetch (apiUrl).then (function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name:item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon)
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
//this function is for loading the data needed for our modal
  function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

      showDetails(pokemon);
    });
  });


  return { add: add,
     getAll: getAll,
     addListItem: addListItem,
     loadList: loadList,
     loadDetails: loadDetails,
     showDetails: showDetails,
    }

})();


//forEach value being used to display array.
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.querySelectorAll(".card");
  //li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].querySelector(".card-body").querySelector(".card.title");
    console.log(a.innerText);
    txtValue = a.textContent
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


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
