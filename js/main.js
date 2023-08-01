// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener("load", function () {
  "use strict";
  console.log('The page has fully loaded');
});

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
var myBtn = window.document.getElementById("btnAddEmployee");

myBtn.addEventListener("click", function () {
  console.log("The button was clicked");
  // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
  window.open("add-employee.html", "addEmp", "width=400,height=300,resizable=yes");
});

