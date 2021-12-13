import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/auth";
import EventBus from "../../common/EventBus";

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  // const logOut = useCallback(() => {
  //   dispatch(logout());
  // }, [dispatch]);

  // if (!currentUser) {
  //   return navigate("/login");
  // }

  useEffect(() => {
    EventBus.on("handleLogout", () => {
      handleLogout();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [handleLogout]);

  return (
    <>
      <div className="page-content">
        <div className="container mx-auto">
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <button className="nav-link btn btn-primary" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
