import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import Footer from "../Home/Footer";


const Root = () => {
    return (
        <div className="font-roboto">

            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
            <Footer></Footer>
            <Tooltip id="my-tooltip"></Tooltip>

        </div>
    );
};

export default Root;