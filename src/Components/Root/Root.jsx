import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";


const Root = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Tooltip id="my-tooltip"></Tooltip>

        </div>
    );
};

export default Root;