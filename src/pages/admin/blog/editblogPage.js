import sideBar from "../../../components/admin/sidebar";
import { edit, listedit } from "../../../api/blogApi";
import axios from "axios";

const EditBlogPage = {
  async render(id) {
    const { data: blogedit } = await listedit(id);
    // console.log("Blog", blogedit);
    return /* html */ `
        <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}
     <div class="bg-white p-16 ml-32 mr-32 mt-10 rounded shadow-2xl w-2/3 ">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Edit blog</h2>
            <form class="space-y-5" id="edit_blog" enctype="multipart/form-data" method="POST">
            <div>
                <label class="block mb-1 font-bold text-gray-500">Title</label>
                <input id="title"  type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" value="${
                  blogedit.title
                }" cols>
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Image</label>
                <div><img src="${blogedit.img}" class="w-32 h-32"></div>
                <input type="file" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="img-blog">
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Desc</label>
                <textarea class="resize rounded-md w-full" id="content_blog">${
                  blogedit.desc
                }</textarea>
              
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">CreatedAt</label>
                <input type="date" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="date" value="${
                  blogedit.createdAt
                }">
                
              
            </div>
           
           
           
            
         
             

           
           
            <button class="block w-full bg-blue-600 hover:bg-blue-300 p-4 rounded text-white hover:text-red-800 transition duration-300">Edit Blog</button>
            </form>
        </div>
       

   

    </div>


        `;
  },
  async afterRender(id) {
    const formEditBlog = document.querySelector("#edit_blog");
    const imgPost = document.querySelector("#img-blog");

    const repoeditblog = await listedit(id);
 
    const CLOUDINARY_API_URL =
      "https://api.cloudinary.com/v1_1/ecommerce-vanthanh/image/upload";
    const CLOUDINARY_PRESET = "ppcnsqib";

    formEditBlog.addEventListener("submit", async (e) => {
      e.preventDefault();
      const file = imgPost.files[0];
    let imageblogUrl;
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
     imageblogUrl = data.url;
   }
     

      let repon = {
        ...repoeditblog.data,
        title: document.querySelector("#title").value,

        desc: document.querySelector("#content_blog").value,
        createdAt: document.querySelector("#date").value,
      };
      if (imageblogUrl) {
        repon.imageblogUrl = imageblogUrl;
      }
      edit(id, repon);
      window.location.href = "/admin/blog"
    });
  },
};
export default EditBlogPage;
