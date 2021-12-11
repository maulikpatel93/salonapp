import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";

const Clients = () => {
  return (
    <>
      <div className="page-content bg-pink service">
        <div className="row bg-white align-items-center">
          <div className="common-tab col-md-4 col-4 order-1">
            <ul className="nav nav-tabs mb-0 justify-content-start" role="tablist">
              <li className="nav-item">
                <Link to="javascript:void(0)" className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
                  All
                </Link>
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
                <Link to="javascript:void(0)" className="close" style={{ display: "none" }}>
                  <i className="fal fa-times"></i>
                </Link>
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
                <Link to="javascript:void(0)" className="nav-link active border-0" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
                  <img src={config.imagepath + "block-view.png"} alt="" />
                </Link>
              </li>
              <li className="nav-item d-inline-block">
                <Link to="javascript:void(0)" className="nav-link border-0" id="listview-tab" data-bs-toggle="tab" data-bs-target="#listview" type="button" role="tab" aria-controls="listview" aria-selected="true">
                  <img src={config.imagepath + "list-view.png"} alt="" />
                </Link>
              </li>
            </ul>
            <Link to="javascript:void(0)" id="addclient-drawer-link" className="add-new-btn btn me-1 px-lg-4">
              New Client
            </Link>
            <div className="dropdown d-inline-block setting-dropdown">
              <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                <i className="far fa-ellipsis-v"></i>
              </button>
              <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <Link to="javascript:void(0)" id="addclient-drawer-link" className="d-flex align-items-center">
                      <img src={config.imagepath + "import.png"} className="me-3" alt="" />
                      Import Clients
                    </Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0)" id="addsale-drawer-link" className="d-flex align-items-center">
                      <img src={config.imagepath + "export.png"} className="me-3" alt="" />
                      Export Clients
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content list-view-content">
          <div className="tab-pane show active" id="all">
            <div className="row">
              <Link to="javascript:void(0)" className="box-image-cover">
                <div className="tabs-image">
                  <img src={config.imagepath + "tabs-image.png"} alt="" />
                </div>
                <div className="image-content">
                  <h5>
                    <i className="fal fa-plus me-2"></i> Add New
                  </h5>
                </div>
              </Link>
              <Link to="javascript:void(0)" className="box-image-cover client-detail">
                <div className="tabs-image user-initial mx-auto">jd</div>
                <div className="image-content">
                  <h5 className="fw-semibold mb-1">Wella</h5>
                  <h5 className="mb-0 fw-normal">William Wella</h5>
                </div>
              </Link>
              <div className="box-image-cover">
                <div className="dropdown d-inline-block setting-dropdown">
                  <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="far fa-ellipsis-v"></i>
                  </button>
                  <div className="dropdown-menu dropdown-box dropdown-menu-end" style={{ "minWidth": "116px" }} aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                    <ul className="p-0 m-0 list-unstyled">
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center">
                          <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                          Email
                        </Link>
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
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                          Email
                        </Link>
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
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                          Email
                        </Link>
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
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                          Email
                        </Link>
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
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "sms.png"} className="me-3" alt="" />
                          SMS
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                          <img src={config.imagepath + "email.png"} className="me-3" alt="" />
                          Email
                        </Link>
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
                              <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </Link>
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
                              <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </Link>
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
                              <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </Link>
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
                              <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </Link>
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
                              <Link to="javascript:void(0)" className="d-flex align-items-center edit-service">
                                <img src={config.imagepath + "edit.png"} className="me-3" alt="" />
                                Edit
                              </Link>
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
        
      </div>

    </>
  );
};

export default Clients;
