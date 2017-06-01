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

//global variables
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

var theRing = $("#the-ring");

//Part 4
var makeBuddies = function (){
  $(rivendell).append("<aside></aside>");
  $("aside").append("<ul><ul>");

  for (var i = 0; i < buddies.length; i++) {
  var text = buddies[i];

  $("ul").eq(1).append($("<li></li>").html(text));
  
     }
  };
  makeBuddies();

//Part 5
var beautifulStranger = function (){
  $("aside ul li").eq(3).html("Aragorn");
  }

beautifulStranger();

//Part 6
var leaveTheShire = function (){
  // var hobbits = $(".hobbit").eq();//why can't I use this?
  $("aside").append($("ul").eq(0));
    }

  leaveTheShire();

var fellowship = $("article").eq(1).find("li")

//Part 7
var forgeTheFellowship = function () {
  $(rivendell).append("<div>");
  $("div").eq(2).attr("id", "the-Fellowship");

  

  for (var i = 0; i < fellowship.length; i++) {

    $($("#the-Fellowship").append($(fellowship).eq(i)));
      // alert($(fellowship.eq(i)).text() + " has joined the party!")
      }
}

forgeTheFellowship();
 //Part 8
var theBalrog =function (){
  $(fellowship).eq(0).html("Gandalf the White");
  $(fellowship).eq(0).css({"background-color": "white", "border": "5px solid grey"});
}

theBalrog();

//part 9
var hornOfGondor = function () {
  // alert("The horn of Gondor!");
  $(fellowship).eq(4).remove()

}

hornOfGondor();

//Part 10
var itsDangerousToGoAlone = function () {
  $(mordor).append("<div>");
  $("div").eq(3).attr("id", "mount-dooom");

  $($(mordor).append($(fellowship).eq(5)));
  $($(mordor).append($(fellowship).eq(6)));
}

itsDangerousToGoAlone();

var frodo = $(fellowship).eq(5).find("div");

//part 11
var weWantsIt = function () {
  $(mordor).append("<div>");
  $("div").eq(4).attr("id", "gollum");
  // $("#gollum").append(theRing).eq();
  $("#gollum").append(frodo).eq();
  $("#mount-dooom").append($("#gollum"));

 }

 weWantsIt();

var thereAndBackAgain =function (){
    // ($(mordor).find($("li")));
    $(theShire).append($("#middle-earth").find($(".hobbit")));
    $("#gollum").remove();
    $("aside").find("ul").remove();


  }

thereAndBackAgain();
