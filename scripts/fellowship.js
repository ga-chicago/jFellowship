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

//part 1
var makeMiddleEarth = function() {
  var middleEarth = section;
  $("body").append(middleEarth);
  $("section").attr("id", "middle-earth");
  
  for (var i = 0; i < lands.length; i++){
    var text = lands[i];
    $("#middle-earth").append("<article></article>");
    $("article").eq(i).append("<h1></h1>");
    $("h1").eq(i).append(text);
  }
};

makeMiddleEarth();

// function makeHobbits(){
//   // your answers here
// }

// makeHobbits();

// function keepItSecretKeepItSafe(){
//   // your answers here
// }

// keepItSecretKeepItSafe();

// function makeBuddies(){
//   // your answers here
// }

// makeBuddies();

// function beautifulStranger(){
//   // your answers here
// }

// beautifulStranger();

// function leaveTheShire(){
//   // your answers here
// }

// leaveTheShire();

// function forgeTheFellowship() {
//   // your answers here
// }

// forgeTheFellowship();

// function theBalrog(){
//   // your answers here
// }

// theBalrog();

// function hornOfGondor() {
//   // your answers here
// }

// hornOfGondor();

// function itsDangerousToGoAlone() {
//   // your answers here
// }

// itsDangerousToGoAlone();

// function weWantsIt() {
//   // your answers here
// }

// weWantsIt();

// function thereAndBackAgain(){
//   // your answers here
// }

// thereAndBackAgain();
