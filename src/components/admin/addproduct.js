import { getAllCate } from "../../api/categoryapi";
import { addproduct } from "../../api/productapi";
import axios from "axios";
import toastr from "toastr";

import "toastr/build/toastr.min.css";

const addProduct = {
  async render() {
    const { data } = await getAllCate();
    const cate = data.map((element) => {
      console.log("Cate", element);
      return /* html */ `

        <option value="${element.id}">${element.title}</option>
        
        `;
    });

    return /* html */ `
       
     
    
        <div class="bg-white p-16 ml-32 mr-32 mt-10 rounded shadow-2xl w-2/3 ">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Add Product</h2>
            <form class="space-y-5" id="addproduct" enctype="multipart/form-data" method="POST">
            <div>
                <label class="block mb-1 font-bold text-gray-500">Name product</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="nameproduct" cols>
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Price</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="price">
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Introduction</label>
               <textarea class="resize rounded-md w-full" id="introduct"></textarea>
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Content</label>
               <textarea class="resize rounded-md w-full" id="content"></textarea>
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Image</label>
                <input type="file" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="img-product">
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Album</label>
                <input type="file" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="product-album" multiple>
            </div>
            <div class="form-group">
                 <label class="block mb-1 font-bold text-gray-500">Classify product</label>
                <div class="flex justify-start items-center gap-3">
                <input type="radio" name="classify" value="male" id="male" checked>
                <label for="male" class=" py-1 classify text-gray-800"> Male
                </label>
                <input type="radio" name="classify" value="female" id="famale" >
                <label for="famale" class=" py-1 classify text-gray-800"> Female
                </label>
                </div>
            </div>
            
             <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="block mb-1 font-bold text-gray-500">Category product</label>
                        <select name="category" id="category" class="form-control" >
                           ${cate}
                        </select>
                    </div>
                </div>
            </div>

           
           
            <button class="block w-full bg-blue-600 hover:bg-blue-300 p-4 rounded text-white hover:text-red-800 transition duration-300">Add Product</button>
            </form>
        </div>
       


        `;
  },
  afterRender() {
    const formAddProduct = document.querySelector("#addproduct");
    const imgProduct = document.querySelector("#img-product");
    const productAlbum = document.querySelector("#product-album");

    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/ecommerce-vanthanh/image/upload";
    const CLOUDINARY_PRESET = "ppcnsqib";
    formAddProduct.addEventListener("submit", async function (e) {
      e.preventDefault();
      const size = document.querySelectorAll('input[name="size"]:checked');
      const file = imgProduct.files[0];

      const fileAlbum = productAlbum.files;
      const formAddData = new FormData();

      formAddData.append("file", file);
      formAddData.append("upload_preset", CLOUDINARY_PRESET);

      // call api cloudinary
      const { data } = await axios.post(CLOUDINARY_API_URL, formAddData, {
        headers: {
          "Content-Type": "application/form-data",
        },
      });
      const albums = [];
      for (var i = 0; i < fileAlbum.length; i++) {
        let formAddData2 = new FormData();

        formAddData2.append("file", fileAlbum[i]);
        formAddData2.append("upload_preset", CLOUDINARY_PRESET);
        let response = await axios.post(CLOUDINARY_API_URL, formAddData2, {
          headers: {
            "Content-Type": "application/form-data",
          },
        });

        albums.push(response.data.url);
      }

     
      addproduct({
        name: document.querySelector("#nameproduct").value,
        price: document.querySelector("#price").value,
        introduce: document.querySelector("#introduct").value,
        content: document.querySelector("#content").value,
        imageIntro: data.url,
        album: albums,
        classify: document.querySelector("input[name=classify]:checked").value,
       
        categoryId: document.querySelector("#category").value,
      });
      toastr.success("Them thanh cong product");
      window.location.href = "/admin/products";
    });
  },
};
export default addProduct;
