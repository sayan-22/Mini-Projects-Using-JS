var a = document.querySelector("#card")
var b = document.querySelector("i")

a.addEventListener("dblclick",function(){
    b.style.transform = "translate(-50%, -50%) scale(1)"
    b.style.opacity = 0.7
    b.style.color = "red"
    setTimeout(function(){
        b.style.opacity = 0
    },1000)
    setTimeout(function(){
        b.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)

})