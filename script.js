var cssInitial = document.querySelector("h4");
var cssCurent = document.querySelectorAll("h3")[1];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("btn");


// console.log(body);
// console.log(css);
// console.log(color1);
// console.log(color2);

function inputLenght(){
    return random.value.length;
 }

function setGradient(){
    body.style.background = "linear-gradient(to right , " + color1.value + " , " + color2.value + ")";
    cssCurent.textContent = body.style.background + ";";
}

function getGradient(){
    body.style.background = "linear-gradient(to right , " + color1.value + " , " + color2.value + ")";
    cssInitial.textContent = body.style.background + ";";
}

function getRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  
  function RandomColors() { 
    if (color1.value.length > 0) {
      color1.value = getRandomColor();
    }
    if (color2.value.length > 0) {
      color2.value = getRandomColor();
    }
    body.style.background = "linear-gradient(to right , " + color1.value + " , " + color2.value + ")";
    getGradient();
  }

random.addEventListener("click",RandomColors);
window.addEventListener("DOMContentLoaded",getGradient);
color1.addEventListener("input" ,setGradient);
color2.addEventListener("input" ,setGradient);

  // const name  = "john snow";

  // const obj = {
  //   [name] : "hello",
  //   [1 + 2]: "hihi"
  // }

  // const a = "badr";
  // const b = true;
  // const c = {};

  // const obj1 = {
  //   a,
  //   b,
  //   c
  // }

  