import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboarPage";
import homePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import SingUpPage from "./pages/signupPage";
import SingInPage from "./pages/signinPage";

const router = new Navigo("/", { linksSelector: "a" });
const renders = async (content, id) => {
    if(content.render){
        document.querySelector('#app').innerHTML = await content.render(id);

    }
    if(content.afterRender) await content.afterRender();

}


router.on({
  "/": () => {
    console.log("renderHomepage");
    renders(homePage);
  },
  "/admin/dashboard": () => {
    renders(Dashboard);
  },
  "/shop": () => {
    renders(ShopPage);
  },
  "/signup": () => {
    renders(SingUpPage);
  },
  "signin": () => {
    renders(SingInPage);
  }

});
router.resolve();
