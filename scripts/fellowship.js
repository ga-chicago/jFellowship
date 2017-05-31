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
var body = $("body");
var section = $('<section></section>');

function makeMiddleEarth() {
  section.attr("id","middle-earth");
  body.append(section);
  $.each(lands,function(i,landName){
    section.append("<article><h1>" + landName + "</h1></article>");
  });
};

makeMiddleEarth();



var theShire = $($("article")[0]);
var rivendell = $($("article")[1]);
var mordor = $($("article")[2]);
var listOfHobbits = $("<ul></ul>");

function makeHobbits(){
  theShire.append(listOfHobbits);
  $.each(hobbits,function(i,hobbit){
    listOfHobbits.append("<li class='hobbit'>" + hobbit + "</li>")
  });
};

makeHobbits();



var theRing = $("<div id='the-ring' class='magic-imbued-jewelry'></div>");
var frodo = $($(".hobbit")[0])
var sam = $($(".hobbit")[1])

function keepItSecretKeepItSafe(){
  frodo.append(theRing);
}

keepItSecretKeepItSafe();



function makeBuddies(){
  var buddiesList = $("<ul></ul>");
  var aside = $("<aside></aside>")
  $.each(buddies,function(i,buddy){
    buddiesList.append("<li>" + buddy + "</li>");
  })
  aside.append(buddiesList).appendTo(rivendell);
}

makeBuddies();



function beautifulStranger(){
  $($("aside ul li")[3]).text("Aragorn");
}

beautifulStranger();



function leaveTheShire(){
  listOfHobbits.appendTo(rivendell);
}

leaveTheShire();



var theFellowship = $("<div id='the-fellowship'></div>");
var theFellowshipList = $("<ul></ul>");
var allTheFriends = $("li");

function forgeTheFellowship() {
  theFellowship.append(theFellowshipList).appendTo(rivendell);
  $.each(allTheFriends,function(i,name){
    $(this).appendTo(theFellowshipList);
    alert($(name).text() + " has joined the party");
  })
}

forgeTheFellowship();



function theBalrog(){
  $($("li")[0]).text("Gandalf the White").css("background-color","white").css("border","solid 2px gray");
}

theBalrog();



function hornOfGondor() {
  alert("The horn of Gondor has been blown!!! :(");
  $($("li")[4]).remove();
}

hornOfGondor();



function itsDangerousToGoAlone() {
  var mordorList = $("<ul></ul>").append(frodo).append(sam);
  mordor.append(mordorList).append("<div id='mount-doom'></div>");
}

itsDangerousToGoAlone();



var gollum = $("<div id='gollum'></div>");

function weWantsIt() {
  gollum.appendTo(mordor).append(theRing).appendTo($("#mount-doom"))
}

weWantsIt();



function thereAndBackAgain(){
  gollum.remove();
  theRing.remove();
  var theShireHobbitList = $("<ul></ul>").append($(".hobbit")).appendTo(theShire);
}

thereAndBackAgain();
