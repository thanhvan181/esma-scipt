
import sideBar from "../../components/admin/sidebar";

const Dashboard = {
  render() {
    return /* html */ `
   

  <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}

    <main class="flex-1 pb-8">
      <div class="flex items-center justify-between py-7 px-10">
        <div>
          <h1 class="text-2xl font-semibold leading-relaxed text-gray-800">Products</h1>
          <p class="text-sm font-medium text-gray-500">
            Let's grow to your business! Create your product and upload here
          </p>
        </div>
        <button
          class="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
        >
          
          <span class="text-sm font-semibold tracking-wide">Create Item</span>
        </button>
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
            <td class="pl-10">
              <div class="flex items-center gap-x-4">
                <input
                  type="checkbox"
                  class="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                  indeterminate="indeterminate"
                />
                <span>Product Name</span>
              </div>
            </td>
            <td class="py-4 px-4 text-center">Pricing</td>
            <td class="py-4 px-4 text-center">Downloaded</td>
            <td class="py-4 px-4 text-center">Rating</td>
            <td class="py-4 px-4 text-center">Platforms</td>
            <td class="py-4 pr-10 pl-4 text-center">
              
            </td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products"
            class="hover:bg-gray-100 transition-colors group"
          >
            <td class="flex gap-x-4 items-center py-4 pl-10">
              <input
                type="checkbox"
                class="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
              />
              <img
                :src="product.imageUrl"
                alt=""
                class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
              />
              <div>
                <a href="#" class="text-lg font-semibold text-gray-700">
                 
                </a>
                <div class="font-medium text-gray-400"></div>
              </div>
            </td>
            <td class="font-medium text-center">a</td>
            <td class="font-medium text-center">b</td>
            <td class="text-center">
              <span class="font-medium">c</span>
              <span class="text-gray-400">/5</span>
            </td>
            <td>
              <div class="flex gap-x-2 justify-center items-center">
                <a
                  href="#"
                  v-for="icon in product.platformIcons"
                  class="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                 
                </a>
              </div>
            </td>
            <td>
             
              <div
                class="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2"
              >
                <button class="p-2 hover:rounded-md hover:bg-gray-200">
                
                </button>
                <button class="p-2 hover:rounded-md hover:bg-gray-200">
                
                </button>
              </div>
            </td>
          </tr>
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
};
export default Dashboard;
