import toastr from "toastr";
import { reRender, getLocalStorage } from "../utils";
import "toastr/build/toastr.min.css";
import { getAllCate } from "../api/categoryapi";

const Navbar = {
  async render() {
    const { data } = await getAllCate();
    // const getAdmin = JSON.parse(localStorage.getItem("user"));

    return /* html */ `
           <nav class="bg-gray-800">
    <div class="container flex">
      <div class="bg-primary relative flex cursor-pointer items-center px-8 py-4 group">
        <span class="text-white"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg></span>
        <span class="ml-2 capitalize text-white"> All Categories </span>
        <div
          class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
          ${data
            .map((itemcate) => {
              return /* html */ `
             <a href="" class="flex items-center px-6 py-3 transition hover:bg-gray-100">
            <span class="ml-6 text-sm text-gray-600">${itemcate.title}</span>
          </a>

            `;
            })
            .join("")}
         

         
        </div>
      </div>

      <div class="flex flex-grow items-center justify-between pl-12">
        <div class="flex items-center space-x-6 capitalize">
          <a href="/" class="text-gray-200 transition hover:text-white">Home</a>
          <a href="/shop" class="text-gray-200 transition hover:text-white">Shop</a>
          <a href="/productcategory/bed" class="text-gray-200 transition hover:text-white">Bed</a>
          <a href="/productcategory/sofa" class="text-gray-200 transition hover:text-white">Sofa</a>
          <a href="/blog" class="text-gray-200 transition hover:text-white">Blog</a>
          
         
      
        
        </div>
        <div class=flex items-center space-x-6  capitalize>
        ${
          localStorage.getItem("user")
            ? ` 
                 <div class="bg-gray-800 relative flex cursor-pointer items-center px-12 py-4 group ">
        
                  <a href="" class="text-white ml-10" id="account-user">username</a>
                  <div
                    class="absolute w-full left-0 top-full  shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    
                   
                    ${
                      getLocalStorage("user").id == 1
                        ? `<a href="/admin/dashboard" class="flex items-center px-12 py-3 transition hover:bg-gray-100">Admin</a>
                        

                          <a href="/yourorder" class="flex items-center px-6 py-3 transition hover:bg-gray-100">`
                        : ` <a href="/yourorder" class="flex items-center px-6 py-3 transition hover:bg-gray-100">`
                    }
                    <span class="ml-6 text-sm text-gray-600">Your order</span>
                    
                    </a>

                      
                
                  

                  
                  </div>
                  </div>
                  <a href="" class="text-gray-200 transition hover:text-white mt-4 px-4"  id="logout">Logout</a>
                  
                  `
            : `   <a href="/signin" class="text-gray-200 transition hover:text-white" id="account-user">Login/Register
        </a>`
        }

       
        
        </a>
       
       
      </div>
    </div>
  </nav>


        `;
  },
  afterRender() {
    const user = JSON.parse(localStorage.getItem("user"));
    const logout = document.querySelector("#logout");
    console.log("User", user);
    document.querySelector("#account-user").innerHTML = user.username;

    logout.addEventListener("click", () => {
      toastr.success("Logout thành công");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
      reRender(Header, "#navbar");
    });
  },
};
export default Navbar;
