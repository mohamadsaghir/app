function getTotal() {
  const quantityPrice = parseFloat(
    document.getElementById("inputQuantity price").value
  );
  const texes = parseFloat(document.getElementById("inputAddress").value);
  const discount = parseFloat(document.getElementById("inputAddress2").value);
  const subtotal = quantityPrice + texes;
  const total = subtotal - discount;
  document.getElementById("total").textContent = `Total: ${total}`;
}
