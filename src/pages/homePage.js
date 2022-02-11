import Header from "../components/header";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Features from "../components/features";
import Categories from "../components/categories";
import ProductNew from "../components/productNew";

const homePage = {

  async render() {
      console.log("dang o trong homepage")
    return /* html */ `
      ${Header.render()}
      ${Navbar.render()}
      ${Banner.render()}
      ${Features.render()}
      ${await Categories.render()}
      ${ await ProductNew.render()}

    

       
         
           
           
         

        `;
  },
};
export default homePage;