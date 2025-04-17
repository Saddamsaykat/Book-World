import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./footer/Footer";

const Root = () => {
  return (
    <div>
      <Nav></Nav>

      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Root;
