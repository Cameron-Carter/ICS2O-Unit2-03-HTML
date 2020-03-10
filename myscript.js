// JavaScript File
function changeBackground() {
  document.getElementById("body").style.backgroundColor="powderblue";
}
// function to make text appear
function newText() {
  document.getElementById("text").innerHTML="Cameron Carter";
}
function addBorder() {
  document.getElementById("body").style.borderStyle="solid";
}
function logNumbers() {
  console.log(2+2);
}    
// upon mouse going onto window, background of body with id changes colour
    window.addEventListener("mouseover", changeBackground);
    window.addEventListener("mouseout", newText);
    window.addEventListener("click", addBorder);
    window.addEventListener("click", logNumbers);