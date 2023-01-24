
// Add a click event listener to the add button
document.getElementById("add-button").addEventListener("click", function() {
  var selectedItem = document.querySelector("input[name='Ben']:checked").nextElementSibling.innerHTML;
  // var quantity = document.querySelector("input.quantity").value;
  // var price = document.querySelector("input.price").value;
  
  // Add the new item to the cart
  var addedItem = `<div class="addeditem">
        <div class="item_left_section">
        <div class="item_image">
        
          <img src="./img/Canva.png" alt="">
        </div>
        <div class="item_info">
          <div class="item_name">${selectedItem}</div>
          <div class="item_price"> <span class="dollar">$</span>
          <input class="price" name="price" min="0" value="1.00" type="number">

          </div>
        </div>
        </div>
        <div class="item_right_section">
        <div class="item_quantity">
        <div class="quantity">
        <div class="number-input">
      <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" ></button>
      <input class="quantity" min="0" name="quantity" value="1" type="number">
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
  
  // Update the total price and quantity
  updateTotal();
});
// Add a change event listener to the price and quantity input fields
// document.querySelector(".addeditems").addEventListener("input", function(e) {
//   if (e.target && (e.target.matches(".price") || e.target.matches(".quantity"))) {
//     updateTotal();
//   }
// });


function updateTotal() {

  // // Get the prices and quantities of all items in the cart
  // const prices = document.querySelectorAll('.price');
  // const quantities = document.querySelectorAll('.quantity');

  // // Use the reduce method to sum up all the prices and quantities
  // const totalPrice = _.reduce(prices, (sum, price) => {
  //   return sum + parseFloat(price.value);
  // }, 0);

  // const totalQuantity = _.reduce(quantities, (sum, quantity) => {
  //   return sum + parseFloat(quantity.value);
  // }, 0);

  // // Update the total price and quantity on the page
  // document.querySelector('.total-price').innerHTML = totalPrice;
  // document.querySelector('.total-quantity').innerHTML = totalQuantity;











  const prices = document.getElementsByClassName('price')[0].value;
  const quantities = document.getElementsByClassName('quantity_input').value;

  // Use the reduce method to sum up all the prices and quantities
// const totalPrice = _.reduce(prices, (sum, price) => {
//   return sum + parseFloat(price);
// }, 0);

// const totalQuantity = _.reduce(quantities, (sum, quantity) => {
//   return sum + parseInt(quantity.value);
// }, 0);

  // console.log(prices);
  // console.log(quantities);
  // console.log(totalPrice);
  // console.log(totalQuantity);
  // let allprice= [...prices, prices]
  // console.log(allprice);






// price
  const pricesArray = Array.from(document.getElementsByClassName('price')).map(price => price.value);

const updatedPricesArray = [...pricesArray, prices];
console.log(updatedPricesArray);



const totalPriceForItems = updatedPricesArray.reduce((sum, price) => {
  return sum + parseFloat(price);
}, 0);
// console.log(totalPriceForItems);
// //quantity

const quantityArray = Array.from(document.getElementsByClassName('quantity_input')).map(quantity => quantity.value);

const updatedquantityArray = [...quantityArray ];
// console.log(updatedquantityArray);



// // const totalquantityForItems = updatedquantityArray.reduce((sum, quantity) => {
// //   return sum + parseFloat(quantity);
// // }, 0);
// console.log(totalquantityForItems);

// //quantity

// const quantityArray = Array.from(document.getElementsByClassName('quantity_input')).map(quantity => quantity.value);
// // 
// const updatedquantityArray = [...quantityArray, quantities];
// console.log(updatedquantityArray);


// const currentquantity =[]
// currentquantity.push(quantities)
// console.log(currentquantity);

// const totalQuantity = quantityArray.reduce((acc, cur) => {
//   return acc + parseFloat(cur);
// }, 0);
// console.log(totalQuantity);

}

document.querySelector(".addeditems").addEventListener("click", function(e){
  if (e.target && e.target.matches(".trash")) {
      e.target.parentNode.parentNode.parentNode.parentNode.remove();
  }
});