import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
   return (
      <div>
         <div className="w-[90%] md:w-[80%] mx-auto max-w-6xl">
            <Header></Header>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Root;
