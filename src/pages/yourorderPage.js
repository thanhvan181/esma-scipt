import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { list } from "../api/orderAPI";

const YourOrderPage = {
  async render() {
    const { data: yourorder } = await list();
    return /* html */ `
    ${Header.render()}
    ${await Navbar.render()}
    <div class="container flex items-center gap-3 py-4 mt-32">
    <a href="" class="text-primary text-base">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
    </a>
    
    <p class="font-medium text-gray-600">Your Order</p>
  </div>


     <table class="w-full border-b border-gray-200">
        <thead>
          <tr class="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td class="pl-10">
              <div class="flex items-center gap-x-4">
               
                <span>Image</span>
              </div>
            </td>
           
            <td class="py-4 px-4 text-center">NAME</td>
            
            <td class="py-4 px-4 text-center">QUANTITY</td>
            <td class="py-4 px-4 text-center">PRICE</td>
             <td class="py-4 px-4 text-center">CREATED_AT</td>
            <td class="py-4 px-4 text-center">TOTAL</td>
          
           
          </tr>
        </thead>
        <tbody>
        ${yourorder.map((item) => {
          return item.product.map((product) => {
            return /* html */ `

      <tr
            v-for="product in products"
            class="hover:bg-gray-100 transition-colors group"
          >
            <td class="flex gap-x-4 items-center py-4 pl-10">
             
              <img
                src="${product.imageIntro}"
                alt=""
                class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
              />
             
                
            </td>
            <td class="font-medium text-center">${item.name}</td>
            <td class="font-medium text-center">${product.quantity}</td>
            <td class="text-center">
              ${product.price}
            </td>
            <td class="font-medium text-center">
            ${item.day}
            </td>
              
           
              <td class="font-medium text-center">
             ${product.price * product.quantity}
            </td>
           
          </tr>
            `;
          }).join("");
        })}
    
           
        </tbody>
      </table>


    ${Footer.render()}


        `;
  },
  afterRender() {
    Navbar.afterRender();
  },
};
export default YourOrderPage;
