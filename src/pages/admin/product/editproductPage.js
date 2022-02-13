import sideBar from "../../../components/admin/sidebar";
import { editProduct } from "../../../api/categoryapi";
// // import {  reRender } from "../../../utils";
import { read, update } from "../../../api/productapi";
import axios from "axios";

const EditProducPage = {
  async render(id) {
    // console.log("IDD: :", id);
    const { data } = await read(id);

    // console.log(data);

    const imageAlbums =
      data.album &&
      data.album
        .map((img) => {
          return /*html*/ `
            <img src="${img}" class="w-32 h-32 object-contain albums">
            `;
        })
        .join("");
    const { data: cate } = await editProduct(data.categoryId);
    console.log(cate);
    const categories = cate
      .map((element) => {
        return /*html*/ `
            <option value="${element.id}">${element.title}</option>
            `;
      })
      .join("");

    return /* html */ `
        <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
     ${sideBar.render()}


        <div class="bg-white p-16 ml-32 mr-32 mt-10 rounded shadow-2xl w-2/3 ">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Edit Product</h2>
            <form class="space-y-5" id="editproduct" enctype="multipart/form-data" method="POST">
            <div>
                <label class="block mb-1 font-bold text-gray-500">Name product</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"  id="nameproduct" value=${
                  data.name
                }cols>
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Price</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="price" value="${
                  data.price
                }">
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Introduction</label>
               <textarea class="resize rounded-md w-full" id="introduct"> ${
                 data.introduce
               }</textarea>
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Content</label>
               <textarea class="resize rounded-md w-full" id="content">${
                 data.content
               }</textarea>
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Image</label>
                  <img src="${
                    data.imageIntro
                  }" alt="" class=" h-40"  id="image-old">
                <input type="file" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="img-product">
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Album</label>

                <div class= "flex justify-between items-center">
                                                    ${imageAlbums}
                                                    </div>
                                                  
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
            <div class="form-group">
               <label class="block mb-1 font-bold text-gray-500">Size Product</label>
                <div class="flex justify-between items-center">
                <input type="checkbox" name="size" value="XXS" id="XXS" checked>
                <label for="XXS" class=" py-1  text-gray-800"> XXS
                </label>
                <input type="checkbox" name="size" value="XS" id="XS" >
                <label for="XS" class=" py-1  text-gray-800">
                    XS </label>
                <input type="checkbox" name="size" value="XS-S" id="XS-S" >
                <label for="XS-S" class=" py-1  text-gray-800"> XS-S
                </label>
                <input type="checkbox" name="size" value="S" id="S" >
                <label for="S" class=" py-1  text-gray-800"> S
                </label>
                <input type="checkbox" name="size" value="M" id="M" >
                <label for="M" class=" py-1  text-gray-800"> M
                </label>
                <input type="checkbox" name="size" value="M-L" id="M-L" >
                <label for="M-L" class=" py-1  text-gray-800">
                    M-L </label>
                <input type="checkbox" name="size" value="L" id="L" >
                <label for="L" class=" py-1  text-gray-800"> L
                </label>
                <input type="checkbox" name="size" value="XL" id="XL" >
                <label for="XL" class=" py-1  text-gray-800">
                    XL </label>
                </div>
            </div>
             <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="block mb-1 font-bold text-gray-500">Category product</label>
                        <select name="category" id="category" class="form-control" >
                         ${categories}
                                                    
                        </select>
                    </div>
                </div>
            </div>

           
           
            <button class="block w-full bg-blue-600 hover:bg-blue-300 p-4 rounded text-white hover:text-red-800 transition duration-300">EditProduct</button>
            </form>
        </div>


   
  

   
    </div>

       `;
  },
  async afterRender(id) {
    const formEditproduct = document.querySelector("#editproduct");
    const response = await read(id);
    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/ecommerce-vanthanh/image/upload";

    const CLOUDINARY_PRESET = "ppcnsqib";
    formEditproduct.addEventListener("submit", async (e) => {
      e.preventDefault();
      const size = document.querySelectorAll('input[name="size"]:checked');
      const imgProduct = document.querySelector("#img-product");
      let imageIntroUrl;
      const file = imgProduct.files[0];
      if (file) {
        const formAddData = new FormData();

        formAddData.append("file", file);
        formAddData.append("upload_preset", CLOUDINARY_PRESET);

        //    call api cloudinary
        const { data } = await axios.post(CLOUDINARY_API_URL, formAddData, {
          headers: {
            "Content-Type": "application/form-data",
          },
        });
        imageIntroUrl = data.url;
      }

      const albums = [];
      const productAlbum = document.querySelector("#product-album");
      const fileAlbum = productAlbum.files;
      if (fileAlbum.length > 0) {
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
      }

      const sizes = [];

      Object.keys(size).forEach((key) => {
        if (size[key].checked) {
          sizes.push(size[key].value);
        }
      });
      let repo = {
        ...response.data,
        name: document.querySelector("#nameproduct").value,
        price: document.querySelector("#price").value,
        introduce: document.querySelector("#introduct").value,
        content: document.querySelector("#content").value,
        classify: document.querySelector("input[name=classify]:checked").value,
        size: sizes,
        categoryId: document.querySelector("#category").value,
      };
      if (albums.length > 0) {
        repo.album = albums;
      }
      if (imageIntroUrl) {
        repo.imageIntro = imageIntroUrl;
      }
      console.log("Repo", repo);
      update(id, repo);
      console.log("Update", update);
      //    toastr.success("edit thanh cong product");
      window.location.href = "/admin/products";
    });
  },
};
export default EditProducPage;
