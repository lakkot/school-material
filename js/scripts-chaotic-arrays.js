// empty repository for pokemons
var repository = [];
// objects to fill the array
var charmander = {
  name: 'Charmander',
  height: 0.6,
  abilities: ['blaze', 'solar-power']
}

var bulbasaur = {
  name: 'Bulbasaur',
  height: 0.7,
  abilities: ['chlorophyll', 'overgrow']
}

var squirtle = {
  name: 'Squirtle',
  height: 0.5,
  abilities: ['rain-dish', 'torrent']
}
//add objects to pokemon array
repository.push(charmander, bulbasaur, squirtle);

/*printing first aray to console - inactive
console.log(repository);
*/

/* iterate name and height from the pokemon array, emphasize ones above 0.6 height - inactive
for (i = 0; i < repository.length; i++) {
  if (repository[i].height > 0.6) {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') - Wow that\'s big! </p>');
  } else {
  document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') </p>');
  }
}
*/

/* code like above, but written as function (in case you want to use it multiple times) - inactive
function printArrayDetails() {
  for (i = 0; i < repository.length; i++) {
    if (repository[i].height > 0.6) {
    document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') - Wow that\'s big! </p>');
    } else {
    document.write('<p>' + repository[i].name + ' (height: ' + repository[i].height + ') </p>');
    }
  }
}

printArrayDetails();
*/

//second pokemon array
var repository2 = [
  {name: 'Pidgeot', height: 1.5, abilities: ['keen-eye', 'tangled-feet']},
  {name: 'Vulpix', height: 0.6, abilities: ['flash-fire', 'drought']},
  {name: 'Pikachu', height: 0.4, abilities: ['static', 'lightningrod']}
];

// simmilar function, but with parameters in order to be used with multiple arrays
function printArrayDetails2(pokemonList) {
  for (i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.6) {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow that\'s big! </p>')
    } else {
      document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') </p>')
    }
  }
}
//print  pokemon array
//printArrayDetails2(repository2);

// same effect, bu with using a forEach loop
function printArrayDetails3(pokemonList) {
  if (pokemonList.height > 0.6) {
    document.write('<p>' + pokemonList.name + ' (height: ' + pokemonList.height + ') - Wow that\'s big! </p>')
  } else {
    document.write('<p>' + pokemonList.name + ' (height: ' + pokemonList.height + ') </p>')
  }
}

//print pokemon array
//repository.forEach(printArrayDetails3);

// IIFE. this time, creating an array that inside a variale, to enable control of access to the array
var pokemonRepository3 = (function() {
  //actual repository (empty)
  var repository3 = [];

  //functions that control how you can access the array
  function add(pokemon) {
    if (typeof(pokemon) === 'object' || Object.keys(pokemon) === 'name' && 'height' && 'abilities') {
      repository3.push(pokemon);
    } else {
      document.write('<p>Please reformat your Pokemon as Object</p>')
    }
  }

  function getAll() {
    return repository3;
  }
  //return function results to be used outsie the function (e.g. pokemonRepository3.add)
  return {
    add: add,
    getAll: getAll
  };
})();

//new set of pokemons
var golbat = {
  name: 'Golbat',
  height: 1.6,
  abilities: ['inner-focus', 'infiltrator']
}

var venonat = {
  name: 'Venonat',
  height: 1.0,
  abilities: ['runaway', 'tinted-legs']
}

var machoke = {
  name: 'Machoke',
  height: 1.5,
  abilities: ['guts', 'stead-fast']
}
//pokemon that is not an object, to try out the typeof function
var falsePokemon = 12;

//adding pokemons to new arraay (how to do it in 1 line?)
//pokemonRepository3.add(falsePokemon);
pokemonRepository3.add(golbat);
pokemonRepository3.add(venonat);
pokemonRepository3.add(machoke);
console.log(pokemonRepository3.getAll());

//reusing the same printArrayDetails3 function used in previous array with a forEach loop ('pokemonRepository3.getAll()' would be equivalent to repository3 if the array was accessible globally)
//pokemonRepository3.getAll().forEach(printArrayDetails3);


var $mainTitle = document.querySelector('h1');
console.log($mainTitle.innerText); // -> <h1></h1>
$mainTitle.innerText = 'Pokedex';
console.log($mainTitle.innerText); // -> <h1>*</h1>

/*
//---creating a list of Pokemons using DOM manipulation---
function addItems(pokemon) {
  //assign variable to ul list
  var $pokemonMainList = document.querySelector('ul');
  // assign variable to list item (not existing in html)
  var $listItem = document.createElement('li');
  // assign variable to button (not existing in html)
  var $button = document.createElement('button');
  // creating a conditional from what will be written inside the button
  if (pokemon.height > 0.6) {
    $button.innerText = pokemon.name + ' - Biggie!';
  } else {
    $button.innerText = pokemon.name;
  }
  //adding a CSS class to the button
  $button.classList.add('button');
  //nesting list items inside a ul item
  $pokemonMainList.appendChild($listItem);
  //nesting a button inside the list item
  $listItem.appendChild($button);
}
*/

/* printing all repositories separately
repository.forEach(addItems);
repository2.forEach(addItems);
pokemonRepository3.getAll().forEach(addItems);
*/

//function to push items to one big array
function combineArrays(oldArray, newArray) {
  for (i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i]);
  }
};

//combine all arrays into main Pokemon Repository
var mainRepository = [];
combineArrays(repository, mainRepository);
combineArrays(repository2, mainRepository);
combineArrays(pokemonRepository3.getAll(), mainRepository);
console.log(mainRepository);

//mainRepository.forEach(addItems);

//create the ultimate repository (just like mainRepository but IIFE)
var ultimateRepository = (function() {
  var ultimateRepository = []

  function add(pokemon) {
    ultimateRepository.push(pokemon);
  }

  function getAll() {
    return ultimateRepository;
  }

  function addListItem(listItem) {
    //assign variable to ul list
    var $pokemonMainList = document.querySelector('ul');
    // assign variable to list item (not existing in html)
    var $listItem = document.createElement('li');
    // assign variable to button (not existing in html)
    var $button = document.createElement('button');
    // creating a conditional from what will be written inside the button
    if (listItem.height > 0.6) {
      $button.innerText = listItem.name + ' - Biggie!';
    } else {
      $button.innerText = listItem.name;
    }
    //adding a CSS class to the button
    $button.classList.add('button');
    //nesting list items inside a ul item
    $pokemonMainList.appendChild($listItem);
    //nesting a button inside the list item
    $listItem.appendChild($button);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  }
}());

//copy line items from mainRepository to the IIFE protected ultimateRepository
combineArrays(mainRepository, ultimateRepository.getAll());
console.log(ultimateRepository.getAll());

//print items from ultimateRepository to html
ultimateRepository.getAll().forEach(
  function(item) {
    ultimateRepository.addListItem(item);
  }
);
