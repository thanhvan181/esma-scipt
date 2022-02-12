
import sideBar from "../../components/admin/sidebar";

const Dashboard = {
  render() {
    return /* html */ `
   

  <div class="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    ${sideBar.render()}

   
  </div>

        `;
  },
};
export default Dashboard;
