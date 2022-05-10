// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//Initial value - SLIDER
document.documentElement.setAttribute('data-theme', 'light');

//COLORCHANGER - SLIDER
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchThemeWithSlide(e) {
    let currentColor = document.documentElement.getAttribute('data-theme');
    if (currentColor === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchThemeWithSlide, false);



//COLORCHANGER - TEXT
document.getElementById("colorslide").addEventListener('click', switchThemeWithText);
function switchThemeWithText(e) {
    let currentColor = document.documentElement.getAttribute('data-theme');
    if (currentColor === "light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
         localStorage.setItem('theme', 'dark');

    }
        
}

function myHide() {
    var x = document.getElementById("writeComment");
    var y = document.getElementById("buttoncreate")
    x.style.visibility = "visible";
    x.style.display = "block";

    y.style.visibility = "hidden";
    y.style.display = "none";
   
}


// VG-Delar

//Modal
var modal = document.getElementById("myModal");
var cllickablePTag = document.getElementById("newsAuthorName");
var span = document.getElementsByClassName("close")[0];


cllickablePTag.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}

//Scroll-effekt på artikel
function reveal() {
    var reveals = document.querySelectorAll(".scroll");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } 
    }
}

const box = document.querySelector('.box');
const result = isInViewport(box);