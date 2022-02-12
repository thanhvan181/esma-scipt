import addProduct from "../../../components/admin/addproduct";
import sideBar from "../../../components/admin/sidebar";

const AddProductList = {
  async render() {
    return /* html */ `
        <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}
    ${await addProduct.render()}
  

   
  </div>

       `;
  },
  async afterRender() {
    return await addProduct.afterRender();
  },
};
export default AddProductList;
