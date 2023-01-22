// // var addButton = document.getElementById("add-button");
// // addButton.addEventListener("click", function() {
// //   var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
// //   // var quantity = document.querySelector(".quantity").value;
// //   var quantity = document.querySelector("input.quantity").value;

// //   var addedItem = `<div class="addeditem">

// //         <div class="item_left_section">
// //         <div class="item_image">
        
// //           <img src="./img/Canva.png" alt="">
// //         </div>
// //         <div class="item_info">
// //           <div class="item_name">${selectedItem}</div>
// //           <div class="item_price"> <span class="dollar">$</span>
// //           <input class="price" name="price" min="0" value="0.00" type="number">
// //           </div>
// //         </div>
// //         </div>

// //         <div class="item_right_section">

// //         <div class="item_quantity">

// //         <div class="quantity">
// //         <div class="number-input">
// //       <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
// //       <input class="quantity" min="0" name="quantity" value="${quantity}" type="number">
// //       <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
// //     </div>
// //     </div>
      
// //         </div>

// //         <div class="bulk_actions">
// //           <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
// //           <div class="check_box">
          
// //           <input type="checkbox">
      
// //           </div>
// //         </div>
// //       </div>
// //       </div>
// //       `;
// //   var addedItems = document.querySelector(".addeditems");
// //   addedItems.innerHTML += addedItem;
// // });


// // var input = document.querySelector("input.quantity");
// // input.addEventListener("focus", function() {
// //   this.style.border = "none";
// // });

// // input.addEventListener("blur", function() {
// //   this.style.border = "border-width: 0 2px";
// // });


// // // 
// // document.querySelector(".addeditems").addEventListener("click", function(e){
// //   if (e.target && e.target.matches(".trash")) {
// //       e.target.parentNode.parentNode.parentNode.parentNode.remove();
// //   }
// // });

// // document.querySelector("input.price").addEventListener("change", function() {
// //   this.value = parseFloat(this.value).toFixed(2);
// // });

// // var input = document.querySelector('.quantity');
// // input.addEventListener('focus', function() {
// //   this.style.border = 'none';
// // });



// //total price
// var totalPrice = 0;

// //add item button click event
// var addButton = document.getElementById("add-button");
// addButton.addEventListener("click", function() {
//   //get selected item
//   var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
//   //get quantity
//   var quantity = document.querySelector("input.quantity").value;
//   //get item price
//   var itemPrice = document.querySelector("input.price").value;
//   //calculate item total price
//   var itemTotalPrice = itemPrice * quantity;
//   //add item total price to the total price
//   totalPrice += itemTotalPrice;
//   //update the total price element
//   document.querySelector(".total_price_number").innerHTML = totalPrice;
  
//   //create the added item element
//   var addedItem = `<div class="addeditem">
//         <div class="item_left_section">
//         <div class="item_image">
//           <img src="./img/Canva.png" alt="">
//         </div>
//         <div class="item_info">
//           <div class="item_name">${selectedItem}</div>
//           <div class="item_price"> <span class="dollar">$</span>
//           <input class="price" name="price" min="0" value="${itemPrice}" type="number">
//           </div>
//         </div>
//         </div>
//         <div class="item_right_section">
//         <div class="item_quantity">
//         <div class="quantity">
//         <div class="number-input">
//           <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
//           <input class="quantity" min="0" name="quantity" value="${quantity}" type="number">
//           <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
//         </div>
//         </div>
//         </div>
//         <div class="bulk_actions">
//           <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
//           <div class="check_box">
//            <input type="checkbox">
//           </div>
//         </div>
//       </div>
//       </div>
//       `;
//   //get the container for the added items
//   var addedItems = document.querySelector(".addeditems");
//   //add the added item element to the container
//   addedItems.innerHTML += addedItem;
// });

// //delete button click event
// document.querySelector(".addeditems").addEventListener("click", function(e){
//   if (e.target && e.target.matches(".trash")) {
//     //get the parent of the delete button (added item element)
//     var deletedItem = e.target.parentNode.parentNode.parentNode.parentNode;
//     //get the quantity of the deleted item
//     var deletedItemQuantity = deletedItem.querySelector('.quantity').value;
//     //get the price of the deleted item
//     var deletedItemPrice = deletedItem.querySelector('.price').value;
//     //calculate the total price of the deleted item
//     var deletedItemTotalPrice = deletedItemQuantity * deletedItemPrice;
//     //decrease the total price by the total price of the deleted item
//     totalPrice -= deletedItemTotalPrice;
//     //update the total price element
//     document.querySelector(".total_price_number").innerHTML = totalPrice;
//     //remove the added item element
//     deletedItem.remove();
//   }
// });

// //price input change event
// document.querySelector("input.price").addEventListener("change", function() {
//   this.value = parseFloat(this.value).toFixed(2);
// });

// //quantity input focus and blur events
// var input = document.querySelector('.quantity');
// input.addEventListener('focus', function() {
//   this.style.border = 'none';
// });
var totalPrice = 0;

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
      <input class="price" name="price" min="0" value="1" type="number">
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
    </div>`;
  var addedItems = document.querySelector(".addeditems");
  addedItems.innerHTML += addedItem;

  var itemPrice = document.querySelector("input.price").value;
  var itemTotalPrice = itemPrice * quantity;
  totalPrice += itemTotalPrice;
  document.querySelector(".total_price_number").innerHTML = totalPrice;
});

document.querySelector(".addeditems").addEventListener("click", function(e){
  if (e.target && e.target.matches(".trash")) {
    var deletedItem = e.target.parentNode.parentNode.parentNode.parentNode;
    var deletedItemQuantity = deletedItem.querySelector('.quantity').value;
    var deletedItemPrice = deleted
    Item.querySelector('.price').value;
    var deletedItemTotalPrice = deletedItemQuantity * deletedItemPrice;
    totalPrice -= deletedItemTotalPrice;
    document.querySelector(".total_price_number").innerHTML = totalPrice;
    deletedItem.remove();
    }
    });
    
    var input = document.querySelector("input.quantity");
    input.addEventListener("focus", function() {
    this.style.border = "none";
    });
    
    input.addEventListener("blur", function() {
    this.style.border = "border-width: 0 2px";
    });
    
    document.querySelector("input.price").addEventListener("change", function() {
    this.value = parseFloat(this.value).toFixed(2);
    });
    
    // great also I want when I change the price of the quantity the total price automatically  change
