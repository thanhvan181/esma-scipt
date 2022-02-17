import sideBar from "../../../components/admin/sidebar";
import { list } from "../../../api/orderAPI";
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
          <p class="text-sm font-medium text-gray-500">
            Let's grow to your business! Create your product and upload here
          </p>
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
        <tbody>
        ${data
          .map((element, index) => {
              const statusTable = () => {
                if (eloreder.status == "not approved yet") {
                  return /*html*/ `
                    <option value="${element.status}">${element.status}</option>
                    <option value="approved">approved</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
                } else if (element.status == "approved") {
                  return /*html*/ `
                    <option value="approved">approved</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
                } else if (element.status == "delivered") {
                  return /*html*/ `
                    <option value="approved">delivered</option>
                    <option value="cancelled">cancelled</option>
                    `;
                } else {
                  return ` <option value="cancelled">cancelled</option>`;
                }
            }
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
             <td ><div class="selectorid"> <select data-id="${
               element.id
             }" class="status border-2 border-green-400 border-opacity-100 rounded-lg text-green-700">
                ${statusTable()}
            </select></div></td>
            

            <td>
             <button >
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-red-600 btn btn-remove" data-id=${
               element.id
             } fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"  />
                </svg>
             </button>
            
            </td>
             <td>
             <a href="/editproduct/${eloreder.id}">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
             </a>
            
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

  }
}
    
export default ListOrder;
