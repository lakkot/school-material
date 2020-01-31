
var age = 40;
if (age <= 11) {
  console.log('a child')
} else if (age > 11 && age <20) {
  console.log('a teenager')
} else if (age >= 20 && age < 40) {
  console.log('a young person')
} else {
  console.log('full grown')
}

var result = age >= 40 ? 'fully grown' : 'still young';
console.log(result);

var ages = [20, 30, 25, 22, 31];
console.log(ages.length);


// a function without a return statement
function add(number1, number2) {
  console.log(number1 + number2);
}
var result = add(1, 2);
console.log(result)

function multiply(number1, number2) {
  return number1 * number2;
}
var result2 = multiply(3, 5);
console.log(result2);


//variable y will not be defined outside the foo function
var x = 5;

function foo(){
  var y = 10;
  console.log("From inside foo(): x = " + x);
  console.log("From inside foo(): y = " + y);
}

foo();
console.log("From outside foo(): x = " + x);
console.log("From outside foo(): y = " + y);


//shorthand in JS5 for writing short functions
var addTwo = number => number + 2;
//See how much simpler this looks? The example above is the same as writing this:
var addTwo = function(number){ return number + 2 };

// first function with a 'return' statement. Simple division of two numbers with a not about not dividing with 0
function divide(dividend, divisor) {
  if (divisor === 0) {
    return 'What is wrong with you!'
  }else {
    var division = dividend / divisor;
    return division;
  }
}


console.log(divide(5, 10));
console.log(divide(10, 0));


// Assigning a function to an object property:
var person = {};

person.tellMyAge = function() {
  return 42
};

console.log(person);

//prompt() lets you get a popup where you can gather some input
var name = prompt('Please enter your name!');
console.log(name);

//There’s also confirm, which asks the user to click “OK” or “Cancel” (which will result in true or false respectively):
var isAccepted = confirm('Do you accept?');
console.log(isAccepted);

//Another handy function you can use is setTimeout, which calls a function or executes line(s) of code in a delayed fashion:
function runThisLater() {
  console.log('Hello!');
}
setTimeout(runThisLater, 1000); // Run this in 1000ms

//One of the most important functions when working with objects is Object.keys(someObject);. This will return an array of all the properties (or keys) that have been defined in the object reference you pass to the keys function:
var anne = {
  name: 'Anne',
  age: 38,
  children: [ ]
};
var allProperties = Object.keys(anne); // contains ['name', 'age', 'children']

console.log(Object.keys(anne));
console.log(anne);

//In addition to push();, there are a variety of other functions for adding/removing entries:
var names = ['John', 'Anne', 'Carly'];
names.push('Bob'); // Add to the end of the array
names.unshift('Julia'); // Add to the start of the array (as new first item)
names.pop(); // Remove the LAST item from the array (Bob)
names.shift(); // Remove the FIRST item from the array (Julia)

//You can also reverse an array:
var numbers = [1, 2, 3, 4];
numbers.reverse(); // Change the array to [4, 3, 2, 1]

// if you edit your array at one point in the code and some time later you want to access the original array, that original array is gone forever. That’s why it’s good practice to duplicate the contents of an array before manipulating it. You can do so with the .slice(); function:
var namesA = ['John', 'Anne', 'Carly'];
var namesB = namesA.slice(); // Now you can modify `namesA` without affecting `namesB`
//When working with arrays, you’ll often find it necessary to locate items within them. You can do this with the .indexOf(); function:
var names = ['John', 'Anne', 'Carly'];
names.indexOf('John'); // 0
names.indexOf('Bob'); // -1 (not found in the array)
//If you specifically need the last occurrence of an item in an array, however, you can use the .lastIndexOf()




// for vs forEach:
var foodList = ['tuna', 'cheese', 'salad'];

document.write('<h3>===for LOOP===</h3>');
for(var i = 0; i < foodList.length; i++){
  document.write('<p>' + foodList[i] + '</p>');
}

document.write('<h3>===forEach LOOP===</h3>');
foodList.forEach(function(currentItem){
  document.write('<p>' + currentItem + '</p>');
});

/*Traversing Nodes
Besides selecting nodes, there are many functions for traversing from one node to another. The following functions can be called on any single DOM node (i.e., either the result of querySelector() or a single item from querySelectorAll() that you’ve selected using bracket notation or forEach()):
*/
var $element = document.querySelector('.bob');
$element.parentElement; // Get the parent node of the element
$element.nextElementSibling; // Get the next sibling element, or null if it’s the last one
$element.previousElementSibling; // Get the previous sibling element, or null if it’s the first one
$element.firstElementChild; // The first child of the element
$element.lastElementChild; // The last child of the element
$element.childElementCount; // The number of children this element has
$element.children; // (IMPORTANT: Not recommended) The direct children of this element


var newElement = document.createElement('button');
Pretty cool, right? And it can be more than a button, too—you can specify any HTML tag name you want.

f you were to look for this button on your page, however, you wouldn’t find it. That’s because, while the button has been created, it’s still detached, meaning it only exists virtually. You can still do everything with it that JavaScript allows, but it’s not actually present on the page. For that, you need to append it to an element on the page.

One of the methods for properly appending HTML elements is appendChild. For example, if you were to replicate what was done in the innerHTML example above, only this time, using appendChild, you could do something like this:

-- HTML --
<div class='container'></div>

-- JAVASCRIPT --
var $container = document.querySelector('.container');
var button = document.createElement('button');
button.innerText = "Click Me";
$container.appendChild(button);

-- HTML --
<div class='container'>
  <p>This is a paragraph</p>
</div>

-- JAVASCRIPT --
var $elementToRemove = document.querySelector('p');
$elementToRemove.parentElement.removeChild($elementToRemove);
