var a = document.getElementById("btn")
var b = document.getElementById("btn1")
var c = document.querySelector("#card")

var flag = 0
a.addEventListener("click",function(){
    if(flag == 0){
        a.innerHTML = "unFriend"
        a.style.backgroundColor = "#cdd2da"
        a.style.color = "black"
        flag = 1
    }
    else
    {
        a.innerHTML = "Add Friend"
        a.style.backgroundColor = "#1877f2"
        a.style.color = "white"
        flag = 0
    }
})
b.addEventListener("click",function(){
    c.remove()
})
