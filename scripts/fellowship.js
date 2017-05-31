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
var body = $('body');
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
  body.append('<section id="middle-earth"></section>')
  $.each(lands, function(i, landName){
    $('#middle-earth').append('<article id="' + landName + '""><h1>' + landName + '</h1></article>')
  })
}

makeMiddleEarth();

var rivendell = $('#Rivendell');
var theShire = $($('article')[0]);
var mordor = $('#Mordor');

function makeHobbits(){
  // your answers here
  theShire.append('<ul id="hobbits"></ul>')
  $.each(hobbits, function(i, hobbitName){
    $('#hobbits').append('<li class="hobbit">' + hobbitName + '</li>')
  })

}

makeHobbits();

var frodo = $($('.hobbit')[0]);
var sam = $($('.hobbit')[1]);
var theRing = $('<div id="the-ring" class="magic-imbued-jewelry"></div>')

function keepItSecretKeepItSafe(){
  // your answers here
  frodo.append(theRing)
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
  rivendell.append('<aside><ul id="buddies"></ul></aside>')
  $.each(buddies, function(i, budName){
    $('#buddies').append('<li class="buddy">' + budName + '</li>')
  })
}

makeBuddies();

var gandalf = $($('.buddy')[0])
var boromir = $($('.buddy')[4])
var aragorn = $($('.buddy')[3])

function beautifulStranger(){
  // your answers here
  aragorn.text('Aragorn')
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
  rivendell.append($("#hobbits"))
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
