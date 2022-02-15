import sideBar from "../../../components/admin/sidebar";
import { addcate } from "../../../api/categoryapi";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";

const AddCatePage = {
  render() {
    
    return /* html */ `
        <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
        ${sideBar.render()}

        <div class="bg-white p-16 ml-32 mr-32 mt-10 rounded shadow-2xl w-2/3 ">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Add Cate</h2>
            <form class="space-y-5" id="addcategory" enctype="multipart/form-data" method="POST">
            <div>
                <label class="block mb-1 font-bold text-gray-500">Name Category</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="title_cate" cols>
            </div>
           
            
           
           
           
            <button class="block w-full bg-blue-600 hover:bg-blue-300 p-4 rounded text-white hover:text-red-800 transition duration-300">Add Category</button>
            </form>
        </div>
       </div>

        `;
  },
  afterRender() {
      const formAddCate = document.querySelector("#addcategory");
      formAddCate.addEventListener('submit', (e)=> {
          e.preventDefault();
          addcate({
            title: document.querySelector("#title_cate").value,

          });
          toastr.success("Add thanh cong Cate");
          window.location.href = "/admin/category";


          
      })
  }
};
export default AddCatePage;
