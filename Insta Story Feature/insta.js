var arr = [
    { dp: "https://images.unsplash.com/photo-1660304755794-a4c94ca4cceb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1667983090922-3a996b026a26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1532675432006-329c6fed7045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" },
    { dp: "https://images.unsplash.com/photo-1634469875582-a0885fc2f589?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1537065827051-e2a8ddd45fdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" },
    { dp: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1622262918009-6a39cd1fb49d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwbWFufGVufDB8fDB8fHww" },
    { dp: "https://plus.unsplash.com/premium_photo-1681503973152-0709046f96e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmFuY3klMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1635858395982-4f5d0a587f4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG5hbmN5JTIwc2luZ2VyfGVufDB8fDB8fHww" },
]

var b = document.querySelector("#storiyan")
var c = document.querySelector(".full-screen")
var a = ""

arr.forEach(function (elem, index) {
    a += ` <div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
</div>`
})

b.innerHTML=a
b.addEventListener("click",function(dets){
    c.style.backgroundImage = `url(${arr[dets.target.id].story})`
    c.style.display = "block"
    setTimeout(function(){
        c.style.display = "none"
    },3000)
})
