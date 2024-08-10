var a = document.querySelector("#bulb")
var b = document.querySelector("button")

var c = 0
var count = 0

b.addEventListener("click", function () {
    if (c == 0) {
        a.style.backgroundColor = "yellow"
        b.innerHTML = "on"
        c = 2
    }
    else {
        a.style.backgroundColor = "transparent"
        b.innerHTML = "off"
        c = 0
    }    
})
b.addEventListener("dblclick",function(){
    count = count + 1
    if(count>4){
        a.remove()
    }
})