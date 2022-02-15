import { getLocalStorage, setLocalStorage } from "./index";

let cart = [];
if(localStorage.getItem("cart")){
    cart = getLocalStorage("cart");

}
export const addTocart = (newItem, next) => {
    const exitsItem = cart.find((item) => item.id === newItem.id)
        if(!exitsItem){
            cart.push(newItem);

        }else{
            exitsItem.quantity++;
        }
        setLocalStorage("cart", cart);
        next();
};

