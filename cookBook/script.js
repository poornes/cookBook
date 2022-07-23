//scroll bar effect

Window.addEventListener('scroll',function(){
    var header = document.querySelector("header")
    header.classList.toggle(".sticky",Window.scrolly > 0)
})
