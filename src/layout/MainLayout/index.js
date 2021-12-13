import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "../../assets/css/style.css";
// ==============================|| MAIN LAYOUT ||============================== //
const MainLayout = () => {
    return (
      <>
        {/* <div id="preloader">
                <div id="status">
                    <img src={config.logopath} alt="" />
                </div>
            </div> */}
        <main>
          <div className="body-wrapper">
            <Header />
            <Sidebar />
            <Outlet />
          </div>
        </main>
      </>
    );
};

export default MainLayout;
