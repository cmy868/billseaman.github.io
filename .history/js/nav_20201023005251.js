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

var a = document.getElementsByClassName("work_child");
var b = document.getElementsByClassName("work_list");
var arr = [];
console.log(a,b);
Array.from(a).forEach(v => arr.push(v));
arr.reverse().forEach(v => b.append(v));
console.log(arr);




