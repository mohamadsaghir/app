// JavaScript file (one.js)
document.addEventListener("DOMContentLoaded", () => {
  let price = document.getElementById("Quantity_price");
  let texes = document.getElementById("Texes");
  let discount = document.getElementById("Discount");
  let total = document.getElementById("total");

  // get total
  function getTotal() {
    if (price.value !== "") {
      let result = +price.value + +texes.value - +discount.value;
      total.innerHTML = result;
      total.style.background = "#040";
    } else {
      total.innerHTML = "";
      total.style.background = "#a00d02";
    }
  }

  price.addEventListener("keyup", getTotal);
  texes.addEventListener("keyup", getTotal);
  discount.addEventListener("keyup", getTotal);
});
console.log("s");
