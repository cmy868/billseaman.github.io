var x = document.getElementById("nav-top");

function hamburger() 
{ 
    if (x.className === "top-bar-section closed") {
      x.className += "open";
    } else {
      x.className = "top-bar-section closed";
    }
}

function windowChange(a) {
    if (a.matches) { // If media query matches
        x.className = "top-bar-section closed";
    } 
  }
  
  var a = window.matchMedia("(min-width: 1100px)")
  windowChange(a) // Call listener function at run time
  a.addListener(windowChange) // Attach listener function on state changes

// Order work list
var a = $('.work_child');
var b = $('.work_list');
var arr = [];
console.log(a,b);
Array.from(a).forEach(v => arr.push(v));
arr.reverse().forEach(v => b.append(v));
console.log(arr);

//top btn

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
      });

