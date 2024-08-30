const billButton = document.querySelector(".bill-button");
const billInput = document.querySelector("#Bill");
const tipButton = document.querySelectorAll(".button");
const customTip = document.querySelector(".custom-Tip");
const peopleInput = document.querySelector("#people-no");
const tipAmount = document.querySelector(".amount-detail span");
const totalAmount = document.querySelector(".total-amount");
const eachPersonBill = document.querySelector(".person-bill");
const currency = document.querySelector(".rupee");
const parentButton = document.querySelector(".buttons");
const resetButton = document.querySelector(".reset-button");

let tipPercentage = 0;

billButton.addEventListener("click", () => {
  if (parentButton.classList.contains("disabled")) return;
  const billValue = parseInt(billInput.value);
  const peopleValue = parseInt(peopleInput.value);

  tipAmount.innerText = `₹${tipPercentage}`;
  totalAmount.innerText = `₹${billValue + tipPercentage}`;
  eachPersonBill.innerText = `₹ ${(billValue + tipPercentage) / peopleValue}`;
  resetButton.disabled = false;
});

parentButton.addEventListener("click", (e) => {
  if (e.target !== parentButton) {
    [...parentButton.children].forEach((tip) =>
      tip.classList.remove("selected")
    );
    e.target.classList.add("selected");
  }
  tipPercentage = parseInt(e.target.innerText);
  customTip.value = "";

  if (peopleInput.value && tipPercentage) {
    billButton.disabled = false;
  } else {
    billButton.disabled = true;
  }
});

customTip.addEventListener("input", () => {
  tipPercentage = parseInt(customTip.value);
  [...parentButton.children].forEach((tip) => tip.classList.remove("selected"));

  if (peopleInput.value && tipPercentage) {
    billButton.disabled = false;
  } else {
    billButton.disabled = true;
  }
});

billInput.addEventListener("input", () => {
  if (billInput.value) {
    customTip.disabled = false;
    peopleInput.disabled = false;
    parentButton.classList.remove("disabled");
  } else {
    customTip.disabled = true;
    peopleInput.disabled = true;
    parentButton.classList.add("disabled");
  }
});

resetButton.addEventListener("click", (e) => {
  tipPercentage = 0;
  tipAmount.innerText = "";
  totalAmount.innerText = "";
  eachPersonBill.innerText = "";
  peopleInput.value = "";
  billInput.value = "";
  customTip.value = "";
  [...parentButton.children].forEach((tip) => tip.classList.remove("selected"));
  resetButton.disabled = true;
  billButton.disabled = true;
  customTip.disabled = true;
  peopleInput.disabled = true;
  parentButton.classList.add("disabled");
});

peopleInput.addEventListener("input", () => {
  if (peopleInput.value && tipPercentage) {
    billButton.disabled = false;
  } else {
    billButton.disabled = true;
  }
});
