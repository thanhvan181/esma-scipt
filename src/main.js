import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboarPage";
import homePage from "./pages/homePage";
import ShopPage from "./pages/shopPage";
import SingUpPage from "./pages/signupPage";
import SingInPage from "./pages/signinPage";
import ListProductPage from "./pages/admin/product/listproductPage";
import AddProductList from "./pages/admin/product/addproductPage";
import EditProducPage from "./pages/admin/product/editproductPage";
import ProductDetails from "./pages/productDetails";
import ProductCategory from "./pages/productCategory";

const router = new Navigo("/", { linksSelector: "a" });
const renders = async (content, id) => {
  if (content.render) {
    document.querySelector("#app").innerHTML = await content.render(id);
  }
  if (content.afterRender) await content.afterRender(id);
};

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
  "/signin": () => {
    renders(SingInPage);
  },
  "/admin/products": () => {
    renders(ListProductPage);
  },
  "/admin/products/add": () => {
    renders(AddProductList);
  },
  "/editproduct/:id": ({ data }) => {
    renders(EditProducPage, data.id);
  },
  "/products/:id": ({ data }) => {
    renders(ProductDetails, data.id);
  },
  "/productcategory/:classify": ({ data }) => {
    // console.log("DATA:", { data });
    renders(ProductCategory, data.classify);
  },
});
router.resolve();
