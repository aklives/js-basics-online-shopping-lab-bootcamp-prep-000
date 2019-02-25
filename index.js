var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
 
function addToCart(item) {
  var price = parseInt(Math.random() * 100);
  cart.push({itemName : item, itemPrice : price});
  return `${item} has been added to your cart.`;  
}

function viewCart() {
  var sentence_array = ['In your cart, you have'];
  for (var i = 0; i < cart.length; i++){
    sentence_array.pop(cart[i].itemName);
    sentence_array.pop(' at $');
    sentence_array.pop(cart[i].itemPrice);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
