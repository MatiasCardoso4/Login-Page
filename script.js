const form = document.querySelector("form");
const mail = document.getElementById("email");
const password = document.getElementById("password");
const email_error = document.querySelector(".email-error");
const password_error = document.querySelector(".password-error");
mail.addEventListener("input", () => {
  if (mail.validity.valid) {
    email_error.textContent = "";
    email_error.className = "error";
  } else {
    showEmailError();
  }
});

password.addEventListener("input", () => {
  if (password.validity.valid) {
    password_error.textContent = "";
    password_error.className = "error";
  } else {
    showPasswordError();
  }
});

form.addEventListener("submit", (e) => {
  if (!mail.validity.valid) {
    showEmailError();
    e.preventDefault();
  } else if (!password.validity.valid) {
    showPasswordError();
    e.preventDefault();
  }
});

function showEmailError() {
  if (mail.validity.typeMismatch) {
    email_error.textContent = "El valor ingresado debe ser un email";
  } else if (mail.validity.valueMissing) {
    email_error.textContent = "Debe ingresar un email valido";
  }

  email_error.className = "error active";
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    password_error.textContent = "Ingrese un password";
  } else if (password.validity.tooShort) {
    password_error.textContent = "Debe contenes al menos 6 caracteres";
  }
  password_error.className = "error active";
}
