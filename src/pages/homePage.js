import Header from "../components/header";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Features from "../components/features";

import ProductNew from "../components/productNew";
import Letter from "../components/letter";
import FooBaner from "../components/foobanner";
import Footer from "../components/footer";
import RecomendProduct from "../components/recomenproduct";

const homePage = {
  async render() {
    console.log("dang o trong homepage");
    return /* html */ `
      <div id="header">
       ${Header.render()}
      </div>
      <div id="navbar">
        ${await Navbar.render()}
      </div>
      ${Banner.render()}
      ${Features.render()}
      ${await ProductNew.render()}
      ${FooBaner.render()}
      ${await RecomendProduct.render()}
      
      

      ${Letter.render()}
      ${Footer.render()}

    

        `;
  },
  afterRender() {
    ProductNew.afterRender();
    
    return Navbar.afterRender();
  }
};
export default homePage;
