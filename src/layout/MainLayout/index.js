import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Helmet } from "react-helmet-async";
// import config from "../../config";
// ==============================|| MAIN LAYOUT ||============================== //
const MainLayout = () => {
  return (
    <>
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
