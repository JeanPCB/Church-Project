//Get scroll top button
const backTopBtn = document.querySelector("#btn-back-top");

//Get insta button
const instaBtn = document.querySelector("#insta-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {

  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    backTopBtn.classList.replace("btn-back-top-hidden", "btn-back-top-show");
    instaBtn.classList.replace("insta-btn-hidden", "insta-btn-show");
  } else {
    backTopBtn.classList.replace("btn-back-top-show", "btn-back-top-hidden");
    instaBtn.classList.replace("insta-btn-show", "insta-btn-hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

backTopBtn.addEventListener("click", backToTop);

// Title Box Padding Toggle
const titleBox = document.querySelector("#title-box");

function titleBoxPad() {
  titleBox.classList.toggle("title-box-nav-show");
}

document.querySelector("#navbar-toggler-button").addEventListener("click", titleBoxPad);