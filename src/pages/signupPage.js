import SignUp from "../components/signup";
import Header from "../components/header";
import Navbar from "../components/navbar";

const SingUpPage = {
  render() {
    return /* html */ `
        ${Header.render()}
        ${Navbar.render()}

        ${SignUp.render()}

        `;
  },
   afterRender() {
      return SignUp.afterRender();
  }
};
export default SingUpPage