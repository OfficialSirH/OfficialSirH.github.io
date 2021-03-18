document.addEventListener("click", showCoords);
function showCoords(event){
  
    document.getElementById("coords").textContent =
    "mouseX: " + event.clientX +
    " - mouseY: " + event.clientY;
  
}