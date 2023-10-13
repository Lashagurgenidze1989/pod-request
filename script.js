const input = document.getElementsByClassName("email");
const button = document.getElementsByClassName("btn");
const error = document.getElementsByClassName("error");

function emailValidator(email) {
  let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailregex.test(email);
}

button.addEventListener("click", () => {
  const emailInput = input.value;

  if (emailValidator(emailInput)) {
    error.textContent = "";
  } else {
    error.textContent = "Oops! Please check your email";
  }
});
