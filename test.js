
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", function() {
  var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
  var quantity = document.querySelector("input.quantity").value;
  var addedItem = `<div class="addeditem">
        <div class="item_left_section">
        <div class="item_image">
        
          <img src="./img/Canva.png" alt="">
        </div>
        <div class="item_info">
          <div class="item_name">${selectedItem}</div>
          <div class="item_price"> <span class="dollar">$</span>
          <input class="price" name="price" min="0" value="0.00" type="number">
          </div>
        </div>
        </div>

        <div class="item_right_section">

        <div class="item_quantity">

        <div class="quantity">
        <div class="number-input">
      <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
      <input class="quantity" min="0" name="quantity" value="${quantity}" type="number">
      <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
    </div>
    </div>
        </div>
        <div class="bulk_actions">
          <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
          <div class="check_box">
          
          <input type="checkbox">
      
          </div>
        </div>
      </div>
      </div>
      `;
  var addedItems = document.querySelector(".addeditems");
  addedItems.innerHTML += addedItem;
});
var input = document.querySelector("input.quantity");
input.addEventListener("focus", function() {
  this.style.border = "none";
});
input.addEventListener("blur", function() {
  this.style.border = "border-width: 0 2px";
});
document.querySelector(".addeditems").addEventListener("click", function(e){
  if (e.target && e.target.matches(".trash")) {
      e.target.parentNode.parentNode.parentNode.parentNode.remove();
  }
});
document.querySelector("input.price").addEventListener("change", function() {
  this.value = parseFloat(this.value).toFixed(2);
});
var input = document.querySelector('.quantity');
input.addEventListener('focus', function() {
  this.style.border = 'none';
});



// Global variable to store the total price
let totalPrice = 0;

// Function to calculate the total price
function calculateTotalPrice() {
  totalPrice = 0;
  // Get all elements with class "addeditem"
  let addedItems = document.querySelectorAll(".addeditem");
  addedItems.forEach(function(item) {
    // Get the price and quantity of the current item
    let itemPrice = item.querySelector(".price").value;
    let itemQuantity = item.querySelector(".quantity").value;
    // Add the item's price * quantity to the total price
    totalPrice += itemPrice * itemQuantity;
  });
}

// Function to update the total price display
function updateTotalPriceDisplay() {
  // Get the element to display the total price
  let totalPriceDisplay = document.querySelector(".total_price_number");
  // Update the innerHTML of the element to display the total price
  totalPriceDisplay.innerHTML = totalPrice.toFixed(2);
}

// Add event listeners to update the total price when the "add-button" is clicked,
// when the "quantity" or "price" input fields are changed, and when the trash icon is clicked
addButton.addEventListener("click", function() {
  // Add the new item to the cart and calculate the total price
  // (same code as in your original script)
  // ...
  calculateTotalPrice();
  updateTotalPriceDisplay();
});

document.querySelector(".addeditems").addEventListener("click", function(e) {
  if (e.target && e.target.matches(".trash")) {
    e.target.parentNode.parentNode.parentNode.parentNode.remove();
    calculateTotalPrice();
    updateTotalPriceDisplay();
  }
});

document.querySelectorAll(".quantity").forEach(function(input) {
  input.addEventListener("change", function() {
    calculateTotalPrice();
    updateTotalPriceDisplay();
  });
});

document.querySelectorAll(".price").forEach(function(input) {
  input.addEventListener("change", function() {
    calculateTotalPrice();
    updateTotalPriceDisplay();
  });
});

