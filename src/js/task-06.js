const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputLength = validationInput.value.length;
  const expectedLength = parseInt(validationInput.dataset.length);

  if (inputLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
