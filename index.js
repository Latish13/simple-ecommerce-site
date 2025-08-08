// # Selecting required card for open product full description
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", function(){
    let id = card.dataset.id;
    window.location.href = `product-${id}.html`;
  })
});

// Responsive navbar code
let hamburger = document.querySelector("#hamburger");
let cross = document.querySelector("#cross");
let navbarLinks = document.querySelector(".navbar-links");
let navCont = document.querySelector(".navbar-container");

hamburger.addEventListener("click", function(){
  navbarLinks.classList.toggle("active");
  navCont.classList.toggle("active");
});

cross.addEventListener("click", function(){
  navbarLinks.classList.toggle("active");
  navCont.classList.toggle("active");
});