let counterValue = 0;

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterSpan = document.getElementById("value");

const incrementCounter = () => {
  counterValue++;
  counterSpan.textContent = counterValue;
};

const decrementCounter = () => {
  counterValue--;
  counterSpan.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);
