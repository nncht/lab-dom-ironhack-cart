// ITERATION 1

function updateSubtotal(product) {
  const price = parseInt(product.querySelector(".price span").innerText);
  const quantity = parseInt(product.querySelector(".quantity input").value);
  const subtotal = price * quantity;
  const subtotalValue = product.querySelector(".subtotal span");
  subtotalValue.innerText = subtotal;
  // subtotalValue.innerText = subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  let total = 0;
  products.forEach(function (product) {
    updateSubtotal(product);
    total += parseInt(product.querySelector(".subtotal span").innerText);
  });

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
