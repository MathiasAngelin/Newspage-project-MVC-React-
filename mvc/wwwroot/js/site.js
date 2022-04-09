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

document.getElementById("writecommentbutton").onclick = toggleText;

function toggleText(e) {
    document.getElementById("writeComment").style.visibility = "visible";
    document.getElementById("writeComment").style.display = "inline";
    
}
//Getpinned
