//Get scroll top button
let mybutton = document.getElementById("btn-back-to-top");

//Get insta button
let instaButton = document.getElementById("insta-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {

  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    instaButton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    instaButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", backToTop);

// Title Box Padding Toggle
let titleBox = document.getElementById("title-box-collapsed");

function titleBoxPad() {
  if (
    titleBox.id === "title-box-collapsed"
  ) {
    titleBox.id = "title-box"
  } else {
    titleBox.id = "title-box-collapsed"
  }
}

document.getElementById("navbar-toggler-button").addEventListener("click", titleBoxPad);