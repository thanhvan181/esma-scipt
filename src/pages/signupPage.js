import SignUp from "../components/signup";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const SingUpPage = {
 async render() {
    return /* html */ `
        ${Header.render()}
        ${await Navbar.render()}

        ${SignUp.render()}
        ${Footer.render()}

        `;
  },
  afterRender() {
    return SignUp.afterRender();
  },
};
export default SingUpPage;
