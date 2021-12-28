import React from "react";
import Suppliers from "./suppliers";

const Products = () => {
  return (
    <>
      <div className="page-content bg-pink service">
        <div className="row bg-white align-items-center">
          <div className="common-tab col-md-4 col-7 order-1">
            <ul className="nav nav-tabs mb-0 justify-content-start" role="tablist">
              <li className="nav-item">
                <a href="#" className="nav-link active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product" type="button" role="tab" aria-controls="product" aria-selected="true">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" id="suppliers-tab" data-bs-toggle="tab" data-bs-target="#suppliers" type="button" role="tab" aria-controls="suppliers" aria-selected="true">
                  Suppliers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 py-md-0 py-2 px-md-0 px-4 order-md-2 order-3 search-wrp">
            <div className="search search-radius">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="far fa-search"></i>
                </span>
                <input type="text" className="form-control search-input" placeholder="Search" />
                <a href="#" className="close" style={{ display: "none" }}>
                  <i className="fal fa-times"></i>
                </a>
              </div>
              <div className="search-result dropdown-box">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <a href="#" className="d-flex">
                      <div className="user-img me-2">
                        <img src="assets/images/Avatar.png" alt="" />
                      </div>
                      <div className="user-id">
                        <span className="user-name">Jo Smith</span>
                        <span className="user-id">jo.smith@gmail.com</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <div className="user-img me-2">
                        <img src="assets/images/Avatar.png" alt="" />
                      </div>
                      <div className="user-id">
                        <span className="user-name">Jo Smith</span>
                        <span className="user-id">jo.smith@gmail.com</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex">
                      <div className="user-img me-2">
                        <img src="assets/images/Avatar.png" alt="" />
                      </div>
                      <div className="user-id">
                        <span className="user-name">Jo Smith</span>
                        <span className="user-id">jo.smith@gmail.com</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-end col-5 ps-0 order-md-3 order-2">
            <div className="tab-content p-0 d-inline-block">
              <div className="active">
                <a href="#" className="add-service btn me-md-3 me-1 add-new-btn px-xl-4">
                  New Product
                </a>
              </div>
              <div style={{ display: "none" }}>
                <a href="#" className="add-service btn me-md-3 me-1 add-new-btn px-xl-4">
                  New Supplier
                </a>
              </div>
            </div>
            <div className="dropdown d-inline-block setting-dropdown">
              <button className="dropdown-toggle dropdown-toggle-icon-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                <i className="far fa-ellipsis-v"></i>
              </button>
              <div className="dropdown-menu dropdown-box dropdown-menu-end" aria-labelledby="dropdownMenuButton1" data-popper-placement="bottom-end">
                <ul className="p-0 m-0 list-unstyled">
                  <li>
                    <a href="#" id="addclient-drawer-link" className="d-flex align-items-center">
                      <img src="assets/images/import.png" className="me-3" alt="" />
                      Import Services
                    </a>
                  </li>
                  <li>
                    <a href="#" id="addsale-drawer-link" className="d-flex align-items-center">
                      <img src="assets/images/export.png" className="me-3" />
                      Export Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="tab-content px-lg-4">
            <div className="tab-pane show active" id="product" role="tabpanel" aria-labelledby="product-tab">
              <div className="complete-box text-center d-flex flex-column justify-content-center my-md-5 my-4 bg-white">
                <div className="complete-box-wrp text-center ">
                  <img src="assets/images/service.png" alt="" className="mb-md-4 mb-3" />
                  <h4 className="mb-2 fw-semibold">
                    No products have been created yet.
                    <a href="#" className="add-product">
                      Please create one
                    </a>
                    .
                  </h4>
                </div>
              </div>
              <section>
                <div className="services-table-shadow table-responsive">
                  <table className="table bg-white">
                    <thead>
                      <tr>
                        <th style={{ width: "49%" }}>
                          <div className="services-name d-flex align-items-center">
                            Product Name
                            <span className="down-up-arrow">
                              <i className="fal fa-angle-up"></i>
                              <i className="fal fa-angle-down"></i>
                            </span>
                          </div>
                        </th>
                        <th style={{ textAlign: "center", width: "12%" }}>
                          <div className="d-flex align-items-center justify-content-center">
                            SKU
                            <span className="down-up-arrow">
                              <i className="fal fa-angle-up"></i>
                              <i className="fal fa-angle-down"></i>
                            </span>
                          </div>
                        </th>
                        <th style={{ textAlign: "center", width: "15%" }}>
                          <div className="d-flex align-items-center justify-content-center">
                            Supplier
                            <span className="down-up-arrow">
                              <i className="fal fa-angle-up"></i>
                              <i className="fal fa-angle-down"></i>
                            </span>
                          </div>
                        </th>
                        <th style={{ textAlign: "center", width: "10%" }}>
                          <div className="d-flex align-items-center justify-content-center">
                            Stock
                            <span className="down-up-arrow">
                              <i className="fal fa-angle-up"></i>
                              <i className="fal fa-angle-down"></i>
                            </span>
                          </div>
                        </th>
                        <th style={{ textAlign: "center", width: "12%" }}>
                          <div className="d-flex align-items-center justify-content-center">
                            Retail Price
                            <span className="down-up-arrow">
                              <i className="fal fa-angle-up"></i>
                              <i className="fal fa-angle-down"></i>
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="services-table-data">
                      <tr>
                        <td className="edit-product">
                          <div className="row align-items-center flex-nowrap">
                            <div className="pro-img">
                              <img src="assets/images/product-img.png" alt="" />
                            </div>
                            <div className="pro-title">
                              <h6 className="mb-1">Wella Fushion Intense Repair Shampoo</h6>
                            </div>
                          </div>
                        </td>
                        <td style={{ textAlign: "center" }}>WEL18672</td>
                        <td style={{ textAlign: "center" }}>Wella</td>
                        <td style={{ textAlign: "center" }}>12</td>
                        <td style={{ textAlign: "center" }}>$100.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <div className="tab-pane" id="suppliers" role="tabpanel" aria-labelledby="suppliers-tab">
              <Suppliers />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
