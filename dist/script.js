let hamburgerButton = document.getElementById("hamburger");
hamburgerButton.addEventListener("click", function () {
  console.log("Aku di klik");
  let smToogle = document.getElementById("navbarToogle");

  smToogle.classList.add("active");
  smToogle.classList.remove("close");
});

let closeHamburger = document.getElementById("closeButton");
closeHamburger.addEventListener("click", function () {
  let smToogle = document.getElementById("navbarToogle");

  smToogle.classList.add("close");
  smToogle.classList.remove("active");
});
