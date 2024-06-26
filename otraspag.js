var cartCountText = document.querySelector("#cart-count")
var signUpForm = document.querySelector(".email-sign-up")
var emailInput = document.querySelector("input")
var signUpBtn = document.querySelector("#sign-up")
var footer = document.querySelector("footer")
var truenoBtn = document.querySelector("#trueno-btn")
var racingBtn = document.querySelector("#racing-btn")
var racingblkBtn = document.querySelector("#racingblk-btn")
var jacketBtn = document.querySelector("#jacket-btn")
var coverallsBtn = document.querySelector("#coveralls-btn")
var shirtBtn = document.querySelector("#shirt-btn")

var count = 0

function addToCartHandler() {
  count = count + 1;
  if(count === 1) {
    cartCountText.textContent = "1"
  } else {
    cartCountText.textContent =
      count + " "
  }
}
    
function emailSubmitHandler() {
  var confirmationMsg = document.createElement("p") 
  confirmationMsg.textContent = "Thank you for your support! " + emailInput.value
  signUpForm.remove();
  footer.appendChild(confirmationMsg)
}
  
signUpBtn.addEventListener("click", emailSubmitHandler)
truenoBtn.addEventListener("click", addToCartHandler)
racingBtn.addEventListener("click", addToCartHandler)
racingblkBtn.addEventListener("click", addToCartHandler)
jacketBtn.addEventListener("click", addToCartHandler)
coverallsBtn.addEventListener("click", addToCartHandler)
shirtBtn.addEventListener("click", addToCartHandler)