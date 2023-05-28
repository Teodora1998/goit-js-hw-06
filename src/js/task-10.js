function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = parseInt(document.querySelector("input").value);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Vă rugăm să introduceți un număr între 1 și 100.");
    return;
  }

  let boxSize = 30;
  let boxesHTML = "";

  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor();

    boxesHTML += `<div style="background-color: ${randomColor}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;

    boxSize += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
