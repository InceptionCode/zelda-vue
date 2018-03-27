import sass from "./src/sass/sample.sass";
import zeldaIcon from "./src/images/zelda-icon.jpg";

var sampleApp = document.querySelector("#sample-div"),
  img = document.createElement("img"),
  h1 = document.createElement("h1");

img.src = zeldaIcon;
h1.innerHTML = "Hey World";
sampleApp.appendChild(img);
sampleApp.appendChild(h1);

console.log("Loaded practice webpack");
