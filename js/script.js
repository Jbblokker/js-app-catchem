//this is an arry of pokemon. we are using name, height, and type as objects.
let pokemonRepository = (function () {
let modalContainer = document.querySelector('#modal-container');
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

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);

    });
  }
//this is our modal
  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

//adding a button inside the modal to allow us to close the modal
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close X';
    closeButtonElement.addEventListener('click',hideModal);
//here we are adding the pokemon name
    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;
//here we are adding the height
    let contentElement = document.createElement ('p');
    contentElement.innerText = 'Height: ' + pokemon.height;
//here we are adding the pokemon image
    let container = document.querySelector('#image-container');
    let myImage = document.createElement('img');
    myImage.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);
    modal.appendChild(myImage);

    modalContainer.classList.add ('is-visible');
  }
//the hide modal function
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
//this function will hide the modal if you press the escape key on your keyboard
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible'))
    { hideModal();
    }
  });
//this function will hide the modal if you click outside of the modal box
  modalContainer.addEventListener('click', (e) => {
    //since this is also triggered when clicking INSIDE th modal
    //We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if(target === modalContainer) {
      hideModal();
    }
  });

  //document.querySelector('#show-modal').addEventListener('click', () => {
  //  showModal('Modal title', 'This is the modal content!');
//});

  return { add: add,
     getAll: getAll,
     addListItem: addListItem,
     loadList: loadList,
     loadDetails: loadDetails,
     showDetails: showDetails,
     hideModal: hideModal,
     showModal: showModal
  }

})();


//forEach value being used to display array.
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
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
