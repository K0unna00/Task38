let box = document.getElementById("box")
document.addEventListener("click" , e=>{

    box.classList.remove("d-none")
    box.style.left=e.clientX - box.offsetWidth/2+"px";
    box.style.top = e.clientY - box.offsetHeight/2+ "px";
})