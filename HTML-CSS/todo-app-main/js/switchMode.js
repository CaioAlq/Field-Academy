"use strict"

let currentMode = "dark";
let styleMode = document.documentElement.style;
let iconMode = document.getElementById("icon-img");

function changeMode() {
    if(currentMode === "dark") {

        iconMode.src = "images/icon-moon.svg"

        styleMode.setProperty("--bg-url", "url('../images/bg-desktop-light.jpg')");
        styleMode.setProperty("--bg-url-mobile", "url('../images/bg-mobile-light.jpg')");

        styleMode.setProperty("--theme-color", "hsl(0, 0%, 98%)");
        styleMode.setProperty("--list-bg-color", "#fff");
        styleMode.setProperty(" --letter-color-default", "hsl(236, 9%, 61%)");
        styleMode.setProperty("--letter-color-new", "hsl(235, 19%, 35%)");
        styleMode.setProperty("--letter-color-done", "hsl(233, 11%, 84%)");

        currentMode = "light";
    } else {

        iconMode.src = "images/icon-sun.svg"

        styleMode.setProperty("--bg-url", "url('../images/bg-desktop-dark.jpg')");
        styleMode.setProperty("--bg-url-mobile", "url('../images/bg-mobile-dark.jpg')");

        styleMode.setProperty("--theme-color", "hsl(235, 21%, 11%)");
        styleMode.setProperty("--list-bg-color", "hsl(235, 24%, 19%)");
        styleMode.setProperty(" --letter-color-default", "hsl(236, 9%, 61%)");
        styleMode.setProperty("--letter-color-new", "hsl(233, 11%, 84%)");
        styleMode.setProperty("--letter-color-done", "hsl(233, 14%, 35%)");


        currentMode = "dark";
    }
}