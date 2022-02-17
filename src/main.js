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
import ListCategoryPage from "./pages/admin/category/listcatePage";
import AddCatePage from "./pages/admin/category/addcatePage";
import EditCatePage from "./pages/admin/category/editcatePage";
import ListUserPage from "./pages/admin/user/listuserPage";
import AddUserPage from "./pages/admin/user/adduserPage";
import EditUserPage from "./pages/admin/user/edituserPage";
import CartPreview from "./pages/cartpreview";
import CheckOutPage from "./pages/checkoutPage";
import OrderComplete from "./pages/orderComplete";
import BlogPage from "./pages/blogPage";
import BlogDetails from "./pages/blogDetails";
import ListBlogPage from './pages/admin/blog/listBlogPage';
import AddBlogPage from './pages/admin/blog/addblogPage';
import EditBlogPage from './pages/admin/blog/editblogPage';
import ListOrder from "./pages/admin/order/listorder";




const router = new Navigo("/", { linksSelector: "a" });
const renders = async (content, id) => {
  if (content.render) {
    document.querySelector("#app").innerHTML = await content.render(id);
  }
  if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*/", () => {}, {
  before(done, match) {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    console.log(userId);
    if (userId === 1) {
      
      done();
    } else {
      document.location.href = "/";
    }
  },
});
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
  "/admin/category": () => {
    renders(ListCategoryPage);
  },
  "/admin/products/add": () => {
    renders(AddProductList);
  },
  "/admin/category/add": () => {
    renders(AddCatePage);
  },
  "/editproduct/:id": ({ data }) => {
    renders(EditProducPage, data.id);
  },
  "/editcategory/:id": ({ data }) => {
    renders(EditCatePage, data.id);
  },
  "/products/:id": ({ data }) => {
    renders(ProductDetails, data.id);
  },
  "/productcategory/:classify": ({ data }) => {
    renders(ProductCategory, data.classify);
  },
  "/admin/user": () => {
    renders(ListUserPage);
  },
  "/admin/user/add": () => {
    renders(AddUserPage);
  },
  "edituser/:id": ({ data }) => {
    renders(EditUserPage, data.id);
  },
  "/cartpreview": () => {
    renders(CartPreview);
  },
  "/products/checkout": () => {
    renders(CheckOutPage);
  },
  "/products/checkout/success": () => {
    renders(OrderComplete);
  },
  "/blog": () => {
    renders(BlogPage);
  },
  "/blogdetail/:id": ({ data }) => {
    renders(BlogDetails, data.id);
  },
  "/admin/blog": () => {
    renders(ListBlogPage);
  },
  "/admin/blog/add": () => {
    renders(AddBlogPage);
  },
  "/admin/editblog/:id": ({ data }) => {
    renders(EditBlogPage, data.id);
  },
  "admin/order": () => {
    renders(ListOrder);
  }
});
router.resolve();
