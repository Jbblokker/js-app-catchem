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

    function addListItem(pokemon) {
     pokemonRepository.loadDetails(pokemon).then(function () {
       let row = $(".row");

       let card = $(
         '<div class="card mt-5" style="width: 18rem; margin:13px;"></div>'
       );
       let image = $(
         '<img class="card-img-top mx-auto" style="width:30%;" alt="...">'
       );
       let title = $('<h5 class="card-title">' + pokemon.name + "</h5>");
       image.attr("src", pokemon.imageUrl);
       let body = $('<div class="card-body" style="text-align: center;"></div>');
       let button = $(
         '<button type="button" class="btn" style="background-color: #f0e446; color: black" data-toggle="modal" data-target="#exampleModal">Profile</button>'
       );

       // Append
       row.append(card);
       card.append(image);
       card.append(body);
       body.append(title);
       body.append(button);
    button.on('click', function (event) {
      showDetails(pokemon);
    });
  });
}
let modalConatiner = $("#modal-container");
//show Modal function
function showModal(item) {
 let modalBody = $('.modal-body');
 let modalTitle = $('modal-title');
 let modalHeader = $('modal-header');
 modalTitle.empty();
 modalBody.empty();

 //creating element ofr name in modal contentElement
 let nameElement = $('<h1>' + item.name + '</h1>');
 // creating an inmage in modal content
//// let imageElement = $('<img class='modal-img' style='width50%'>');
  imageElement.atrr('src', item.imageUrl);
 //creating element for height in modal content
 let heightElement = $('<p>' + 'height : ' + item.height + '</p>');
 //creating element for weight in modal content
 let weightElement = $('<p>' + 'weight : ' + item.weight + '</p>');
 //creating element for type in the modal contentElement
 let typesElement = $('<p>' + 'type : ' + item.types + '</p>');
 //creating element for the abilities in modal content
 let abilitiesElement = $('<p>' + 'abilities : ' + item.abilities + '</p>');

 modalTitle.append(nameElement);
// modalBody.append(imageElement);
 modalBody.append(heightElement);
 modalBody.append(weightElement);
 modalBody.append(typesElement);
 modalBody.append(abilitiesElement);

modalContainer.addClass("is-visible");

}


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
