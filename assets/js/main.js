// this is the starting point for this commentary,
// please add more steps
// there may be more steps and corrections to be made in future

//9/27/2022 Updates:
console.log("Amy, this is a test to see if the JavaScript is connected");
// need a collection of objects that hold the questions
// need to keep a count of the question that is displayed
// need to keep score
// need to keep the time


var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div"); //change the tag for this
var imgEl = document.createElement("img"); //change the tag for this
var kittenEl = document.createElement("div"); //change the tag for this
var nameEl = document.createElement("div"); //change the tag for this
var favoriteEl = document.createElement("div"); //change the tag for this


h1El.textContent = "Ready to find out how much you know about coding?";





function startTimer(){

}
function addQuestion(){
  // create the question elements

  // modify the text/attributes //Class 9/22/2022- Timeframe (01:34:19)
  //attributes are very important to how my page functions, to how things are applied to the page.
  // examples of attributes are : src= (source), alt=, <a href> (anchor tag)
  //When you set an attribute, you need the following:
  // 1. You need a tag on the left side, it can be a collection on the left side BUT if you use a collection, you have to use some kind of index [i], and then apply the attribute to it. Refer to timeframe (01:50:09). You can also use a direct variable to that tag. 
  // Set attributes ONLY works on nodes of the document. <-- Whatever the DOM (Document Object Model) refers to as a tag. Whenever it says "Node" think "tag".




  // modify one of the attributes to say right or wrong

  // append all elements to something on the page

  // for all the buttons, add event listener

    // WHEN I answer a question
    // if answered correctly
    // add points
    // show as correct
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // show as incorrect

    // after the answer, 
    // THEN I am presented with another question
    // need a function call to present the question

    // if no other questions,
    // go to highscore screen
}

function startQuiz(){
  // timer starts and I am presented with a question
  // need a function call to start the timer

  // need a function call to present the question
}

// eventListener here // when i click the start button

