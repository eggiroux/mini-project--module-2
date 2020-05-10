const formElement = document.querySelector("#signupForm");
const submitBtn = document.querySelector("#submitBtn");
const errorSection = document.querySelector(".errorSection");
const passwordBox1 = document.querySelector("#password1");
const passwordBox2 = document.querySelector("#password2");
const termsCheckbox = document.querySelector("#terms-checkbox");
const clearBtn = document.querySelector(".clear");

let passwordData1 = "";
let passwordData2 = "";

formElement.addEventListener("submit", submitForm);
passwordBox1.addEventListener("blur", getData);
passwordBox2.addEventListener("blur", getData);
clearBtn.addEventListener("click", clearForm);

function submitForm() {
  event.preventDefault();
  clearErrors();
  if (!termsCheckbox.checked) {
    alert("You have to agree to the terms and conditions");
    return;
  }

  if (passwordData1 !== passwordData2) {
    showErrorMessage(
      "The passwords didn't match! Please provide the same password in each field"
    );
    passwordBox2.classList.add("error-input-outline");
    passwordBox2.focus();
    return;
  }

  if (passwordData1.length < 10) {
    showErrorMessage(
      `Your password is too short! How about a longer password, like ${createPassword(
        5
      )}`
    );
    passwordBox1;
    passwordBox1.classList.add("error-input-outline");
    passwordBox1.focus();
    return;
  }

  //when no errors have been hit, proceed!
  alert("You Signed up like a real pro!\nWelcome aboard!");
}

function getData() {
  passwordData2 = passwordBox2.value;
  passwordData1 = passwordBox1.value;
}

function showErrorMessage(errorString) {
  let errorBox = document.createElement("div");
  errorBox.innerHTML = errorString;
  errorBox.classList.add("error-box");
  errorSection.appendChild(errorBox);
}

function clearErrors() {
  let errors = document.querySelectorAll(".error-box");
  errors.forEach(function (item) {
    errorSection.removeChild(item);
  });

  if (passwordBox1.classList.length === 2) {
    passwordBox1.classList.remove("error-input-outline");
  }
  if (passwordBox2.classList.length === 2) {
    passwordBox2.classList.remove("error-input-outline");
  }
}

function clearForm() {
  let inputFields = document.querySelectorAll(".text-field");
  inputFields.forEach(function (field) {
    field.value = "";
  });
  termsCheckbox.checked = false;
  clearErrors();
}

function createPassword(num) {
  let password = "";
  for (let i = 0; i < num; i++) {
    randomIndex = Math.floor(Math.random() * Math.floor(wordArray.length));
    password += "-" + wordArray[randomIndex];
  }
  return password;
}
