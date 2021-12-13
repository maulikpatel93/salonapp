import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Helmet } from "react-helmet";
// import "../../assets/css/style.css";
// ==============================|| MAIN LAYOUT ||============================== //
const MainLayout = () => {
    return (
      <>
        {/* <div id="preloader">
                <div id="status">
                    <img src={config.logopath} alt="" />
                </div>
            </div> */}
        <Helmet>
        <link rel="stylesheet" href="/css/style.css" />
        </Helmet>
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
