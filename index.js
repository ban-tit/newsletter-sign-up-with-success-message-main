//
const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".error-message");
const messageTag = document.querySelector(".message");

form.addEventListener("submit", function (e) {
  // Check if email is empty or invalid
  if (!emailInput.value.trim() || !emailInput.checkValidity()) {
    errorMsg.style.display = "block";
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor = "#ffe6e6";
    e.preventDefault();
    return;
  } else {
    errorMsg.style.display = "none";
    emailInput.style.borderColor = "";
    emailInput.style.backgroundColor = "";
  }
  // Show success card if valid
  e.preventDefault();
  card_1.classList.add("hide");
  card_2.classList.remove("hide");

  messageTag.innerHTML = `
    ${emailInput.value}`;
});
