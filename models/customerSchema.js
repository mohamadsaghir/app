const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const userSchema = new Schema(
  {
    Name_Products: String,
    Quantity_price: Number,
    Texes: Number, // Assuming 'Texes' is correct and not a typo for 'Taxes'
    Discount: Number,
    State: String,
    Note: String,
    total: Number, // This will be calculated before saving
    today: String,
  },
  { timestamps: true }
);

// Pre-save middleware to calculate 'total'
userSchema.pre("save", function (next) {
  this.total = this.Quantity_price + this.Texes - this.Discount;
  next();
});
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

// Create a model based on that schema
const User = mongoose.model("customer", userSchema);

// export the model
module.exports = User;
