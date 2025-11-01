


let scrollToTop = document.querySelector(".scroll-to-top")
scrollToTop.addEventListener("click" , function (){
    window.scrollTo(0, 0)
})


window.addEventListener("scroll", function(){
    console.log(window.scrollY);
if (window.scrollY >= 200){
scrollToTop.classList.add("show")
} else {
    scrollToTop.classList.remove("show")
}
})

let emailAddress = document.querySelector(".email-address")
let emailAlart = document.querySelector(".email-alert");
let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailAddress.addEventListener ("blur", function () {
    let value = emailAddress.value
    if (value == "") {
           emailAlart.innerHTML = "Email is Empty"
        emailAddress.classList.add("border", "border-danger")
    } else {

         emailAlart.innerHTML = ""
        emailAddress.classList.remove("border", "border-danger")
    }
        if (pattern.test(emailAddress.value)) {
        emailAlart.innerHTML = "valid email"
    } else {
        emailAlart.innerHTML = "invalid email"
    }
}) 