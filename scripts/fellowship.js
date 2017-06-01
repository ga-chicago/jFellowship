console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';



// PART ONE

// create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`

function makeMiddleEarth() {
  $('section').attr('id', 'middle-earth');
  $('body').append(section);
  for (var i = 0; i < lands.length; i++) {
    var article = '<article></article>';
    $('section').append(article);
    var h1 = '<h1></h1>';
    $($('article')[i]).append(h1);
    $($('h1')[i]).append(lands[i]);
  }
}

makeMiddleEarth();


// PART TWO

// display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`

function makeHobbits(){
  var ul = '<ul></ul>';
  $($('article')[0]).append(ul);
  for (var i = 0; i < hobbits.length; i++) {
    var li = '<li class="hobbit"></li>';
    $('ul').append(li);
    $($('li')[i]).append(hobbits[i]);
  }
}

makeHobbits();



// PART THREE

// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`

function keepItSecretKeepItSafe(){
  var div = '<div id="the-ring" class="magic-imbued-jewelry"></div>';
  $($('li')[0]).append(div);
}

keepItSecretKeepItSafe();


// PART FOUR

// create an `aside` tag
// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`

function makeBuddies(){
  var aside = '<aside></aside>';
  var ol = '<ol></ol>';
  $($('article')[1]).append(aside);
  $('aside').append(ol);
  for (var i = 0; i < buddies.length; i++) {
    li = '<li></li>';
    $('ol').append(li);
    var x = 4 + i;
    $($('li')[x]).append(buddies[i]);
  }
}

makeBuddies();


// PART FIVE

// change the `'Strider'` text to `'Aragorn'`

function beautifulStranger(){
  $($('li')[7]).replaceWith("<li>Aargorn</li>");
}

beautifulStranger();



// PART SIX

// assemble the `hobbits` and move them to `rivendell`

function leaveTheShire(){
  $($('article')[1]).append($('ul'));
}

leaveTheShire();


// PART SEVEN

// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party

function forgeTheFellowship() {

}

forgeTheFellowship();


// PART EIGHT

// change the `'Gandalf'` text to `'Gandalf the White'`
// apply the following style to the element, make the // background 'white', add a grey border

function theBalrog(){
  $($('li')[0]).replaceWith("<li>Gandalf the White</li>");
  $($('li')[0]).css({'background': 'white', 'border': '3px solid gray'});
}

theBalrog();


// PART NINE

// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// Remove `Boromir` from the Fellowship

function hornOfGondor() {
}

hornOfGondor();


// PART TEN

// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
// add a div with an id of `'mount-doom'` to `Mordor`

function itsDangerousToGoAlone() {
  $($('article')[2]).append($($('li')[5]));
  $($('article')[2]).append($($('li')[5]));
  var div = '<div id="mount-doom"></div>';
  $($('article')[2]).append(div);
}

itsDangerousToGoAlone();



// PART ELEVEN

// Create a div with an id of `'gollum'` and add it to Mordor
// Remove `the ring` from `Frodo` and give it to `Gollum`
// Move Gollum into Mount Doom

function weWantsIt() {
  var div = '<div id="gollum"></div>';
  $($('article')[2]).append(div);

}

weWantsIt();



// PART TWELVE

// remove `Gollum` and `the Ring` from the document
// Move all the `hobbits` back to `the shire`

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
