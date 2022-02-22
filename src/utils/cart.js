import { getLocalStorage, setLocalStorage } from "./index";

let cart = [];
console.log("Get Card line 4");
if (localStorage.getItem("cart")) {
  cart = getLocalStorage("cart");
}
export const addTocart = (newItem, next) => {
  // console.log("IN AddToCard: ", { newItem, next });

  const exitsItem = cart.find((item) => item.id === newItem.id);
  if (!exitsItem) {
    cart.push(newItem);
  } else {
    exitsItem.quantity += newItem.quantity;
  }
  setLocalStorage("cart", cart);
  next(cart.length);
};

export const increaseQuantity = (id, next) => {
  cart.find((item) => item.id === id).quantity++;
  setLocalStorage("cart", cart);
  next();
};
export const decreaseQuantity = (id, next) => {
  const currentProduct = cart.find((item) => item.id === id);
  currentProduct.quantity--;
  if (currentProduct.quantity < 1) {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirm) {
      cart = cart.filter((item) => item.id !== id);
    }
  }
  setLocalStorage("cart", cart);
  next();
};
export const removeItemInCart = (id, next) => {
  const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
  if (confirm) {
    cart = cart.filter((item) => item.id !== id);
  }
  setLocalStorage("cart", cart);
  next();
};

export const getProduct = (productId) => {
  if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
  }
  console.log("cart", cart);
  return cart.find((item) => item.id == productId);
};

export const getTotalPrice = () => {
  if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
  }
  let total = 0;
  cart.forEach((item) => {
    total += Number(item.price) * item.quantity;
  });
  return total;
};

export const getTotalItems = () => {
  if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
  }
  
  

  return cart.length;
};

export const updateQuantityItem = (selectorId, quantity) => {
  console.log("UpdateQuantityItem: ", selectorId, quantity);
  if (selectorId) {
    const cart = document.getElementById(selectorId);
    cart.textContent = quantity;
  }
};

export const refreshQuantityItem = (selectorId) => {
  if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
  }
  if (selectorId) {
    const cartIcon = document.getElementById(selectorId);
    cartIcon.textContent = cart.length;
  }
};
