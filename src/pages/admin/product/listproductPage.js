import sideBar from "../../../components/admin/sidebar";
import listproduct from "../../../components/admin/listproduct"

const ListProductPage = {
  async render() {
      console.log("Listproduct")
    return /* html */ `
    
  <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}
    ${ await listproduct.render()}

   
  </div>
        `;
  },
};
export default ListProductPage;
