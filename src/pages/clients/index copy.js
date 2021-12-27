import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// import storage from 'redux-persist/lib/storage';

import config from "../../config";
import ClientForm from "./Form";
import ClientDetailModal from "./Detail";
import ClientGridView from "./List/gridview";
import ClientListView from "./List/listview";
import { openNewClientForm, clientTabListView, clientTabGridView, clientViewApi, selectAllClient, closeClientDetailModal, clientSort, clientSortRemove } from "../../store/slices/clientSlice";
// import InfiniteScroll from "react-infinite-scroll-component";


const Clients = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clientSortRemove());
    dispatch(clientViewApi());
  }, [dispatch]);

  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const tabview = useSelector((state) => state.client.isTabView);
  const sort = useSelector((state) => state.client.isSort);

  const handleOpenNewClientForm = () => {
    dispatch(openNewClientForm());
  };

  const sorting = (props) => {
    dispatch(clientSort(props));
    dispatch(clientViewApi({ sort: props }));
  };

  return (
    <>
      <div className="page-content bg-pink service">
        <div className="row bg-white align-items-center">
          <div className="common-tab col-md-4 col-4 order-1">
            <ul className="nav nav-tabs mb-0 justify-content-start" role="tablist">
              <li className="nav-item">
                <a className="nav-link active cursor-pointer" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
                  {t("all")}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-md-0 mb-2 px-md-0 px-4 mt-md-0 mt-2 order-md-2 order-first">
            <div className="search search-radius">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="far fa-search"></i>
                </span>
                <input type="text" className="form-control search-input" placeholder={t("search")} />
                <a className="close cursor-pointer" style={{ display: "none" }}>
                  <i className="fal fa-times"></i>
                </a>
              </div>
              <div className="search-result dropdown-box">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <Link to="#" className="d-flex">
                      <div className="user-img me-2">
                        <img src={config.imagepath + "Avatar.png"} alt="" />
                      </div>
                      <div className="user-id">
                        <span className="user-name">Jo Smith</span>
                        <span className="user-id">jo.smith@gmail.com</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-flex">
                      <div className="user-img me-2">
                        <img src={config.imagepath + "Avatar.png"} alt="" />
                      </div>
                      <div className="user-id">
                        <span className="user-name">Jo Smith</span>
                        <span className="user-id">jo.smith@gmail.com</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-flex">
                      <div className="user-img me-2">
                        <img src={config.imagepath + "Avatar.png"} alt="" />
                      </div>
                      <div className="user-id">
                        <span className="user-name">Jo Smith</span>
                        <span className="user-id">jo.smith@gmail.com</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-8 text-end ps-0 mb-md-0 mb-2 order-3">
            <span className="list-view-lable me-1">{t("display_as")}</span>
            <ul className="nav nav-tabs mb-0 d-inline-block list-view-tab border-0 me-xl-3" role="tablist">
              <li className="nav-item d-inline-block">
                <a className={"nav-link border-0 cursor-pointer" + (tabview && tabview == "grid" ? " active" : "")} id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true" onClick={() => dispatch(clientTabGridView())}>
                  <img src={config.imagepath + "block-view.png"} alt="" />
                </a>
              </li>
              <li className="nav-item d-inline-block">
                <a className={"nav-link border-0 cursor-pointer" + (tabview && tabview == "list" ? " active" : "")} id="listview-tab" data-bs-toggle="tab" data-bs-target="#listview" type="button" role="tab" aria-controls="listview" aria-selected="true" onClick={() => dispatch(clientTabListView())}>
                  <img src={config.imagepath + "list-view.png"} alt="" />
                </a>
              </li>
            </ul>
            <a id="addclient-drawer-link" className="add-new-btn btn me-1 px-lg-4  cursor-pointer" onClick={handleOpenNewClientForm}>
              {t("new_client")}
            </a>
            <div className="dropdown d-inline-block setting-dropdown">
              <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                <i className="far fa-ellipsis-v"></i>
              </button>
              <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <a id="addclient-drawer-link" className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "import.png"} className="me-3" alt="" />
                      Import Clients
                    </a>
                  </li>
                  <li>
                    <a id="addsale-drawer-link" className="d-flex align-items-center cursor-pointer">
                      <img src={config.imagepath + "export.png"} className="me-3" alt="" />
                      Export Clients
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content list-view-content">
          <div className={"tab-pane" + (tabview && tabview == "grid" ? " show active" : "")} id="all">
            <div className="row">
              <a className="box-image-cover cursor-pointer" onClick={handleOpenNewClientForm}>
                <div className="tabs-image">
                  <img src={config.imagepath + "tabs-image.png"} alt="" />
                </div>
                <div className="image-content">
                  <h5>
                    <i className="fal fa-plus me-2"></i> {t("add_new")}
                  </h5>
                </div>
              </a>
              {/* <a className="box-image-cover client-detail cursor-pointer">
                <div className="tabs-image user-initial mx-auto">jd</div>
                <div className="image-content">
                  <h5 className="fw-semibold mb-1">Wella</h5>
                  <h5 className="mb-0 fw-normal">William Wella</h5>
                </div>
              </a> */}
              <ClientGridView currentUser={currentUser} />
            </div>
          </div>
          <div className={"tab-pane" + (tabview && tabview == "list" ? " show active" : "")} id="listview">
            
            <div className="table-responsive bg-white">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      <a className="cursor-pointer" onClick={() => sorting({ first_name: sort.first_name == "asc" ? "desc" : "asc" })}>
                        {t("name")}
                      </a>
                      <span className="down-up-arrow">
                        <i className={"fal fa-angle-up" + (sort.first_name == "asc" ? " text-dark" : "")}></i>
                        <i className={"fal fa-angle-down" + (sort.first_name == "desc" ? " text-dark" : "")}></i>
                      </span>
                    </th>
                    <th>{t("phone")}</th>
                    <th colSpan="2">{t("email")}</th>
                  </tr>
                </thead>
                <tbody>
                  <ClientListView currentUser={currentUser} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ClientForm />
        <ClientDetailModal />
      </div>
    </>
  );
};

export default Clients;
