import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { listone } from "../api/orderAPI";
import { getLocalStorage } from "../utils";

const YourOrderPage = {
  async render() {
    if (localStorage.getItem("user")) {
      const id = getLocalStorage("user").id;
      const { data: yourorder } = await listone(id);
      console.log("Youorder", yourorder);

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
       


          <table class="w-4/5 m-auto divide-y divide-gray-200 ">
               <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDERID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DAY</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DETAILS</th>
               <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL</th>
              
            </tr>
          </thead>
              <tbody>
               
              ${yourorder
                .map((item) => {
                  return /* html */ `
                   <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                  ${item.id}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${item.day}</div>
               
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> ${item.status} </span>
              </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/orderdetail/${item.id}" class="text-indigo-600 hover:text-indigo-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                </a>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="text-sm text-gray-900">${item.totalMoney}</div>
              
              </td>
            
            </tr>


           
                  `;
                })
                .join("")}
          
              
          
                
              </tbody>
            </table>
                


          ${Footer.render()}


              `;
    } else {
      window.location.href = "/signin";
      return "";
    }
  },
  afterRender() {
    Navbar.afterRender();
  },
};
export default YourOrderPage;
