const input = document.querySelector(".email");
const button = document.querySelector(".btn");
const error = document.querySelector(".error");

function emailValidator(email) {
  let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailregex.test(email);
}

button.addEventListener("click", () => {
  const emailInput = input.value;

  if (emailValidator(emailInput)) {
    error.textContent = "Email Allowed";
    error.style.color = "#54e6af";
    input.value = "";
  } else {
    error.textContent = "Oops! Please check your email";
    error.style.color = "#fb3e3e;";
    input.value = "";
  }
});
