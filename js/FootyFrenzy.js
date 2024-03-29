////////////////FOR DARK MODE/////////////////
function changeColor() {
    let element = document.body;
    let isDarkMode = element.classList.contains ("dark");

   
    element.classList.toggle("dark");
    localStorage.setItem("darkMode", !isDarkMode);
}

document.addEventListener("DOMContentLoaded", function() {
    let element = document.body;
    let savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode === "true") {
        element.classList.add("dark");
    }
});
//////////////SLIDESHOW////////////

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}
//////////////////SLIDER//////////////
let secondsection = document.querySelector(".second-section");
      let firstsection = document.querySelector(".first-section");
      let slider = document.querySelector(".slider");
      let formSection = document.querySelector(".news-section");
      
      secondsection.addEventListener("click", () => {
        slider.classList.add("moveslider");
        formSection.classList.add("news-section-move");
      });
      
      firstsection.addEventListener("click", () => {
        slider.classList.remove("moveslider");
        formSection.classList.remove("news-section-move");
      });



/////////SIDEBAR//////////////

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-270px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-270px";
  }
}





////////TO TOP/////////

let mybutton = document.getElementById("myBtn");

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


////////CONTACT FORM////////////
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const messageEl = document.querySelector("#message");
const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}



////////////SEARCH BAR//////////
!function() {
  var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjBiYWU0MzMyY2ZkMWIzOTFjNTk5NCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTcwODYzMDY5OSwiZXhwIjoxNDMyMzAzMDY5OX0.IsUpLNMA89bA8zQTqkgK_aoA73kd7HUe8gRviAyw2Vc";
  function e() {
      var e = document.createElement("script"), a = navigator.language || navigator.userLanguage;
      e.type = "text/javascript", e.async = !0, e.src = "https://api.searchbar.org/v1/widget/" + t + "/" + a;
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(e, n);
  }
  "complete" === document.readyState ? e() : window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1);
}();


