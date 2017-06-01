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


var theShire = $('lands').eq(0);
var rivendell = $('lands').eq(1);
var mordor = $('lands').eq(2);

///////COMPLETE///////////////////////////////////////////////////////



function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  $('body').append(section);
  $('section').attr('id', 'middle-earth');

  // add each land as an article tag
  var article = '<article></article>';
  var h1 = '<h1></h1>';
  $('section').append(article);
  $('section').append(article);
  $('section').append(article);
  // $('article')[0].append(lands[0]);
  // $('article')[1].append(lands[1]);
  // $('article')[2].append(lands[2]);
  $('article').append(h1);
  $('h1')[0].append(lands[0]);
  $('h1')[1].append(lands[1]);
  $('h1')[2].append(lands[2]);
  
  // **inside each article tag include an h1 with the name of the land

}

makeMiddleEarth();

//////COMPLETE////////////////////////////////////////////////////////

var theShire = $("article").eq(0);
var rivendell = $("article").eq(1);
var mordor = $("article").eq(2);


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
 

//////////////////////////////////////////////////////////////

//function keepItSecretKeepItSafe(){ can be rewritten as:
var keepItSecretKeepItSafe = function () {

    // create a div with an id of `'the-ring'`
    $("li").eq(0).append("<div></div>");
    // give the div a class of `'magic-imbued-jewelry'`
    $("div").attr("class", "magic-imbued-jewelry");
    // add the ring as a child of `Frodo`
    $("div").attr("id", "the-ring");
    }

keepItSecretKeepItSafe();
 

///////COMPLETE///////////////////////////////////////////////////////

//function makeBuddies(){ can be rewritten as:
var makeBuddies = function (){
  // create an `aside` tag
  $(rivendell).append("<aside></aside>");
  // attach an `unordered list` of the `'buddies'` in the aside
  $("aside").append("<ul><ul>");
 
  for (var i = 0; i < buddies.length; i++) {
  var text = buddies[i];

  // insert your aside as a child element of `rivendell`
  $("ul").eq(1).append($("<li></li>").html(text));

      }
  };

makeBuddies();


///////COMPLETE///////////////////////////////////////////////////////

//function beautifulStranger(){ can be rewritten as:

var beautifulStranger = function (){
    // change the `'Strider'` text to `'Aragorn'`
    $("aside ul li").eq(3).html("Aragorn");
};

beautifulStranger();

///////COMPLETE///////////////////////////////////////////////////////

//function leaveTheShire(){ can be rewritten as:
var leaveTheShire = function (){
    // assemble the `hobbits` and move them to `rivendell`
   $("aside").append($("ul").eq(0));
}

leaveTheShire();

//////////////////////////////////////////////////////////////

//got hung up on #7! looking forward to reviewing.

// function forgeTheFellowship() {
//   var forgeTheFellowship = function () {
//       $(rivendell).append("<div>");
//      $("div").eq(2).attr("id", "the-Fellowship");
  
//       for (var i = 0; i < fellowship.length; i++) {
//       $($("#the-Fellowship").append($(fellowship).eq(i)));
//       }
// }

// forgeTheFellowship();

//////////////////////////////////////////////////////////////

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
