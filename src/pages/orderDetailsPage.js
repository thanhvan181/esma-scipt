import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getOrder } from "../api/orderAPI";

const OrderDetailPage = {
  async render(id) {
    const { data } = await getOrder(id);
    console.log("DAta", data)

    return /* html */ `
  
       ${Header.render()}
          ${await Navbar.render()}
         
        <div class="w-4/5 m-auto p-32">
         <a href="/" class="text-primary text-base ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
          </a>
          
          <p class="font-medium text-gray-600 mb-24">Order Details</p>
           
            
                <form>
            <div class="relative z-0 mb-6  group">
                <input type="text" name="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value="${data.id}"/>
                <label for="" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ORDER ID</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value="${data.name}" />
                <label for="floating_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NAME</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value="${data.address}" />
                <label for="floating_repeat_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ADDRESS</label>
            </div>
             <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value="${data.email}" />
                <label for="floating_repeat_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">EMAIL</label>
            </div>
           
            </form>
          <div class="container flex items-center gap-3 py-4 mt-32">
         
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
               
                  <td class="py-4 px-4 text-center">TOTAL</td>
                
                
                </tr>
              </thead>
              <tbody>
             ${data.product.map((item) => {
                 return /* html */ `
                  <tr
                  v-for="product in products"
                  class="hover:bg-gray-100 transition-colors group"
                >
                  <td class="flex gap-x-4 items-center py-4 pl-10">
                  
                    <img
                      src="${item.imageIntro}"
                      alt=""
                      class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                    />
                  
                      
                  </td>
                  <td class="font-medium text-center">${item.name}</td>
                  <td class="font-medium text-center">${item.quantity}</td>
                  <td class="text-center">
                    ${item.price}
                  </td>
                  
                    
                
                    <td class="font-medium text-center">
                  ${item.price * item.quantity}
                  </td>
                
                </tr>
              

                 `;
             }).join("")}
           
                
              </tbody>
            </table>
        

         

        </div>
         ${Footer.render()}
        `;
  }, 
  afterRender() {
      Navbar.afterRender();  }
};
export default OrderDetailPage;
