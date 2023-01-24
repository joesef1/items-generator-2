
let totalPrice = 0;

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-button");
    const addedItemsContainer = document.querySelector(".addeditems");
    const totalPriceSpan = document.querySelector(".total_price_number");
    
    function updateTotalPrice(itemTotalPrice) {
        totalPrice += itemTotalPrice;
        totalPriceSpan.innerHTML = totalPrice;
    }

    function deleteItem(e) {
        if (e.target && e.target.matches(".trash")) {
          
            const deletedItem = e.target.closest('.addeditem');
            const deletedItemQuantity = deletedItem.querySelector('.quantity').value;
            const deletedItemPrice = deletedItem.querySelector('.price').value;
            const deletedItemTotalPrice = deletedItemQuantity * deletedItemPrice;
            console.log(deletedItemQuantity);
            if (!isNaN(deletedItemTotalPrice)) {
                totalPrice -= deletedItemTotalPrice;
                totalPriceSpan.innerHTML = totalPrice;
                //  console.log(deletedItem);
            }
            deletedItem.remove();
        }
        
    }

    function addItem() {
        const selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
        const quantity = document.querySelector("input.quantity").value;
        if(!selectedItem || !quantity || isNaN(quantity)) {
            return alert("Choose an item and enter a valid quantity before adding");
        }
        const uniqueID = Math.random().toString(36).substring(2);

        const addedItem = `<div class="addeditem">
            <div class="item_left_section">
                <div class="item_image">
                    <img src="./img/Canva.png" alt="">
                </div>
                <div class="item_info">
                    <div class="item_name">${selectedItem}</div>
                    <div class="item_price"> <span class="dollar">$</span>
                        <input class="price" id="${uniqueID}" name="price" min="0" value="1" type="number">
                    </div>
                </div>
            </div>
            <div class="item_right_section">
                <div class="item_quantity">
                    <div class="quantity_container">
                        <div class="number-input">
                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
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
        addedItemsContainer.innerHTML += addedItem;

        const itemPrice = document.querySelector(`input.price[id="${uniqueID}"]`).value;
        const itemTotalPrice = itemPrice * quantity;
        updateTotalPrice(itemTotalPrice);

      
    }

    addButton.addEventListener("click", addItem);
    addedItemsContainer.addEventListener("click", deleteItem);
});


// const trash = document.getElementsByClassName("trash")[0]
// // trash.addEventListener("click",deleted)

// // function deleted() {
//   console.log(trash);
// // }



















// let totalPrice = 0;

// document.addEventListener("DOMContentLoaded", function() {
//     const addButton = document.getElementById("add-button");
//     const addedItemsContainer = document.querySelector(".addeditems");
//     const totalPriceSpan = document.querySelector(".total_price_number");
//     const input = document.querySelector("input.quantity");
//     input.addEventListener("focus", function() {
//         this.style.border = "none";
//     });
    
//     function updateTotalPrice(itemTotalPrice) {
//         totalPrice += itemTotalPrice;
//         totalPriceSpan.innerHTML = totalPrice;
//     }

//     function deleteItem(e) {
//         if (e.target && e.target.matches(".trash")) {
//             const deletedItem = e.target.closest('.addeditem');
//             const deletedItemQuantity = deletedItem.querySelector('.quantity').value;
//             const deletedItemPrice = deletedItem.querySelector('.price').value;
//             const deletedItemTotalPrice = deletedItemQuantity * deletedItemPrice;
//             if (!isNaN(deletedItemTotalPrice)) {
//                 totalPrice -= deletedItemTotalPrice;
//                 totalPriceSpan.innerHTML = totalPrice;
//             }
//             deletedItem.remove();
//         }
//     }


// // 
// // function updateItem(e) {
// //   if (e.target && e.target.matches(".quantity,.price")) {
// //       const itemRow = e.target.closest('.addeditem');
// //       const oldQuantity = parseInt(itemRow.querySelector('.quantity').getAttribute('data-old-quantity')) || 0;
// //       const oldPrice = parseFloat(itemRow.querySelector('.price').getAttribute('data-old-price')) || 0;
// //       const newQuantity = parseInt(itemRow.querySelector('.quantity').value);
// //       const newPrice = parseFloat(itemRow.querySelector('.price').value);
// //       const oldTotalPrice = oldQuantity * oldPrice;
// //       const newTotalPrice = newQuantity * newPrice;
// //       updateTotalPrice(newTotalPrice - oldTotalPrice);
// //       itemRow.querySelector('.quantity').setAttribute('data-old-quantity', newQuantity);
// //       itemRow.querySelector('.price').setAttribute('data-old-price', newPrice);
// //   }
// // }
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
//       itemRow.querySelector('.price').setattribute('data-old-price', newPrice);
//   }
// }



// // 


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
//                     <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
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

//     // addButton.addEventListener("click", addItem);
//     addButton.addEventListener("click", function() {
//       addItem();
//       updateTotalPrice();
//   });

//     // addedItemsContainer.addEventListener("click", deleteItem);
//     addedItemsContainer.addEventListener("click", function(e) {
//       deleteItem(e);
//   });
//     addedItemsContainer.addEventListener("input", function(e) {
//       updateItem(e);
//   });

//     // 
//     const itemPriceInput = document.querySelector(`input.price[id="${uniqueID}"]`);
// const itemQuantityInput = addedItemsContainer.querySelector(`input.quantity[id="${uniqueID}"]`);
// itemPriceInput.addEventListener("input", updateItem);
// itemQuantityInput.addEventListener("input", updateItem);

//     // 
// });




















// // Add a click event listener to the add button
// document.getElementById("add-button").addEventListener("click", function() {
//   // Get the selected item, quantity and price
//   var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
//   // // var quantity = document.querySelector("input.quantity")
//   // var price = document.getElementsByClassName("price").value
  
//   // Add the new item to the cart
//   var addedItem = `<div class="addeditem">
//         <div class="item_left_section">
//         <div class="item_image">
        
//           <img src="./img/Canva.png" alt="">
//         </div>
//         <div class="item_info">
//           <div class="item_name">${selectedItem}</div>
//           <div class="item_price"> <span class="dollar">$</span>
//           <input class="price" name="price" min="0" value="0.00" type="number">

//           </div>
//         </div>
//         </div>
//         <div class="item_right_section">
//         <div class="item_quantity">
//         <div class="quantity">
//         <div class="number-input">
//       <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
//       <input class="quantity" min="0" name="quantity" value="0.00" type="number">
//       <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
//     </div>
//     </div>
//         </div>
//         <div class="bulk_actions">
//           <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
//           <div class="check_box">
          
//           <input type="checkbox">
      
//           </div>
//         </div>
//       </div>
//       </div>
//       `;
//   var addedItems = document.querySelector(".addeditems");
//   addedItems.innerHTML += addedItem;
  
//   // Update the total price and quantity
//   updateTotal();
// });
// // Add a change event listener to the price and quantity input fields
// document.querySelector(".addeditems").addEventListener("input", function(e) {
//   if (e.target && (e.target.matches(".price") || e.target.matches(".quantity"))) {
//     updateTotal();
//   }
// });


// function updateTotal() {
// // var quantity = document.querySelectorAll("input.quantity").value
// // var price = document.getElementsByClassName("price").value
// //   // // Get the prices and quantities of all items in the cart
// //   const prices = document.querySelectorAll('.price');
// //   const quantities = document.querySelectorAll('.quantity');

// //   // Use the reduce method to sum up all the prices and quantities
// //   const totalPrice = _.reduce(prices, (sum, price) => {
// //     return sum + parseFloat(price.value);
// //   }, 0);

// //   const totalQuantity = _.reduce(quantities, (sum, quantity) => {
// //     return sum + parseFloat(quantity.value);
// //   }, 0);

// //   // // Update the total price and quantity on the page
// //   // document.querySelector('.total-price').innerHTML = totalPrice;
// //   // document.querySelector('.total-quantity').innerHTML = totalQuantity;
//   console.log( quantity);
// }


// var addButton = document.getElementById("add-button");
// addButton.addEventListener("click", function() {
//   var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
//   var quantity = document.querySelector("input.quantity").value;
//   var addedItem = `<div class="addeditem">
//         <div class="item_left_section">
//         <div class="item_image">
        
//           <img src="./img/Canva.png" alt="">
//         </div>
//         <div class="item_info">
//           <div class="item_name">${selectedItem}</div>
//           <div class="item_price"> <span class="dollar">$</span>
//           <input class="price" name="price" min="0" value="0.00" type="number">
//           </div>
//         </div>
//         </div>

//         <div class="item_right_section">

//         <div class="item_quantity">

//         <div class="quantity">
//         <div class="number-input">
//       <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
//       <input class="quantity" min="0" name="quantity" value="${quantity}" type="number">
//       <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
//     </div>
//     </div>
//         </div>
//         <div class="bulk_actions">
//           <div class="delete_button"><i class=" trash fa-solid fa-trash"></i></div>
//           <div class="check_box">
          
//           <input type="checkbox">
      
//           </div>
//         </div>
//       </div>
//       </div>
//       `;
//   var addedItems = document.querySelector(".addeditems");
//   addedItems.innerHTML += addedItem;
// });

// document.querySelector(".addeditems").addEventListener("click", function(e){
//   if (e.target && e.target.matches(".trash")) {
//       e.target.parentNode.parentNode.parentNode.parentNode.remove();
//   }
// });
// document.querySelector("input.price").addEventListener("change", function() {
//   this.value = parseFloat(this.value).toFixed(2);
// });
