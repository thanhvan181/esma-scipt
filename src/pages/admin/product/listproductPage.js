import sideBar from "../../../components/admin/sidebar";
import { list, remove } from "../../../api/productapi";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";
import validate from "jquery-validation";

const ListProductPage = {
  async render() {
    // window.onload = function () {
    //   if (window.jQuery) {
    //     // jQuery is loaded
    //     alert("Yeah!");
    //   } else {
    //     // jQuery is not loaded
    //     alert("Doesn't Work");
    //   }
    // };
    //     {
    //     "name": "High-back",
    //     "price": "999",
    //     "introduce": " Sold out sizes are out of stock through early 2021, we will update our social media/email list when we are able to restock.<br>\\nSlumber party, run to the corner store, or lazy weekend in bed - find your perfect go-to lounge pant in our new range, Matchplay. In the most heavenly soft and comfortable jersey knit it will be hard to get you out of this slinky soft pant.<br>\\n\\nFall in love with little details like the wide elastic-free waistband, the figure flattering slim leg silhouette, or the delicate petersham ribbon tie. This could be love, or just a match made in lounge heaven.<br>\\n\\nMade in the USA<br>",
    //     "content": "Wash and Dry on delicate cycle with like colors, Hang or Flat Dry. Steam press, use press cloth to avoid damaging spandex<br>\\n\\nbody: 95% rayon, 5% spandex<br>\\n\\nMade in the USA<br>\\n\\nBetween the Sheets Collection<br>\\n\\n*Model is 5' 11\\\" wearing size small<br>\\n\\nthe silhouette is slightly updated version of our Well Played lounge pant, with slightly more room in thighs and wider waistband.<br>\"",
    //     "imageIntro": "http://res.cloudinary.com/ecommerce-vanthanh/image/upload/v1645158568/eco-van/d12sx4bekvvzko2youko.jpg",
    //     "album": [
    //         "http://res.cloudinary.com/ecommerce-vanthanh/image/upload/v1645158569/eco-van/tmfm6e98a7kfd3bqxkle.jpg",
    //         "http://res.cloudinary.com/ecommerce-vanthanh/image/upload/v1645158569/eco-van/ycwguykark6lbyu9yzx7.jpg",
    //         "http://res.cloudinary.com/ecommerce-vanthanh/image/upload/v1645158570/eco-van/zmii17mote1f88q7rpqm.jpg",
    //         "http://res.cloudinary.com/ecommerce-vanthanh/image/upload/v1645158571/eco-van/buz8zaejzu0ouf6rgcdn.jpg",
    //         "http://res.cloudinary.com/ecommerce-vanthanh/image/upload/v1645158571/eco-van/aiadda5tdiiyka8kkbb1.jpg"
    //     ],
    //     "classify": "bed",
    //     "categoryId": "301505",
    //     "id": "VZAioHo",
    //     "category": {
    //         "title": "Bed",
    //         "id": "301505"
    //     }
    // }

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
          
          <a href="/admin/products/add"class="text-sm font-semibold tracking-wide">Add Product</a>
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
      <table id="datatable" class="display " style="width:100%">
        <thead>
          <tr>
            <th >ID</th>
            <th>IMAGE
            </th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th> 
            <th>CLASSIFY</th>
            <th >CUSTOM</th>
          </tr>
        </thead>
        <tbody>
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
  async afterRender() {
    const { data } = await list();
    // console.log("Data: ", data);

    let table = await $("#datatable").DataTable({
      data: data,
      columns: [
        { data: "id" },
        {
          data: "imageIntro",
          render: function (data) {
            return `
        <img class="w-full" src="${data}"/>
        `;
          },
        },

        { data: "name" },
        {
          data: "category",
          render: function (data, type, row) {
            return data.title;
          },
        },
        { data: "price" },

        { data: "classify" },
        {
          render: function (data, type, row) {
            console.log("ROW: ", row);
            return `
         <a class="flex"> 
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-red-600 btn btn-remove"  fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="${row.id}">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"  />
              </svg>
        </a>
           
             
            
             <a href="/editproduct/${row.id}" class="flex">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </a>
             
            

         
          `;
          },
        },
      ],
    });

    console.log("table", table);
    const btns = document.querySelectorAll(".btn");
    // tạo vòng lặp để lấy từng button element
    btns.forEach((btn) => {
      // Lấy giá trị ID thông qua thuộc tính data-id của button
      const { id } = btn.dataset;
      console.log("Id", id);
      btn.addEventListener("click", () => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        console.log("conf");
        if (confirm) {
          remove(id)
            .then(() => {
              toastr.success("Bạn đã xóa thành công");
            })
            .then(() => {
              //  window.location.href = './products'
              reRender(ListProductPage, "#app");
            });
        }
        // remove
      });
    });
  },
};
export default ListProductPage;
