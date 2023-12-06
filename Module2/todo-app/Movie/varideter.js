let inpurUser = document.getElementById("username")
let inpurEmail = document.getElementById("email")
let inpurPass = document.getElementById("Password")
let inpurBtn = document.querySelector("button")
let arrayUser = []
const divElem = document.querySelector("div")


inpurBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    arrayUser.push(inpurUser.value)
    localStorage.setItem("inpurUser" , arrayUser)
    let userLocal = localStorage.getItem("inpurUser");
    if (!userLocal) {
        userLocal = ""
    }
    const userLocalArr = userLocal.split(",")
    for (let i = userLocalArr.length - 1; i < userLocalArr.length; i++) {
        const pElem = document.createElement("p")
        pElem.textContent = userLocalArr[i]
        divElem.appendChild(pElem)
    }
})





