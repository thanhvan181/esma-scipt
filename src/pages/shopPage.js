import Shop from "../components/shop";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const ShopPage = {
  async render() {
    return /* html */ `
       ${Header.render()}
       ${Navbar.render()}
       <div id="shop">
        ${await Shop.render()}
       </div>
      
       ${Footer.render()}

       







       `;
  },
  afterRender() {
       Header.afterRender();
       Shop.afterRender()
    return Shop.afterRender()
   
  },
};
export default ShopPage;
