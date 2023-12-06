let input = document.getElementById("movie")
let supmit = document.querySelector("Button")

supmit.addEventListener("click", ()=>{
    // e.preventDefault()
    const pElement = document.querySelector("p")
    pElement.textContent = input.value
})