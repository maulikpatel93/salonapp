import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Helmet } from "react-helmet-async";
import { clearMessage } from "../../store/slices/message";
import { clientView } from "../../store/slices/clientSlice";
// import config from "../../config";
// ==============================|| MAIN LAYOUT ||============================== //
const MainLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
    dispatch(clientView());
  }, [dispatch]);

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
