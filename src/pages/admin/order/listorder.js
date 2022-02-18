import sideBar from "../../../components/admin/sidebar";
import {
  list,
  update,
  getOrder,
  remove,
  searchOrder,
  sortOrderStatus,
  sortOrderTotal,
} from "../../../api/orderAPI";
import { reRender } from "../../../utils";

const ListOrder = {
  async render() {
    const { data } = await list();

    return /* html */ `
        <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}

      <main class="flex-1 pb-8">
      <div class="flex items-center justify-between py-7 px-10">
        <div>
          <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">Orders</h1>
          <div class="grid grid-cols-4">
            <div >
              <p>Name&Phone&Email&Address</p>
              <input id="search-order" class="border border-gray-200 py-3 px-4 w-62" />
            </div>
             <div class="px-8 ">
              <p>Status</p>
              <select name="" id="sortorder" 
              class="focus:ring-blue focus:border-blue w-72 rounded border-gray-300 px-4 py-3 text-sm text-gray-600 shadow-sm">
              <option value="not approved yet">not approved yet</option>
              <option value="approved">approved</option>
              <option value="delivered">delivered</option>
              <option value="cancelled">cancelled</option>
        
            </select>
            </div>
             <div class="px-8  ">
             <p class="ml-32 ">Price</p>
              <select name="" id="sortprice_order"
              class="focus:ring-blue focus:border-blue w-72 ml-32 rounded border-gray-300 px-4 py-3 text-sm text-gray-600 shadow-sm">
              <option value="asc">default soring</option>
              <option value="asc">Price low-hight</option>
              <option value="desc">Price hight-low</option>
              
            </select>
            </div>
            

          </div>
        
         
        </div>
       
      </div>

      <ul class="flex gap-x-24 items-center px-4 border-y border-gray-200">
        <li v-for="item in status">
          <button
            class="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group"
          >
           
            <span class="font-medium"> </span>
           
          </button>
        </li>
      </ul>

      <table class="w-full border-b border-gray-200">
        <thead>
          <tr class="text-sm font-medium text-gray-700 border-b border-gray-200">
           
            <td class="py-4 px-4 text-center">STT</td>
            <td class="py-4 px-4 text-center">NAME</td>
            <td class="py-4 px-4 text-center">PHONE</td>
             <td class="py-4 px-4 text-center">EMAIL</td>
            <td class="py-4 px-4 text-center">ADDRESS</td>
            <td class="py-4 px-4 text-center">TOTAL</td>
            
            <td class="py-4 px-4 text-center">CREATED_AT</td>
             <td class="py-4 px-4 text-center">STATUS</td>
          
            <td class="py-4 px-4 text-center">CUSTOM</td>
            <td class="py-4 pr-10 pl-4 text-center">
              
            </td>
          </tr>
        </thead>
        <tbody id="tbody-order">
        ${data
          .map((element, index) => {
            const statusTable = () => {
              if (element.status == "not approved yet") {
                return /*html*/ `
                    <option value="${element.status}" selected>${element.status}</option>
                    <option value="approved">approved</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
              } else if (element.status == "approved") {
                return /*html*/ `
                    <option value="approved" selected>approved</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
              } else if (element.status == "delivered") {
                return /*html*/ `
                    <option value="delivered" selected>delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
              } else {
                return ` <option value="cancelled" selected>cancelled</option>`;
              }
            };
            return /* html */ `
            <tr
            v-for="product in products"
            class="hover:bg-gray-100 transition-colors group"
          >
            
            <td class="font-medium text-center">${index + 1}</td>
            <td class="font-medium text-center">${element.name}</td>
            <td class="text-center">
              ${element.phone}
            </td>
            <td class="font-medium text-center">
             ${element.email}
            </td>
              <td class="font-medium text-center">
             ${element.address}
            </td>
           
              <td class="font-medium text-center">
             ${element.totalMoney}
            </td>
             </td>
              <td class="font-medium text-center">
             ${element.day}
            </td>
             <td ><div class="selectorid">
              <select data-id="${
                element.id
              }" class="status border-2 border-blue-400 border-opacity-100 rounded-lg text-blue-700">
                ${statusTable()}
            </select></div></td>
            

            <td>
             <button class="list-cart-btn" data-id=${element.id} >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-red-600 '"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"  />
                </svg>
             </button>
            
            </td>
             <td>
             <a href="/editorder/${element.id}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
             </button>
            
            </td>
          </tr>
            `;
          })
          .join("")}
          
        </tbody>
      </table>

      <div class="flex gap-x-2 justify-center pt-8">
        <button class="flex justify-center items-center w-8 h-8">
         
        </button>
        
        <button class="flex justify-center items-center w-8 h-8">
         
        </button>
      </div>
    </main>
    
    
    
    
   
  

   
  </div>



       `;
  },
  afterRender() {
    const changeStatus = document.querySelectorAll(".status");
    changeStatus.forEach((item) => {
      item.addEventListener("change", async (e) => {
        e.preventDefault();
        const id = item.dataset.id;
        const { data: getorder } = await getOrder(id);

        update(id, { ...getorder, status: e.target.value });
      });
    });
    const removeStatus = document.querySelectorAll(".list-cart-btn");
    removeStatus.forEach((removeItem) => {
      removeItem.addEventListener("click", async (e) => {
        e.preventDefault();
        const id = removeItem.dataset.id;
        console.log("idbut", id);
        const question = confirm("Are you want to delete?");
        if (question) {
          remove(id);
          reRender(ListOrder, "#app");
        }
      });
    });
    const searchInput = document.getElementById("search-order");
    searchInput.addEventListener("input", async (e) => {
      e.preventDefault();
      const { data: order } = await searchOrder(e.target.value);
      document.querySelector("#tbody-order").innerHTML =
        this.renderOrder(order);
    });
    const sortStatus = document.querySelector("#sortorder");
    sortStatus.addEventListener("change", async () => {
      const { data } = await sortOrderStatus(sortStatus.value);

      document.querySelector("#tbody-order").innerHTML = this.renderOrder(data);
    });
    const sortPriceOrder = document.querySelector("#sortprice_order");
    console.log("SortPrce", sortPriceOrder);
    sortPriceOrder.addEventListener("change", async () => {
      console.log("Sorttype", sortPriceOrder.value);

      const { data } = await sortOrderTotal(sortPriceOrder.value);
      console.log("DATA", data);

      document.querySelector("#tbody-order").innerHTML = this.renderOrder(data);
    });
  },
  renderOrder(data) {
    return /* html */ `
        ${data
          .map((element, index) => {
            const statusTable = () => {
              if (element.status == "not approved yet") {
                return /*html*/ `
                    <option value="${element.status}" selected>${element.status}</option>
                    <option value="approved">approved</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
              } else if (element.status == "approved") {
                return /*html*/ `
                    <option value="approved" selected>approved</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
              } else if (element.status == "delivered") {
                return /*html*/ `
                    <option value="delivered" selected>delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
              } else {
                return ` <option value="cancelled" selected>cancelled</option>`;
              }
            };
            return /* html */ `
            <tr
            v-for="product in products"
            class="hover:bg-gray-100 transition-colors group"
          >
            
            <td class="font-medium text-center">${index + 1}</td>
            <td class="font-medium text-center">${element.name}</td>
            <td class="text-center">
              ${element.phone}
            </td>
            <td class="font-medium text-center">
             ${element.email}
            </td>
              <td class="font-medium text-center">
             ${element.address}
            </td>
           
              <td class="font-medium text-center">
             ${element.totalMoney}
            </td>
             </td>
              <td class="font-medium text-center">
             ${element.day}
            </td>
             <td ><div class="selectorid">
              <select data-id="${
                element.id
              }" class="status border-2 border-blue-400 border-opacity-100 rounded-lg text-blue-700">
                ${statusTable()}
            </select></div></td>
            

            <td>
             <button class="list-cart-btn" data-id=${element.id} >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-red-600 '"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"  />
                </svg>
             </button>
            
            </td>
             <td>
             <a href="/editorder/${element.id}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
             </button>
            
            </td>
          </tr>
            `;
          })
          .join("")}
          `;
  },
};

export default ListOrder;
