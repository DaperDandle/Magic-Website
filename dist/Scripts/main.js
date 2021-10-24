// show and hide the hamburger menu
function showMenu () {
    // get elements from DOM
    var menu = document.getElementById("menu");
    menu.style.display = "flex";
    var hamburger = document.getElementById("hamburger");
    hamburger.style.display = "none";
    var nav = document.getElementById("nav");
    // create the x icon to close menu
    var ex = document.createElement("img");
    ex.src = "../Images/x_icon.png";
    // add function to x icon to close menu
    ex.onclick = function exitMenu() {
        menu.style.display = "none";
        // remove the x icon from nav
        nav.removeChild(ex);
        hamburger.style.display = "block";
    };
    // add x icon to nav
    nav.appendChild(ex);
}

// show the questionaire questions one at a time
function showQuestions(divId) {
    // hide all questions be default
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "none";
    // show the current question
    document.getElementById(divId).style.display = "flex";
}

// filter monthly events by search
function searchEvents() {
    // get elements from DOM
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("eventList");
    li = ul.getElementsByTagName("li");
    // loop through li collection
    for (i = 0; i < li.length; i++) {
      // get the anchor tag from each event
      a = li[i].getElementsByTagName("a")[0];
      // get text of event
      txtValue = a.textContent || a.innerText;
      // if the input is found in the event name show it with default style
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } 
      // if input is not found hide the event
      else {
          li[i].style.display = "none";
      }
  }
}

// functions for lightbox
var slideIndex = 1;

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// show the correct slide
function showSlides(n) {
  // get elements from DOM
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var thumbs = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  // make sure the slides don't go out of bounds
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // hide all slides by default
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // remove active class from each thumbnail image control
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active", "");
  }
  // display current slide slection
  slides[slideIndex-1].style.display = "block";
  // add the active class to the current thumbnail image control
  thumbs[slideIndex-1].className += " active";
  // display the correct caption
  captionText.innerHTML = thumbs[slideIndex-1].alt;
}

// function for store page accordion to show correct pane
function showPane(n) {
  // get panes from DOM in collection
  var panes = document.getElementsByClassName("accordionPane");
  var currPane = panes[n];
  // loop through panes and if they are displayed hide them
  for (var i = 0; i < panes.length; i++) {
    if (panes[i].style.display === "flex"){
      panes[i].style.display = "none";
    }
  }
  // show the current pane
  currPane.style.display = "flex";
}