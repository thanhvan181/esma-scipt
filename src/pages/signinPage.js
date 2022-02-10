import SingIn from "../components/signin";
import Header from "../components/header";
import Navbar from "../components/navbar";

const SingInPage = {
  render() {
    return /* html */ `
    ${Header.render()}
    ${Navbar.render()}
    ${SingIn.render()}

        `;
  },
};
export default SingInPage;
