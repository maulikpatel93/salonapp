import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import ClientForm from "./Form";

const Clients = () => {
  return (
    <>
      <div className="page-content bg-pink service">
        <div className="row bg-white align-items-center">
          <div className="common-tab col-md-4 col-4 order-1">
            <ul className="nav nav-tabs mb-0 justify-content-start" role="tablist">
              <li className="nav-item">
                <a className="nav-link active cursor-pointer" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
                  All
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
                <input type="text" className="form-control search-input" placeholder="Search" />
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
            <span className="list-view-lable me-1">Display as:</span>
            <ul className="nav nav-tabs mb-0 d-inline-block list-view-tab border-0 me-xl-3" role="tablist">
              <li className="nav-item d-inline-block">
                <a className="nav-link active border-0 cursor-pointer" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
                  <img src={config.imagepath + "block-view.png"} alt="" />
                </a>
              </li>
              <li className="nav-item d-inline-block">
                <a className="nav-link border-0 cursor-pointer" id="listview-tab" data-bs-toggle="tab" data-bs-target="#listview" type="button" role="tab" aria-controls="listview" aria-selected="true">
                  <img src={config.imagepath + "list-view.png"} alt="" />
                </a>
              </li>
            </ul>
            <a id="addclient-drawer-link" className="add-new-btn btn me-1 px-lg-4  cursor-pointer">
              New Client
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
          <div className="tab-pane show active" id="all">
            <div className="row">
              <a className="box-image-cover cursor-pointer">
                <div className="tabs-image">
                  <img src={config.imagepath + "tabs-image.png"} alt="" />
                </div>
                <div className="image-content">
                  <h5>
                    <i className="fal fa-plus me-2"></i> Add New
                  </h5>
                </div>
              </a>
              <a className="box-image-cover client-detail cursor-pointer">
                <div className="tabs-image user-initial mx-auto">jd</div>
                <div className="image-content">
                  <h5 className="fw-semibold mb-1">Wella</h5>
                  <h5 className="mb-0 fw-normal">William Wella</h5>
                </div>
              </a>
              <div className="box-image-cover">
                <div className="dropdown d-inline-block setting-dropdown">
                  <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="far fa-ellipsis-v"></i>
                  </button>
                  <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ "minWidth": "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
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
                  <h5 className="fw-semibold mb-1">Loma</h5>
                  <h5 className="mb-0 fw-normal">Alana Smith</h5>
                </div>
              </div>
              <div className="box-image-cover">
                <div className="dropdown d-inline-block setting-dropdown">
                  <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="far fa-ellipsis-v"></i>
                  </button>
                  <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ "minWidth": "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                    <ul className="p-0 m-0 list-unstyled">
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
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
                  <h5 className="fw-semibold mb-1">Loma</h5>
                  <h5 className="mb-0 fw-normal">Alana Smith</h5>
                </div>
              </div>
              <div className="box-image-cover">
                <div className="dropdown d-inline-block setting-dropdown">
                  <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="far fa-ellipsis-v"></i>
                  </button>
                  <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ "minWidth": "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                    <ul className="p-0 m-0 list-unstyled">
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
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
                  <h5 className="fw-semibold mb-1">Loma</h5>
                  <h5 className="mb-0 fw-normal">Alana Smith</h5>
                </div>
              </div>
              <div className="box-image-cover">
                <div className="dropdown d-inline-block setting-dropdown">
                  <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="far fa-ellipsis-v"></i>
                  </button>
                  <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ "minWidth": "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                    <ul className="p-0 m-0 list-unstyled">
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
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
                  <h5 className="fw-semibold mb-1">Loma</h5>
                  <h5 className="mb-0 fw-normal">Alana Smith</h5>
                </div>
              </div>
              <div className="box-image-cover">
                <div className="dropdown d-inline-block setting-dropdown">
                  <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="far fa-ellipsis-v"></i>
                  </button>
                  <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ "minWidth": "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                    <ul className="p-0 m-0 list-unstyled">
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </a>
                      </li>
                      <li>
                        <a className="d-flex align-items-center edit-service cursor-pointer">
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
                  <h5 className="fw-semibold mb-1">Loma</h5>
                  <h5 className="mb-0 fw-normal">Alana Smith</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="listview">
            <div className="table-responsive bg-white">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th colSpan="2">
                      Last Name{" "}
                      <span className="down-up-arrow">
                        <i className="fal fa-angle-up"></i>
                        <i className="fal fa-angle-down"></i>
                      </span>
                    </th>
                    <th>
                      First Name
                      <span className="down-up-arrow">
                        <i className="fal fa-angle-up"></i>
                        <i className="fal fa-angle-down"></i>
                      </span>
                    </th>
                    <th>Phone</th>
                    <th colSpan="2">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pe-0" width="60px">
                      <div className="user-initial">jd</div>
                    </td>
                    <td>Doe</td>
                    <td>John</td>
                    <td>0400 000 000</td>
                    <td>
                      <Link to="mailto:email@gmail.com">email@gmail.com</Link>
                    </td>
                    <td className="ps-0 text-end" width="60px">
                      <div className="dropdown d-inline-block setting-dropdown">
                        <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                          <i className="far fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                          <ul className="p-0 m-0 list-unstyled">
                            <li>
                              <a className="d-flex align-items-center edit-service cursor-pointer">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-0" width="60px">
                      <div className="user">
                        <img src={config.imagepath + "Avatar.png"} alt="" />
                      </div>
                    </td>
                    <td>Doe</td>
                    <td>John</td>
                    <td>0400 000 000</td>
                    <td>
                      <Link to="mailto:email@gmail.com">email@gmail.com</Link>
                    </td>
                    <td className="ps-0 text-end" width="60px">
                      <div className="dropdown d-inline-block setting-dropdown">
                        <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                          <i className="far fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                          <ul className="p-0 m-0 list-unstyled">
                            <li>
                              <a className="d-flex align-items-center edit-service cursor-pointer">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-0" width="60px">
                      <div className="user">
                        <img src={config.imagepath + "Avatar.png"} alt="" />
                      </div>
                    </td>
                    <td>Doe</td>
                    <td>John</td>
                    <td>0400 000 000</td>
                    <td>
                      <Link to="mailto:email@gmail.com">email@gmail.com</Link>
                    </td>
                    <td className="ps-0 text-end" width="60px">
                      <div className="dropdown d-inline-block setting-dropdown">
                        <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                          <i className="far fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                          <ul className="p-0 m-0 list-unstyled">
                            <li>
                              <a className="d-flex align-items-center edit-service cursor-pointer">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-0" width="60px">
                      <div className="user">
                        <img src={config.imagepath + "Avatar.png"} alt="" />
                      </div>
                    </td>
                    <td>Doe</td>
                    <td>John</td>
                    <td>0400 000 000</td>
                    <td>
                      <Link to="mailto:email@gmail.com">email@gmail.com</Link>
                    </td>
                    <td className="ps-0 text-end" width="60px">
                      <div className="dropdown d-inline-block setting-dropdown">
                        <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                          <i className="far fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                          <ul className="p-0 m-0 list-unstyled">
                            <li>
                              <a className="d-flex align-items-center edit-service cursor-pointer">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-0" width="60px">
                      <div className="user">
                        <img src={config.imagepath + "Avatar.png"} alt="" />
                      </div>
                    </td>
                    <td>Doe</td>
                    <td>John</td>
                    <td>0400 000 000</td>
                    <td>
                      <Link to="mailto:email@gmail.com">email@gmail.com</Link>
                    </td>
                    <td className="ps-0 text-end" width="60px">
                      <div className="dropdown d-inline-block setting-dropdown">
                        <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                          <i className="far fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                          <ul className="p-0 m-0 list-unstyled">
                            <li>
                              <a className="d-flex align-items-center edit-service cursor-pointer cursor-pointer">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <ClientForm />
      </div>

    </>
  );
};

export default Clients;