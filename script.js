const form = document.forms["form"];
const successMessage = document.querySelector(".success-message");

const fnameField = document.querySelector("#fname");
const lnameField = document.querySelector("#lname");
const emailField = document.querySelector("#email");
const queryTypeFields = document.querySelectorAll( 'input[name="query-type"]');
const messageField = document.querySelector("#message");
const checkboxField = document.querySelector("#terms");

const errormsg = document.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fnameValue = fnameField.value.trim();
  const lnameValue = lnameField.value.trim();
  const emailValue = emailField.value.trim();
  const messageValue = messageField.value.trim();
  const checkboxChecked = checkboxField.checked;


  let isValid = true;

  if (fnameValue === "") {
    isValid = false;

    document.querySelector("#fname +.error").style.display = "block";
    document.querySelector("#fname").style.border = "1px solid red ";
  } else {
    document.querySelector("#fname +.error").style.display = "none";
    document.querySelector("#fname").style.border = "1px solid grey";
  }

  if (lnameValue === "") {
    isValid = false;

    document.querySelector("#lname +.error").style.display = "block";
    document.querySelector("#lname").style.border = "1px solid red ";
  } else {
    document.querySelector("#lname +.error").style.display = "none";
    document.querySelector("#lname").style.border = "1px solid grey";
  }

  if (!validateEmail(emailValue ) ) {
    isValid = false;

    document.querySelector("#email +.error").style.display = "block";
    document.querySelector("#email").style.border = "1px solid red ";
  } else {
    document.querySelector("#email +.error").style.display = "none";
    document.querySelector("#email").style.border = "1px solid grey";
  }


  let isQuerySelected = false;
  queryTypeFields.forEach((field) => {
    if (field.checked) {
      isQuerySelected = true;
    }
  });
  if (!isQuerySelected ) {
    isValid = false;

    document.querySelector(".query-area +.error").style.display = "block";
  } else {
    document.querySelector(".query-area +.error").style.display = "none";
  }

  if (messageValue ==="" ) {
    isValid = false;

    document.querySelector("#message +.error").style.display = "block";
    document.querySelector("#message").style.border = "1px solid red ";
  } else {
    document.querySelector("#message +.error").style.display = "none";
    document.querySelector("#message").style.border = "1px solid grey";
  }
/*
  if (!checkboxChecked) {
    isValid = false;
    document.querySelector("#terms + .error").style.display = "block"; 
  } else {
    document.querySelector("#terms + .error").style.display = "none";
  }*/

  if(isValid){
    successMessage.style.display="block"
    form.reset();
  }
  

});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }