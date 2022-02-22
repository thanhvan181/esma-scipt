import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getTotalPrice } from "../utils/cart";
import { getLocalStorage, setLocalStorage } from "../utils";

import { add } from "../api/orderAPI";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const CheckOutPage = {
  async render() {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    const user = getLocalStorage("user");
    return /* html */ `
    ${Header.render()}
    ${await Navbar.render()}


          <div class="py-4 container flex gap-3 items-center">
        <a href="index.html" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </a>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <p class="text-gray-600 font-medium uppercase">checkout</p>
    </div>
   
    <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        
        <div class="lg:col-span-8 border border-gray-200 px-4 py-4 rounded">
            <form action="" id="check-out">
               

                <div class="space-y-4">

                    <div>
                        <label class="text-gray-600 mb-2 block">
                           Name
                        </label>
                        <input id="name_order" class="resize rounded-md w-full" type="text" value=${
                          user && user.username ? user.username : ` `
                        }>
                    </div>
                   
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Address <span class="text-primary">*</span>
                        </label>
                        <input id="address" type="text" class="resize rounded-md w-full" value=${
                          user && user.address ? user.address : ` `
                        } >
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Phone <span class="text-primary">*</span>
                        </label>
                        <input id="phone"type="text" class="resize rounded-md w-full" value=${
                          user && user.phone ? user.phone : ` `
                        }>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Email 
                        </label>
                        <input id="email_order" type="text" class="resize rounded-md w-full" value=${
                          user && user.email ? user.email : ` `
                        }>
                    </div>
                    <div>
                        <label class="block mb-1 font-bold text-gray-500">Note</label>
                        <textarea class="resize rounded-md w-full" id="content-order"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="block mb-1 font-bold text-gray-500">Payment Method</label>
                        <div class="flex justify-start items-center gap-3">
                        <input type="radio" name="pay" value="payment on delivery" id="male" checked>
                        <label for="payment" class=" py-1 payment text-gray-800"> Payment on delivery
                        </label>
                        <input type="radio" name="pay" value="payment on card" id="famale" >
                        <label for="payment" class=" py-1 payment text-gray-800"> Payment by card
                        </div>
                    </div>
            
                   
                </div>
                <button class="add"></button>
            </form>
        </div>
      
        <div class="lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div class="space-y-2">
             <div class="grid  justify-between" v-for="n in 3" :key="n">
            ${cart
              .map(
                (checkout) =>
                  `
                <table>

                    <div  class="flex">
                      <div>
                      <img src="${checkout.imageIntro}" class="w-32 h-32 my-4" />
                      </div>

                      <div class="pl-12 my-4">
                     
                          <h5 class="text-gray-800 font-medium">${checkout.name}</h5>
                        
                     
                        <p class="text-gray-600">Quanlity: ${checkout.quantity}</p>
                        <p class="text-gray-800 font-medium"> Price: ${checkout.price}</p>
                        </div>
                    </div>
               
                
                </table>
          
                `
              )
              .join("")}
               
                 </div>
            </div>
            <div class="flex justify-between border-b border-gray-200 mt-1">
                <h4 class="text-gray-800 font-medium my-3 uppercase">Subtotal</h4>
                <h4 class="text-gray-800 font-medium my-3 uppercase">${getTotalPrice()}</h4>
            </div>
            <div class="flex justify-between border-b border-gray-200">
                <h4 class="text-gray-800 font-medium my-3 uppercase">Shipping</h4>
                <h4 class="text-gray-800 font-medium my-3 uppercase">Free</h4>
            </div>
            <div class="flex justify-between">
                <h4 class="text-gray-800 font-semibold my-3 uppercase">Total</h4>
                <h4 class="text-gray-800 font-semibold my-3 uppercase">${getTotalPrice()}</h4>
            </div>
            <div class="flex items-center mb-4 mt-2">
                <input type="checkbox" id="agreement"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
                <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">
                    Agree to our
                    <a href="#" class="text-primary">terms & conditions</a>
                </label>
            </div>

           
            <a href="/products/checkout/success" id="checkout" class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
         hover:text-primary transition text-sm w-full block text-center">
                Place order
            </a>
           
        </div>
       
    </div>
    ${Footer.render()}
        `;
  },
  afterRender() {
    Navbar.afterRender();
    const user = getLocalStorage("user");
     let cart = [];
     if (localStorage.getItem("cart")) {
       cart = JSON.parse(localStorage.getItem("cart"));
     }
    var date = new Date();
    const formCheckout = document.querySelector("#checkout");
    formCheckout.addEventListener("click", async (e) => {
      e.preventDefault();
      const checkOut = {
        id: Math.round(Math.random() * 700000),
        userId: user ? user.id : user,
        name: document.querySelector("#name_order").value,
        address: document.querySelector("#address").value,
        phone: document.querySelector("#phone").value,
        email: document.querySelector("#email_order").value,
        product: cart,
        note: document.querySelector("#content-order").value,
        day: date,
        totalMoney: getTotalPrice(),

        pay: document.querySelector("input[name=pay]:checked").value,
        status: "not approved yet",
      };
      // console.log("CheckOut", checkOut);
     
      add(checkOut);
      toastr.success("Order thanh cong");
      window.location.href = "/products/checkout/success";
        
    

  

   
    });
  },
};
export default CheckOutPage;
