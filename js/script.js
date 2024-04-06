
// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateY(-200%)'){
    cartModalOverlay.style.transform = 'translateY(0)';
  } else {
    cartModalOverlay.style.transform = 'translateY(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateY(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateY(-200%)'
  }
})
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;

  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">  ${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  'Rs.' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}
// end of purchase items

//alert user if cart is empty

const sidebar = document.getElementById('sidebar');
const sidebarButtons = document.querySelectorAll('.navbar-1');
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

if (sidebarButtons) {
  sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}



// // open cart modal
// const cart = document.querySelector("#cart");
// const cartModalOverlay = document.querySelector(".cart-modal-overlay");

// cart.addEventListener("click", () => {
//   if (cartModalOverlay.style.transform === "translateX(-200%)") {
//     cartModalOverlay.style.transform = "translateX(0)";
//   } else {
//     cartModalOverlay.style.transform = "translateX(-200%)";
//   }
// });
// // end of open cart modal

// // close cart modal
// const closeBtn = document.querySelector("#close-btn");

// closeBtn.addEventListener("click", () => {
//   cartModalOverlay.style.transform = "translateX(-200%)";
// });

// cartModalOverlay.addEventListener("click", (e) => {
//   if (e.target.classList.contains("cart-modal-overlay")) {
//     cartModalOverlay.style.transform = "translateX(-200%)";
//   }
// });
// // end of close cart modal

// // add products to cart
// const addToCartButtons = document.querySelectorAll(".add-to-cart");

// addToCartButtons.forEach((button) => {
//   button.addEventListener("click", addToCartClicked);
// });

// function addToCartClicked(event) {
//   const button = event.target;
//   const cartItem = button.parentElement;
//   const price = cartItem.querySelector(".product-price").innerText;
//   const imageSrc = cartItem.querySelector(".product-image").src;
//   addItemToCart(price, imageSrc);
//   updateCartPrice();
// }

// function addItemToCart(price, imageSrc) {
//   const productRow = document.createElement("div");
//   productRow.classList.add("product-row");
//   const productRows = document.querySelector(".product-rows");

//   for (let cartImage of productRows.querySelectorAll(".cart-image")) {
//     if (cartImage.src === imageSrc) {
//       alert("This item has already been added to the cart");
//       return;
//     }
//   }

//   const cartRowItems = `
//   <div class="product-row">
//     <img class="cart-image" src="${imageSrc}" alt="">
//     <span class="cart-price">${price}</span>
//     <input class="product-quantity" type="number" value="1">
//     <button class="remove-btn">Remove</button>
//   </div>
//   `;
//   productRow.innerHTML = cartRowItems;
//   productRows.append(productRow);

//   productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
//   productRow
//     .querySelector(".product-quantity")
//     .addEventListener("change", changeQuantity);
// }

// // Remove products from cart
// function removeItem(event) {
//   const btnClicked = event.target;
//   btnClicked.parentElement.parentElement.remove();
//   updateCartPrice();
// }

// // Update quantity input
// const quantityInputs = document.querySelectorAll(".product-quantity");

// quantityInputs.forEach((input) => {
//   input.addEventListener("change", changeQuantity);
// });

// function changeQuantity(event) {
//   const input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updateCartPrice();
// }

// // Update total price and cart quantity
// function updateCartPrice() {
//   let total = 0;
//   const productRows = document.querySelectorAll(".product-row");
//   const uniqueProducts = {};

//   productRows.forEach((cartRow) => {
//     const priceElement = cartRow.querySelector(".cart-price");
//     const quantityElement = cartRow.querySelector(".product-quantity");
//     const price = parseFloat(priceElement.innerText.replace("$", ""));
//     const quantity = parseInt(quantityElement.value);
//     total += price * quantity;
//     const imageSrc = cartRow.querySelector(".cart-image").src;
//     uniqueProducts[imageSrc] = true;
//   });

//   const totalPriceElement = document.querySelector(".total-price");
//   totalPriceElement.innerText = "Rs." + total.toFixed(1);
//   const cartQuantityElement = document.querySelector(".cart-quantity");
//   cartQuantityElement.textContent = Object.keys(uniqueProducts).length;
// }

// function calculateTotalPrice() {
//   var total = 0;
//   var productRows = document.getElementsByClassName('product-row');

//   for (var i = 0; i < productRows.length; i++) {
//     var cartRow = productRows[i];
//     var priceElement = cartRow.getElementsByClassName('cart-price')[0];
//     var quantityElement = cartRow.getElementsByClassName('product-quantity')[0];
//     var priceText = priceElement.innerText.trim().replace('₹', ''); // Remove leading/trailing whitespace and currency symbol
//     var price = parseFloat(priceText); // Parse price value
//     var quantity = parseInt(quantityElement.value);

//     console.log('Price:', price);
//     console.log('Quantity:', quantity);

//     // Check if price and quantity are valid numbers
//     if (!isNaN(price) && !isNaN(quantity)) {
//       total += price * quantity; // Accumulate total price
//     } else {
//       console.error('Invalid price or quantity:', priceText, quantityElement.value); // Log error for debugging
//     }
//   }

//   console.log('Total before formatting:', total);

//   // Ensure total is formatted properly with 2 decimal places
//   var formattedTotal = total.toFixed(2);
//   console.log('Formatted total:', formattedTotal);

//   return '₹' + formattedTotal; // Return total price formatted with currency symbol
// }



// // purchase items
// const purchaseBtn = document.querySelector(".purchase-btn");
// purchaseBtn.addEventListener("click", purchaseBtnClicked);

// function purchaseBtnClicked() {
//   alert("Thank you for your purchase");
//   cartModalOverlay.style.transform = "translateX(-100%)";
//   const cartItems = document.querySelector(".product-rows");
//   while (cartItems.hasChildNodes()) {
//     cartItems.removeChild(cartItems.firstChild);
//   }
//   updateCartPrice();
// }
// // end of purchase items

// //alert user if cart is empty









