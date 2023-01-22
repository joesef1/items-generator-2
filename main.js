
// // Get the input element and the buttons
// const quantityInput = document.getElementById("quantity");
// const decreaseButton = document.getElementById("decrease-quantity");
// const increaseButton = document.getElementById("increase-quantity");

// // Add click event listeners to the buttons
// decreaseButton.addEventListener("click", function() {
//   // Decrement the quantity by 1
//   let quantity = parseInt(quantityInput.value);
//   if (quantity > 1) {
//     quantity--;
//     quantityInput.value = quantity;
//   }
// });

// increaseButton.addEventListener("click", function() {
//   // Increment the quantity by 1
//   let quantity = parseInt(quantityInput.value);
//   if (quantity < 100) {
//     quantity++;
//     quantityInput.value = quantity;
//   }
// });

// //

// const addButton = document.getElementById("add-button");
// addButton.addEventListener("click", function() {
//   // Get the selected item and quantity
//   const selectedItem = document.getElementById("items").value;
//   // document.querySelector('input[name="category"]:checked').value;
//   const selectedQuantity = document.getElementById("quantity").value;

//   // Create a new div to hold the added item
//   const newItemDiv = document.createElement("div");
//   newItemDiv.classList.add("added-item");

//   // Create a div for the item image
//   const itemImageDiv = document.createElement("div");
//   itemImageDiv.classList.add("item_image");
//   // Create an image element
//   const itemImage = document.createElement("img");
//   itemImage.setAttribute("src", "https://picsum.photos/200/300");
//   itemImageDiv.appendChild(itemImage);

//   // Create a div for the item name and price
//   const itemInfoDiv = document.createElement("div");
//   itemInfoDiv.classList.add("item_info");
//   // Create a div for the item name
//   const itemNameDiv = document.createElement("div");
//   itemNameDiv.classList.add("item_name");
//   itemNameDiv.innerText = selectedItem;
//   // Create a div for the item price
//   const itemPriceDiv = document.createElement("div");
//   itemPriceDiv.classList.add("item_price");
//   // Create an input field for the price and set its value to 0
//   const itemPrice = document.createElement("input");
//   itemPrice.value = "$0";
//   itemPriceDiv.innerText = "$";

//   itemPrice.setAttribute("type", "number");
//   itemPrice.classList.add("price-input");
//   itemPriceDiv.appendChild(itemPrice);
//   itemInfoDiv.appendChild(itemNameDiv);
//   itemInfoDiv.appendChild(itemPriceDiv);

//   // Create a div for the item quantity
//   const itemQuantityDiv = document.createElement("div");
//   itemQuantityDiv.classList.add("item_quantity");
//   // Create an input field for the quantity and set its value to the selected quantity
//   const itemQuantity = document.createElement("input");
//   itemQuantity.value = selectedQuantity;
//   itemQuantity.setAttribute("type", "number");
//   itemQuantity.setAttribute("min", "1");
//   itemQuantity.setAttribute("max", "100");
//   itemQuantity.classList.add("quantity-input");
//   itemQuantityDiv.appendChild(itemQuantity);

//   // Create a decrease button
//   const decreaseButton = document.createElement("button");
//   decreaseButton.innerText = "-";
//   decreaseButton.addEventListener("click", function() {
//     // Decrement the quantity by 1
//     let quantity = parseInt(itemQuantity.value);
//     if (quantity > 1) {
//       quantity--;
//       itemQuantity.value = quantity;
//     }
//   });

//   // Create an increase button
//   const increaseButton = document.createElement("button");
//   increaseButton.innerText = "+";
//   increaseButton.addEventListener("click", function() {
//     // Increment the quantity by 1
//     let quantity = parseInt(itemQuantity.value);
//     if (quantity < 100) {
//       quantity++;
//       itemQuantity.value = quantity;
//     }
//   });
//   itemQuantityDiv.appendChild(decreaseButton);
//   itemQuantityDiv.appendChild(increaseButton);

//   // Create a div for the checkbox and delete button
//   const itemActionsDiv = document.createElement("div");
//   // Create a checkbox
//   const itemCheckbox = document.createElement("input");
//   itemCheckbox.setAttribute("type", "checkbox");
//   itemCheckbox.classList.add("item-checkbox");
//   // Create a delete button
//   const deleteButton = document.createElement("button");
//   deleteButton.innerText = "Delete";
//   deleteButton.addEventListener("click", function() {
//     newItemDiv.remove();
//   });
//   itemActionsDiv.appendChild(deleteButton);
//   itemActionsDiv.appendChild(itemCheckbox);

//   // Append all the item's components to the main div
//   newItemDiv.appendChild(itemImageDiv);
//   newItemDiv.appendChild(itemInfoDiv);
//   // 

//   // 
//   newItemDiv.appendChild(itemQuantityDiv);
//   newItemDiv.appendChild(itemActionsDiv);

//   // Append the new div to the "addeditems" div
//   const addedItemsDiv = document.querySelector(".addeditems");
//   addedItemsDiv.appendChild(newItemDiv);

//   // Reset the select and quantity input values
//   document.getElementById("items").value = "Select an item";
//   document.getElementById("quantity").value = 1;
//   document.getElementById("price").value = 0;
// });

// // Create a div to hold the total price
// const totalPriceDiv = document.createElement("div");
// totalPriceDiv.classList.add("total_price");

// // Create a div for the total
// const totalDiv = document.createElement("div");
// totalDiv.classList.add("total");
// totalDiv.innerText = "total: $";

// // Create an input field for the total and set its value to 0
// const total = document.createElement("input");
// total.value = 0;
// total.setAttribute("type", "text");
// total.classList.add("total-input");
// totalDiv.appendChild(total);

// // Create a save button
// const saveButton = document.createElement("button");
// saveButton.innerText = "save";
// saveButton.addEventListener("click", function() {
//   // Calculate the total by multiplying the price by the quantity
//   // total.value = itemPrice.value * itemQuantity.value;
//   total.value = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);

// });

// // Append the total and save button to the total price div
// totalPriceDiv.appendChild(totalDiv);
// totalPriceDiv.appendChild(saveButton);

// // Append the total price div to the new item div
// newItemDiv.appendChild(totalPriceDiv);




var addButton = document.getElementById("add-button");
addButton.addEventListener("click", function() {
  var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
  // var quantity = document.querySelector(".quantity").value;
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


// 
document.querySelector(".addeditems").addEventListener("click", function(e){
  if (e.target && e.target.matches(".trash")) {
      e.target.parentNode.parentNode.parentNode.parentNode.remove();
  }
});



document.querySelector("input.price").addEventListener("change", function() {
  this.value = parseFloat(this.value).toFixed(2);
});

// document.querySelector('.select-box__input').disabled = true;
