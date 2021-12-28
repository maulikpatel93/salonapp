import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";

import config from "../../../config";
import { openNewSupplierForm, supplierGridViewApi } from "../../../store/slices/supplierSlice";

const Suppliers = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;

  const GridView = useSelector((state) => state.supplier.isGridView);

  return (
    <>
      {GridView && GridView.data ? (
        <div className="row">
          <a className="box-image-cover cursor-pointer" onClick={() => dispatch(openNewSupplierForm())}>
            <div className="tabs-image">
              <img src={config.imagepath + "suppliers.png"} alt="" />
            </div>
            <div className="image-content">
              <h5>
                <i className="fal fa-plus me-2"></i> {t("add_new")}
              </h5>
            </div>
          </a>
          <div className="box-image-cover">
            <div className="tabs-image">
              <img src="assets/images/wella.png" alt="" />
            </div>
            <div className="image-content">
              <h5 className="fw-semibold mb-1">Wella</h5>
              <h5 className="mb-0 fw-normal">William Wella</h5>
            </div>
          </div>
          <div className="box-image-cover">
            <div className="dropdown d-inline-block setting-dropdown">
              <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                <i className="far fa-ellipsis-v"></i>
              </button>
              <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ minWidth: "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <a href="#" className="d-flex align-items-center edit-service">
                      <img src="assets/images/edit.png" className="me-3" alt="" />
                      Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center edit-service">
                      <img src="assets/images/sms.png" className="me-3" alt="" />
                      SMS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center edit-service">
                      <img src="assets/images/email.png" className="me-3" alt="" />
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tabs-image">
              <img src="assets/images/loma.png" alt="" />
            </div>
            <div className="image-content">
              <h5 className="fw-semibold mb-1">Loma</h5>
              <h5 className="mb-0 fw-normal">Alana Smith</h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="complete-box text-center d-flex flex-column justify-content-center my-md-5 my-4 bg-white">
          <div className="complete-box-wrp text-center ">
            <img src={config.imagepath + "service.png"} alt="" className="mb-md-4 mb-3" />
            <h4 className="mb-2 fw-semibold">
              {t("no_suppliers_have_been_created_yet")}
              <a className="add-suppliers ms-1 cursor-pointer">{t("please_create_one")}</a>.
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Suppliers;
