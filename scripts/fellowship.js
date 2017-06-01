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

var lands = $(['The Shire', 'Rivendell', 'Mordor']);
var body = $("body");
var section = $('<section></section>');

function makeMiddleEarth() {
  section.attr("id", "middle-earth");
  body.append(section);
  $.each(lands, function(i, landName) {
  section.append("<article><h1> " + landName + "</h1></article")
  }
  )
};


makeMiddleEarth();

var shire = $($("article")[0]);
var rivendell = $($("article")[1]);
var mordor = $($("article")[2]);


function makeHobbits(){
  shire.append("<ul class='hobbits-list'></ul>")
  for(i = 0; i < hobbits.length; i++) {
    var newHobbit = $($("ul").append("<li> " + hobbits[i] + " </li>"));
    $("li").addClass("hobbit");
   }
};

makeHobbits();

  var frodo = $($(".hobbit")[0]);
  var sam = $($(".hobbit")[1]);
function keepItSecretKeepItSafe(){
  frodo.append("<div id='the-ring' class='magic-imbued-jewelry'></div>");
}

keepItSecretKeepItSafe();

function makeBuddies(){
  rivendell.append("<aside></aside>")
  $("aside").append("<ul class='buddy-list'></ul>");
  for(i = 0; i < buddies.length; i++) {
      var newBuddy = $($(".buddy-list").append("<li class='buddy'> " + buddies[i] + " </li>"));
  }
};

makeBuddies();

function beautifulStranger(){
  var aragorn = $($(".buddy")[3]);
  aragorn.text("Aragorn");
};

beautifulStranger();

function leaveTheShire(){
  var hobbitList = $(".hobbits-list")
  rivendell.append(hobbitList);
};


leaveTheShire();

var fellowList = $("li");


function forgeTheFellowship() {
  rivendell.append("<div class='the-fellowship'></div>");
  for (i = 0; i < fellowList.length; i++) {
    $(".the-fellowship").append(fellowList[i]);
    alert(fellowList[i].innerText + " has joined the fellowship.")
  }
}


   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

forgeTheFellowship();

function theBalrog(){
  var gandalf = $($(".buddy")[0]);
    gandalf.text("Gandalf the White");
    gandalf.css("background-color", "white");
    gandalf.css("border", "thick solid grey");
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
}

theBalrog();

function hornOfGondor() {
  alert("The horn of Gondor has been blown!");
  var boromir = $($(".buddy")[4]);
  boromir.remove();
}


   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship}

hornOfGondor();

function itsDangerousToGoAlone() {
  mordor.append(frodo);
  mordor.append(sam);
  mordor.append("<div id='mount-doom'></div>")
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
}

itsDangerousToGoAlone();

var mountDoom = $("#mount-doom");
var theRing = $("#the-ring");

function weWantsIt() {
  mordor.append("<div id='gollum'></div");
  var gollum = $("#gollum");
  $("#gollum").append(theRing);
  mordor.append(mountDoom);
  mountDoom.append(gollum);

   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
}

weWantsIt();

function thereAndBackAgain(){
  $("#gollum").remove();
  var allHobbits = $(".hobbit");
  shire.append(allHobbits);
  // your answers here
}

thereAndBackAgain();
