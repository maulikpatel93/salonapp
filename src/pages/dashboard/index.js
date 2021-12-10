import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/auth";
import EventBus from "../../common/EventBus";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (!currentUser) {
    return navigate("/login");
  }

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [logOut]);

  return (
    <>
      <div className="container mx-auto">
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
          <a href="/login" className="nav-link btn btn-primary" onClick={logOut}>
            LogOut
          </a>
      </div>
    </>
  );
};

export default Dashboard;
