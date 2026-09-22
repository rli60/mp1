/* Your JS here. */
const header = document.querySelector('.nav-bar');

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("scrolled")
  }
  else {
    header.classList.remove("scrolled") 
  }
})

const about = document.querySelector('.nav-bar-contents a[href="#about"]')
const projects = document.querySelector('.nav-bar-contents a[href="#projects"]')
const experience = document.querySelector('.nav-bar-contents a[href="#experience"]')

window.addEventListener("scroll", () => {
  if (window.scrollY >= 290 && window.scrollY <= 700) {
    about.classList.add("hovered")
  }
  else {
    about.classList.remove("hovered")
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 700 && window.scrollY <= 1500) {
    projects.classList.add("hovered")
  }
  else {
    projects.classList.remove("hovered")
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 1500) {
    experience.classList.add("hovered")
  }
  else {
    experience.classList.remove("hovered")
  }
})

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}