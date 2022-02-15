import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { postAPI } from "../api/blogApi";

const BlogPage = {
  async render() {
    const { data: posts } = await postAPI.list();
    const result = posts
      .map((element) => {
        return `
             <a href="/blogdetail/${element.id}"" class="group">
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src="${element.img}" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="w-full h-full object-center object-cover group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-lg font-medium text-black italic">${element.title}</h3>
        <p >Intro:${element.desc}</p>
        
       
         <span class="mt-1 text-lg font-medium text-gray-900">Create:${element.createdAt}</span>
      </a>
            `;
      })
      .join("");
    return /* html */ `
    ${Header.render()}
    ${await Navbar.render()}
     
  
     <div>
        <div class="container mx-auto px-16 pt-24">
          <a href="" class="text-primary text-base">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
         </a>
            <span class="text-sm text-gray-400 flex"></span>
            <p class="font-medium text-gray-600 flex">Blog</p>
             <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        Top new blogs
      </h2>

          <div class="bg-white">
                <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    
                    ${result}
                    </div>
                </div>
                </div>
            <div
                class=" text-center my-12 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
                <a href="#"
                    class="bg-gray-200 px-4 md:px-12 py-3 rounded-full outline-none hover:bg-gray-500   ">LOAD
                    MORE POSTS</a>
            </div>
        </div>
    </div>
    ${Footer.render()}
           
   


        `;
  },
};
export default BlogPage;
