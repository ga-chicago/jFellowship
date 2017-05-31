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

var theShire = $("article").eq(0);
var rivendell = $("article").eq(1);
var mordor = $("article").eq(2);

//Part 2
var makeHobbits = function() {
   $(theShire).append("<ul></ul>");

  for (var i = 0; i < hobbits.length; i++){
    var text = hobbits[i];
    $("ul").append("<li></li>");
    $("li").eq(i).append(text);
    $("li").eq(i).attr("class", "hobbit");
    }
  };
  makeHobbits ();



//Part 3
var keepItSecretKeepItSafe = function () {

  $("li").eq(0).append("<div></div>");
  $("div").attr("class", "magic-imbued-jewelry");
  $("div").attr("id", "the-ring");
    }
  keepItSecretKeepItSafe();

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
