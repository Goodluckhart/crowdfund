const toggleBtn = document.querySelector(".toggle")
const anchor = document.querySelector(".anchor")
const links = Array.from(document.querySelectorAll(".link"))
const action = document.querySelector("#btn")
const pledge = document.querySelector(".pledge")
const pledgeAbout = document.querySelector(".pledge .about")
const donate = document.querySelector("#donor-section")
const makePledge = document.querySelector(".make-pledge")
const input = document.querySelector(
    "input[type='number']"
    )
const pledegBtn = document.querySelector("#pledegBtn")
const preloader = document.querySelector(".preloader")
const thankYouMsg = document.querySelector(".thankYou-msg")
const gotIt = document.querySelector("#got-it")



window.addEventListener("scroll", function() {
    if(window.scrollY > 20){
        document.querySelector("header").classList.add("sticky")
        
    }else{
        document.querySelector("header").classList.remove("sticky")        
    }
    
})

// HAMBUGER MENU FUNCTION
toggleBtn.addEventListener("click", () => {
    anchor.classList.toggle("active")
    toggleBtn.classList.toggle("active")
})


// CLOSE MENU FUNCTION 
links.forEach(link => link.addEventListener("click", () => {
    anchor.classList.remove("active")
    toggleBtn.classList.remove("active")
}))


// FUNCTION TO REMOVE THE HIDE CLASS ON THE PLEGDE PLEDGE SECTION 
action.addEventListener("click", () => {
        pledge.classList.remove("hidden")
        pledgeAbout.classList.add("active")
})


// FUNCTION TO REMOVE THE BLUR EFFECT ON THE PLEGDE BUTTON 
input.addEventListener("input", () => {
   if(input.value.length > 0){
        pledegBtn.classList.remove("blur")
   }
   else{
        pledegBtn.classList.add("blur")
   }
})


// FUNCTION TO DISPLAY THE THANK YOU MSG 
pledegBtn.addEventListener("click", () => {
    if(input.value.length > 0){
        preloader.classList.remove("hide")
        pledgeAbout.setAttribute("class", "hidden")
        
        setTimeout(() => {
            preloader.classList.add("hide")
            thankYouMsg.classList.remove("hide")

        }, 2000)
    }
})


// FUNCTION TO SHOW THE MAKE PLEDGE SECTION
donate.addEventListener("click", () => {
    makePledge.classList.add("active")
})


// FUNCTION TO REMOVE THE PLEDGE SECTION
gotIt.addEventListener("click", () => {
    pledge.classList.add("hidden")
    thankYouMsg.classList.add("hide")

})