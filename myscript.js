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
// when mouse moves again, new text is displayed
window.addEventListener("mouseout", newText);
// when button is clicked, a border is added to the body
window.addEventListener("click", addBorder);
// when button is clicked, console logs 2+2, making it display 4
window.addEventListener("click", logNumbers);