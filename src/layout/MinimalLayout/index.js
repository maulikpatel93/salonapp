import { Outlet } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
import '../../../src/assets/scss/custom.scss'
// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MinimalLayout;
