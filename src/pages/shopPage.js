import Shop from "../components/shop";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ShopPage = {
    
   async render() {
       return /* html */ `
       ${Header.render()}
       ${Navbar.render()}
       ${ await Shop.render()}
       ${Footer.render()}

       







       `;
    }
}
export default ShopPage