var b = document.querySelectorAll("#elem")


b.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        e.childNodes[3].style.opacity = 1
    })
    e.addEventListener("mouseleave", function () {
        e.childNodes[3].style.opacity = 0
    })
    e.addEventListener("mousemove", function (s) {
        e.childNodes[3].style.left = s.x + "px"
    })
})

