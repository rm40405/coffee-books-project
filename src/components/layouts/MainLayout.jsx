import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic section */}
            <div className="min-h-[calc(100vh-232px)] container mx-auto">
               <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;