import sideBar from "../../../components/admin/sidebar";
import { add } from "../../../api/blogApi";
import axios from "axios";
const AddBlogPage = {
  render() {
    return /* html */ `
    <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}
     <div class="bg-white p-16 ml-32 mr-32 mt-10 rounded shadow-2xl w-2/3 ">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Add blog</h2>
            <form class="space-y-5" id="add_blog" enctype="multipart/form-data" method="POST">
            <div>
                <label class="block mb-1 font-bold text-gray-500">Title</label>
                <input id="title"  type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" cols>
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Image</label>
                <input type="file" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="img-blog">
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Desc</label>
                <textarea class="resize rounded-md w-full" id="content_blog"></textarea>
              
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">CreatedAt</label>
                <input type="date" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="date">
                
              
            </div>
           
           
           
            
         
             

           
           
            <button class="block w-full bg-blue-600 hover:bg-blue-300 p-4 rounded text-white hover:text-red-800 transition duration-300">Add Blog</button>
            </form>
        </div>
       

   

    </div>


         `;
  },
  afterRender(){
      const formAddBlog = document.querySelector("#add_blog");
      // const imgPreview = document.querySelector("#img-preview");
      const imgPost = document.querySelector("#img-blog");
      const CLOUDINARY_API_URL =
        "https://api.cloudinary.com/v1_1/ecommerce-vanthanh/image/upload";
      const CLOUDINARY_PRESET = "ppcnsqib";

      formAddBlog.addEventListener("submit", async function (e) {
        e.preventDefault();
        const file = imgPost.files[0];

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);

        // call api cloudinary
        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            "Content-Type": "application/form-data",
          },
        });
        // const test = {
        //   title: document.querySelector("#formAddBlog").value,
        //   img: data.url,
        //   desc: document.querySelector("#content_blog").value,
        //   createdAt: document.querySelector("#date").value,
        // };
        // console.log("TEst", test)
        // call api thêm bài viết
        add({
          title: document.querySelector("#title").value,
          img: data.url,
          desc: document.querySelector("#content_blog").value,
          createdAt: document.querySelector("#date").value,
        });
        window.location.href = "/admin/blog"
    

      });
     



      
  }
};
export default AddBlogPage;
