import toastr from "toastr";
import { signin } from "../api/userApi";
import "toastr/build/toastr.min.css";

const SingIn = {
  render() {
    return /* html */ `
     

    <div class="min-h-screen flex items-center justify-center">
        
        <div class="bg-white p-16 rounded shadow-2xl w-2/3">
            <h2 class="text-3xl font-bold mb-10 text-gray-800">Login</h2>
            <form class="space-y-5" id="formSignin">
            
            <div>
                <label class="block mb-1 font-bold text-gray-500">Email</label>
                <input type="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="email">
            </div>
            <div>
                <label class="block mb-1 font-bold text-gray-500">Password</label>
                <input type="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" id="password">
            </div>
            <p class="mt-4 text-gray-600 text-center">
                Don't have an account? <a href="/signup" class="text-primary">Register Now
                </a>
            
           
            <div class="flex items-center justify-between ">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                        </div>
                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
            <button class="block w-full bg-red-600 hover:bg-red-300 p-4 rounded text-white hover:text-red-800 transition duration-300">Sign In</button>
            </form>
        </div>
        </div>

       

        `;
  },
  afterRender() {
    const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call API login
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                console.log("Data", data)
                // lưu dữ liệu vào localStorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                setTimeout(() => {
                // kiểm tra quyền dựa trên ID
                    if (data.user.id === 1) {
                        document.location.href = "/admin/dashboard";
                    } else {
                        document.location.href = "/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
              
            }
        });
    },

};
export default SingIn;
