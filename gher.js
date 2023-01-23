
// var addButton = document.getElementById("add-button");
// addButton.addEventListener("click", function() {
  // your existing code here
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


// 
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

  //
  var totalPrice = document.querySelector(".total_price_number");
  var quantity = document.querySelector("input.quantity").value;
  var price = document.querySelector("input.price").value;
  var itemTotalPrice = parseFloat(quantity) * parseFloat(price);
  totalPrice.innerHTML = "$" + itemTotalPrice.toFixed(2);
// });





////////////////////////////////////////////////////////////////









///////////////////////////////////////////////////////////////////////////////////////////////////////

// var totalPrice = 0;

// var addButton = document.getElementById("add-button");
// addButton.addEventListener("click", function() {
//   var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
//   var quantity = document.querySelector("input.quantity").value;

//   var addedItem = `<div class="addeditem">
//     <div class="item_left_section">
//     <div class="item_image">
//       <img src="./img/Canva.png" alt="">
//     </div>
//     <div class="item_info">
//       <div class="item_name">${selectedItem}</div>
//       <div class="item_price"> <span class="dollar">$</span>
//       <input class="price" name="price" min="0" value="1" type="number">
//       </div>
//     </div>
//     </div>
//     <div class="item_right_section">
//     <div class="item_quantity">
//     <div class="quantity">
//     <div class="number-input">
//     <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
//     <input class="quantity" min="0" name="quantity" value="${quantity}" type="number">
//     <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
//     </div>
//     </div>
//     </div>
//     <div class="bulk_actions">
//     <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
//     <div class="check_box">
//     <input type="checkbox">
//     </div>
//     </div>
//     </div>
//     </div>`;
//   var addedItems = document.querySelector(".addeditems");
//   addedItems.innerHTML += addedItem;

//   var itemPrice = document.querySelector("input.price").value;
//   var itemTotalPrice = itemPrice * quantity;
//   totalPrice += itemTotalPrice;
//   document.querySelector(".total_price_number").innerHTML = totalPrice;
// });

// document.querySelector(".addeditems").addEventListener("click", function(e){
//   if (e.target && e.target.matches(".trash")) {
//     var deletedItem = e.target.parentNode.parentNode.parentNode.parentNode;
//     var deletedItemQuantity = deletedItem.querySelector('.quantity').value;
//     var deletedItemPrice = deleted
//     Item.querySelector('.price').value;
//     var deletedItemTotalPrice = deletedItemQuantity * deletedItemPrice;
//     totalPrice -= deletedItemTotalPrice;
//     document.querySelector(".total_price_number").innerHTML = totalPrice;
//     deletedItem.remove();
//     }
//     });
    
//     var input = document.querySelector("input.quantity");
//     input.addEventListener("focus", function() {
//     this.style.border = "none";
//     });
    
//     input.addEventListener("blur", function() {
//     this.style.border = "border-width: 0 2px";
//     });
    
//     document.querySelector("input.price").addEventListener("change", function() {
//     this.value = parseFloat(this.value).toFixed(2);
//     });
    
//     // great also I want when I change the price of the quantity the total price automatically  change


//     document.querySelector(".total_price_number").innerHTML = totalPrice;






























//     var totalPrice = 0;

// var addButton = document.getElementById("add-button");
// addButton.addEventListener("click", function() {
//   var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
//   var quantity = document.querySelector("input.quantity").value;
//   var uniqueID = Math.random().toString(36).substring(2);

//   var addedItem = `<div class="addeditem">
//     <div class="item_left_section">
//     <div class="item_image">
//       <img src="./img/Canva.png" alt="">
//     </div>
//     <div class="item_info">
//       <div class="item_name">${selectedItem}</div>
//       <div class="item_price"> <span class="dollar">$</span>
//       <input class="price" id="${uniqueID}" name="price" min="0" value="1" type="number">
//       </div>
//     </div>
//     </div>
//     <div class="item_right_section">
//     <div class="item_quantity">
//     <div class="quantity">
//     <div class="number-input">
//     <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
//     <input class="quantity" min="0" name="quantity" value="${quantity}" type="number">
//     <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
//     </div>
//     </div>
//     </div>
//     <div class="bulk_actions">
//     <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
//     <div class="check_box">
//     <input type="checkbox">
//     </div>
//     </div>
//     </div>
//     </div>`;
//   var addedItems = document.querySelector(".addeditems");
//   addedItems.innerHTML += addedItem;

//   var itemPrice = document.querySelector(`input.price[id="${uniqueID}"]`).value;
//   var itemTotalPrice = itemPrice * quantity;
//   totalPrice += itemTotalPrice;

//       document.querySelector(".total_price_number").innerHTML = totalPrice;
//     });
  
//     document.querySelector(".addeditems").addEventListener("click", function(e){
//       if (e.target && e.target.matches(".trash")) {
//         var deletedItem = e.target.parentNode.parentNode.parentNode.parentNode;
//         var deletedItemQuantity = deletedItem.querySelector('.quantity').value;
//         var deletedItemPrice = deletedItem.querySelector('.price').value;
//         var deletedItemTotalPrice = deletedItemQuantity * deletedItemPrice;
//         if(!isNaN(deletedItemTotalPrice)){
//         totalPrice -= deletedItemTotalPrice;
//         document.querySelector(".total_price_number").innerHTML = totalPrice;
//         }
//         deletedItem.remove();
//         }
//     });
    


//     var input = document.querySelector("input.quantity");
//     input.addEventListener("focus", function() {
//       this.style.border = "none";
//     });
        
    

























// let totalPrice = 0;
// document.addEventListener("DOMContentLoaded", function() {
//     const addButton = document.getElementById("add-button");
//     const addedItemsContainer = document.querySelector(".addeditems");
//     const totalPriceSpan = document.querySelector(".total_price_number");
//     const input = document.querySelector("input.quantity");
//     input.addEventListener("focus", function() {
//         this.style.border = "none";
//         updateTotalPrice();
//     });
    
//     function updateTotalPrice(itemTotalPrice) {
//         if (isNaN(itemTotalPrice) || itemTotalPrice === 0) {
//             return;
//         }
//         totalPrice += itemTotalPrice;
//         totalPriceSpan.innerHTML = totalPrice;
//     }
//     function deleteItem(e) {
//       if (e.target && e.target.matches(".trash")) {
//           const deletedItem = e.target.closest('.addeditem');
//           const deletedItemQuantity = deletedItem.querySelector('.quantity').value;
//           const deletedItemPrice = deletedItem.querySelector('.price').value;
          
//           const deletedItemTotalPrice = deletedItemQuantity * deletedItemPrice;
//           if (!isNaN(deletedItemTotalPrice)) {
//               totalPrice -= deletedItemTotalPrice;
//               totalPriceSpan.innerHTML = totalPrice;
//               updateTotalPrice(-deletedItemTotalPrice);
//           }
//           deletedItem.remove();
//       }
//   }
//   addedItemsContainer.addEventListener("click", deleteItem);

  
// function updateItem(e) {
//   if (e.target && e.target.matches(".quantity,.price")) {
//       const itemRow = e.target.closest('.addeditem');
//       const oldQuantity = parseInt(itemRow.querySelector('.quantity').getAttribute('data-old-quantity')) || 0;
//       const oldPrice = parseFloat(itemRow.querySelector('.price').getAttribute('data-old-price')) || 0;
//       const newQuantity = parseInt(itemRow.querySelector('.quantity').value);
//       const newPrice = parseFloat(itemRow.querySelector('.price').value);
//       const oldTotalPrice = oldQuantity * oldPrice;
//       const newTotalPrice = newQuantity * newPrice;
//       updateTotalPrice(newTotalPrice - oldTotalPrice);
//       itemRow.querySelector('.quantity').setAttribute('data-old-quantity', newQuantity);
//       itemRow.querySelector('.price').setAttribute('data-old-price', newPrice);

//   }
//   const newQuantity = parseInt(itemRow.querySelector('.quantity').value);
// const newPrice = parseFloat(itemRow.querySelector('.price').value);
// if (isNaN(newQuantity) || isNaN(newPrice)) {
//     return;
// }
// }

//     function addItem() {
//         const selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
//         const quantity = document.querySelector("input.quantity").value;
//         if(!selectedItem || !quantity || isNaN(quantity)) {
//             return alert("Choose an item and enter a valid quantity before adding");
//         }
//         const uniqueID = Math.random().toString(36).substring(2);

//         const addedItem = `<div class="addeditem">
//             <div class="item_left_section">
//                 <div class="item_image">
//                     <img src="./img/Canva.png" alt="">
//                 </div>
//                 <div class="item_info">
//                     <div class="item_name">${selectedItem}</div>
//                     <div class="item_price"> <span class="dollar">$</span>
//                         <input class="price" id="${uniqueID}" name="price" min="0" value="1" type="number">
//                     </div>
//                 </div>
//             </div>
//             <div class="item_right_section">
//                 <div class="item_quantity">
//                     <div class="quantity">
//                         <div class="number-input">
//                             <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
//                             <input class="quantity" min="0" name="quantity" value="${quantity}" type="number">
//                             <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="bulk_actions">
//                     <div class="delete_button"> <i class=" trash fa-solid fa-trash"></i>
//                   </div>
//                     <div class="check_box">
//                         <input type="checkbox">
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//         addedItemsContainer.innerHTML += addedItem;

//         const itemPrice = document.querySelector(`input.price[id="${uniqueID}"]`).value;
//         const itemTotalPrice = itemPrice * quantity;
//         updateTotalPrice(itemTotalPrice);
//     }
//     addButton.addEventListener("click", function() {
//       addItem();
//       updateTotalPrice();
//   });

//   addedItemsContainer.addEventListener("click", deleteItem);

//     addedItemsContainer.addEventListener("input", function(e) {
//       updateItem(e);
//   });


//     const itemPriceInput = document.querySelector(`input.price[id="${uniqueID}"]`);
// const itemQuantityInput = addedItemsContainer.querySelector(`input.quantity[id="${uniqueID}"]`);
// itemPriceInput.addEventListener("input", updateItem);
// itemQuantityInput.addEventListener("input", updateItem);
// });

// const trashButtons = document.querySelectorAll('.trash');
// trashButtons.forEach(trashButton => trashButton.addEventListener("click", deleteItem));










