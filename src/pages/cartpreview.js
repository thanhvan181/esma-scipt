import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { reRender } from "../utils";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemInCart,
  getTotalPrice,
} from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CartPreview = {
  async render() {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    return /* html */ `
    ${Header.render()}
    ${await Navbar.render()}
    
      
         <div class="py-4 container flex gap-3 items-center">
        <a href="index.html" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </a>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <p class="text-gray-600 font-medium uppercase">Shopping Cart</p>
    </div>
  
    <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
       
        <div class="xl:col-span-9 lg:col-span-8">
            
            <div class="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
                <p class="text-gray-600 text-center">Image</p>
                

                <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24 pl-32 ">Name</p>
                 
                <p class="text-gray-600 text-center pl-52 ">Quantity</p>
                 <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24 pl-32">Total</p>

                <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24 pr-12" >Custom</p>
            </div>
         
            <div class="space-y-4">
                 ${cart
                   .map(
                     (item) => `
                      <div
                    class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                   
                    <div class="w-32 flex-shrink-0">
                        <img src="${item.imageIntro}" class="w-full">
                    </div>
                   
                    <div class="md:w-1/3 w-full">
                        <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                           ${item.name}
                        </h2>
                        <p class="text-primary font-semibold">${item.price}</p>
                       
                    </div>
                   
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                        <button class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none btn btn-decrease" data-id="${
                          item.id
                        }">-</button>
                        <div class="h-8 w-10 flex items-center justify-center">${
                          item.quantity
                        }</div>
                        <button class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none btn btn-increase" data-id="${
                          item.id
                        }">+</button>
                    </div>
                    
                    <div class="ml-auto md:ml-0">
                        <p class="text-primary text-lg font-semibold">${
                          item.price * item.quantity
                        }</p>
                    </div>
                    <button class="text-gray-600 hover:text-primary cursor-pointer btn btn-remove" data-id="${
                      item.id
                    }">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                     
                
            `
                   )
                   .join("")}
                
               
               
                
            </div>
           
        </div>
      
        <div class="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div class="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                <div class="flex justify-between font-medium">
                    <p>Subtotal</p>
                    <p>${getTotalPrice()}</p>
                </div>
                <div class="flex justify-between">
                    <p>Delivery</p>
                    <p>Free</p>
                </div>
                <div class="flex justify-between">
                    <p>Tax</p>
                    <p>Free</p>
                </div>
            </div>
            <div class="flex justify-between my-3 text-gray-800 font-semibold uppercase">
                <h4>Total</h4>
                <h4>${getTotalPrice()}</h4>
            </div>

            
           
            <a href="/products/checkout" class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-primary transition text-sm w-full block text-center">
                Process to checkout
            </a>
           
        </div>
       
    </div>
    ${Footer.render()}

        

        `;
  },
  afterRender() {
      Navbar.afterRender()
    const btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        if (btn.classList.contains("btn-increase")) {
          increaseQuantity(id, () => {
            reRender(CartPreview, "#app");
            // toastr.success("Tăng số lượng thành công");
          });
        } else if (btn.classList.contains("btn-decrease")) {
          decreaseQuantity(id, () => {
            reRender(CartPreview, "#app");

            // toastr.success("Giảm số lượng thành công");
          });
        } else {
          removeItemInCart(id, () => {
            reRender(CartPreview, "#app");
            toastr.success("Xóa sản phẩm thành công");
          });
        }
      });
    });
  },
};
export default CartPreview;
