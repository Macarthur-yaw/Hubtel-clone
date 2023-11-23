import { Outlet } from "react-router-dom";
import Navbar from './landingPage/Navbar'
import Footer from './landingPage/Footer'
const OutletPage = () => {
    return (
        <div>
<Navbar/>
         <Outlet/>   
         <Footer/>
        </div>
      );
}
 
export default OutletPage;