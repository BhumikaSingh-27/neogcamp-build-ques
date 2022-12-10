const passwordInput = document.querySelector("#input-password");
const submitButton = document.querySelector("#check");
const output = document.querySelector("#output");

function clickHandler() {
  //   console.log(passwordInput.value);
  const inputPassword = passwordInput.value;
  //   console.log(typeof inputPassword);
  if (inputPassword.length < 10) {
    output.innerText = "Error! Password is too short";
    output.style.color = "red";
  } else {
    output.innerText = "Success";
    output.style.color = "green";
  }
}
submitButton.addEventListener("click", clickHandler);
