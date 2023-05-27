const newsletter = document.querySelector(".newsletter"),
  successPopup = document.querySelector(".success-popup"),
  inputHolder = document.querySelector(".input-holder"),
  input = document.querySelector(".email-input"),
  submitBtn = document.getElementById("submit-btn"),
  dismissMsg = document.getElementById("dismiss-msg"),
  typedEmail = document.querySelector(".typed-email");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isEmail(input.value)) {
    showSuccess();
  } else {
    inValidEmail();
  }
});
dismissMsg.addEventListener("click", () => {
  window.location.reload();
});

function showSuccess() {
  newsletter.classList.add("hide");
  successPopup.classList.add("show");
  typedEmail.textContent = input.value;
}

function isEmail(emailAdress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function inValidEmail() {
  inputHolder.classList.add("invalid");
}
