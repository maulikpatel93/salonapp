import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../config";
import { ucfirst } from '../../../helpers/functions';

const ClientList = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const view = useSelector((state) => state.client.view);

  const objectData = view && view.data ? view.data : view;
  return (
    <>
      {Object.keys(objectData).map((item, i) => {
        let firstName = objectData[item].first_name;
        let lastName = objectData[item].last_name;
        let mobile = objectData[item].mobile;
        return (
          <div className="box-image-cover" key={i}>
            <div className="dropdown d-inline-block setting-dropdown">
              <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                <i className="far fa-ellipsis-v"></i>
              </button>
              <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ minWidth: "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <a className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                      SMS
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tabs-image">
              <img src={config.imagepath + "user-big.png"} alt="" />
            </div>
            <div className="image-content">
              <h5 className="fw-semibold mb-1">{mobile}</h5>
              <h5 className="mb-0 fw-normal">{ucfirst(firstName+' '+lastName)}</h5>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default ClientList;
