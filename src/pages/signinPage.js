import SingIn from "../components/signin";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SingInPage = {
 async render() {
    return /* html */ `
    ${Header.render()}
    ${ await Navbar.render()}
    ${SingIn.render()}
    ${Footer.render()}

        `;
  },
  afterRender() {
    return SingIn.afterRender();
  },
};
export default SingInPage;
