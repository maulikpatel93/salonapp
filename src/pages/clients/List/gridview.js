import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import config from "../../../config";
import { ucfirst } from "../../../helpers/functions";
import { swalConfirm } from "../../../component/Sweatalert2";
import { clientDelete } from "../../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ReactPaginate from 'react-paginate';

const ClientGridView = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const view = useSelector((state) => state.client.view);

  const objectData = view && view.data ? view.data : view;

  const handleClientDelete = (e) => {
    const props = JSON.parse(e.currentTarget.dataset.obj);
    const name = ucfirst(props.first_name + " " + props.last_name);
    let confirmbtn = swalConfirm(e.currentTarget, { title: t("are_you_sure_delete_client"), message: name, confirmButtonText: t("yes_delete_it") });
    if (confirmbtn == true) {
      dispatch(clientDelete({ id: props.id }));
    }
  };
  return (
    <>
      {Object.keys(objectData).map((item, i) => {
        let first_name = objectData[item].first_name;
        let last_name = objectData[item].last_name;
        let mobile = objectData[item].mobile;
        let profile_photo = objectData[item].profile_photo;
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
                      {t("edit")}
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                      {t("sms")}
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                      {t("email")}
                    </a>
                  </li>
                  <li>
                    <a className="d-flex align-items-center cursor-pointer" data-obj={JSON.stringify(objectData[item])} onClick={handleClientDelete}>
                      <i className="far fa-trash me-3"></i>
                      {t("delete")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tabs-image user-initial mx-auto">
                {first_name.charAt(0)+''+last_name.charAt(0)}
            </div>
            <div className="tabs-image">
              
            </div>
            <div className="image-content">
              <h5 className="fw-semibold mb-1">{mobile}</h5>
              <h5 className="mb-0 fw-normal">{ucfirst(first_name + " " + last_name)}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ClientGridView;
