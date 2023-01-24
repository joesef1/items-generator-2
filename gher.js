
// // var addButton = document.getElementById("add-button");
// // addButton.addEventListener("click", function() {
//   // your existing code here
// //   var addButton = document.getElementById("add-button");
// // addButton.addEventListener("click", function() {
// //   var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
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
// input.addEventListener('focus', function() {
//   this.style.border = 'none';
// });

//   //
//   var totalPrice = document.querySelector(".total_price_number");
//   var quantity = document.querySelector("input.quantity").value;
//   var price = document.querySelector("input.price").value;
//   var itemTotalPrice = parseFloat(quantity) * parseFloat(price);
//   totalPrice.innerHTML = "$" + itemTotalPrice.toFixed(2);
// // });





////////////////////////////////////////////////////////////////






//34.22


if (document.readyState == "loading") {
  document .addEventListener("DOMContentLoaded", ready);
  } else {
  ready();
}

function ready() {
  let removeitembuttons = document.getElementsByClassName('trash')
  console.log(removeitembuttons);
  for (let i = 0; i < removeitembuttons.length; i++) {
    const button = removeitembuttons[i];
    button.addEventListener('click', removeitem)
  }
}

function removeitem(event) {
  const buttonCliked =event.target
  buttonCliked.parentElement.remove()
}
