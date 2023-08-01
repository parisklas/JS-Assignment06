// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", function () {
  "use strict";
  console.log('The page has fully loaded');
});

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
var width = 800;
var height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(((window.screen.width - width) / 2) , ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
var $ = function (selector) {
  return document.querySelector(selector);
};
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
var cancelBtn = window.document.getElementById("cancel");

cancelBtn.addEventListener("click", function () {
  console.log("Cancelled");
  window.close();
});

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
let empForm = document.getElementById("empForm");
empForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
});

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
var id = document.getElementById("id").value;
var name = document.getElementById("name").value;
var ext = document.getElementById("extension").value;
var email = document.getElementById("email").value;
var dept = document.getElementById("department").value;

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
window.addEventListener('load', () => {
  let parentoutput = window.opener.document.getElementById("loginDetails");
  parentoutput.innerHTML = id;
  parentoutput.innerHTML = (`${name}`);

})


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE