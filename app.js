const togglebtn = document.querySelector(".toggle")
const darktheme = document.querySelector(".two")
const tooltip = document.querySelector(".tooltip1")

function darkmode() {
    darktheme.classList.toggle("dark")
    togglebtn.classList.toggle("dark")
}

togglebtn.addEventListener("click",darkmode);