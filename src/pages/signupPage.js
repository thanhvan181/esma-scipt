import SignUp from "../components/signUp";
import Header from "../components/header";
import Navbar from "../components/navbar";

const SingUpPage = {
    render() {
        return /* html */ `
        ${Header.render()}
        ${Navbar.render()}

        ${SignUp.render()}

        `;
    }
}
export default SingUpPage