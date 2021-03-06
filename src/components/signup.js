import { signup } from "../api/userApi";
import "toastr/build/toastr.min.css";
import toastr from "toastr";
import $ from "jquery";
import validate from "jquery-validation";

const SignUp = {
  render() {
    return /* html */ `
   <div class="min-h-screen flex items-center justify-center">
     
    
        <div class="bg-white p-16 rounded shadow-2xl w-2/3">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>
            <form class="space-y-5" id="formSignup">
            <div>
                <label class="block mb-1 font-bold text-gray-500">Name</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="username" cols name="username">
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Email</label>
                <input type="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="email" name="email">
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Password</label>
                <input type="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="password" name="password">
            </div>
             <div class="text-sm pt-12">
                            <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500">
                               SignIn
                            </a>
                        </div>
            <div class="flex items-center">
                <input type="checkbox" id="agree">
                <label for="agree" class="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
            </div>
            <button class="block w-full bg-red-600 hover:bg-red-300 p-4 rounded text-white hover:text-red-800 transition duration-300">Sign Up</button>
            </form>
        </div>
        </div>
      `;
  },
 afterRender() {
  const validSignup =  $("#formSignup").validate({
     rules: {
       username: {
         required: true,
       },
       email: {
         required: true,
         email: true,
       },
       password: {
         required: true,
         password: true,
       },
       messages: {
         username: {
           required: "This field is required.",
         },
         email: {
           required: "We need your email address to contact you",
           email: "Your email address must be in the format of name@domain.com",
         },
         password: {
           required: "This field is required.",
           password: "Please enter at least 6 characters.",
         },
       },
     },
   });

    console.log("aftersingup");
    const formSignup = document.querySelector("#formSignup");
    console.log("FormSignUp", formSignup);
        formSignup.addEventListener("submit", function (e) {
          e.preventDefault();
          if (validSignup.errorList.length === 0){
             signup({
               username: document.querySelector("#username").value,
               email: document.querySelector("#email").value,
               password: document.querySelector("#password").value,
             });

          }
           
          // console.log("Signup", signup)

          toastr.success("Ban dan dang ky thanh cong, vui long dang nhap de vao trang chinh")
          
        });
}
}

export default SignUp;
