var a = document.querySelector("#main")
var b = document.querySelector(".center-point")

a.addEventListener("mousemove",function(sayan){
    b.style.top = sayan.x + "px"
    b.style.right = sayan.y + "px"
})