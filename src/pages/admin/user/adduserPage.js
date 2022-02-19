import sideBar from "../../../components/admin/sidebar";
import { signup } from "../../../api/userApi";
import $ from "jquery";
import validate from "jquery-validation";

const AddUserPage = {
  render() {
    return /* html */ `
         <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}
     <div class="bg-white p-16 ml-32 mr-32 mt-10 rounded shadow-2xl w-2/3 ">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Add User</h2>
            <form class="space-y-5" id="add-user" enctype="multipart/form-data" method="POST">
            <div>
                <label class="block mb-1 font-bold text-gray-500">Username</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="username" name="username" cols>
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Email</label>
                <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="email" name="email">
            </div>
             <div>
                <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input type="pass" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="password" name="txtpassword">
            </div>
           
           
           
            
         
             

           
           
            <button class="block w-full bg-blue-600 hover:bg-blue-300 p-4 rounded text-white hover:text-red-800 transition duration-300">Add User</button>
            </form>
        </div>
       

   

    </div>

        `;
  },
  afterRender() {
    $("#add-user").validate({
      rules: {
        username: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        txtpassword: {
          required: true,
          minlength: 6,
        },
        messages: {
          username: {
            required: "This field is required.",
          },
          email: {
            required: "We need your email address to contact you",
            email:
              "Your email address must be in the format of name@domain.com",
          },
          txtpassword: {
            required: "This field is required.",
            txtpassword: "Please enter at least 6 characters.",
          },
        },
      },
    });
    console.log("Dang trong adminuser");
    const formAddUser = document.querySelector("#add-user");
    formAddUser.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("vali", $("#add-user").validate());
      if ($("#add-user").validate().errorList.length == 0) {
        console.log("dangky");
        signup({
          username: document.querySelector("#username").value,
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        });
        window.location.href = "/admin/user";
      }
    });
  },
};
export default AddUserPage;
