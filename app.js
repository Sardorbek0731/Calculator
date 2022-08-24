const rowItem = document.querySelectorAll(".row_item");
const clear = document.querySelector(".clear");
const numberInput = document.querySelector("#numberInput");

rowItem.forEach((item) => {
  item.addEventListener("click", () => {
    numberInput.value += item.value;
  });
});

clear.addEventListener("click", () => {
  numberInput.value = "";
});
