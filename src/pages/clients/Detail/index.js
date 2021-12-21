import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Appointment from "./Appointment";
import ClientForm from "../Form";
import Voucher from "./Voucher";
import Subscription from "./Subscription";
import Membership from "./Membership";
import Photos from "./Photos";
import Invoices from "./Invoices";
import Documents from "./Documents";
import Notes from "./Photos";

const ClientDetail = (props) => {
  const [loading, setLoading] = useState(false);
  const rightDrawerOpened = useSelector((state) => state.client.opened);
  const currentUser = props.currentUser;

  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="drawer client-detaildrawer p-0">
        <div className="drawer-wrp">
          <a className="close-drawer">
            <img src="assets/images/close-icon.svg" alt="" />
          </a>
          <div className="drawer-body row">
            <div className="left-menu col-md-5">
              <div className="d-flex mb-3">
                <div className="user-initial me-md-3 me-2">js</div>
                <div className="user-id">
                  <h3 className="user-name mb-0">Jo Smith</h3>
                  <span className="user-id">jo.smith@gmail.com</span>
                </div>
              </div>
              <div className="row gx-2 action-box mb-3 align-items-end">
                <a href="#" className="col text-center text-decoration-none">
                  <img src="assets/images/appoinment.png" alt="" />
                  <span className="d-block">Appointment</span>
                </a>
                <a href="#" className="col text-center text-decoration-none">
                  <img src="assets/images/sale-light.png" alt="" />
                  <span className="d-block">Sale</span>
                </a>
                <a href="#" className="col text-center text-decoration-none">
                  <img src="assets/images/email.png" alt="" />
                  <span className="d-block">Email</span>
                </a>
                <a href="#" className="col text-center text-decoration-none">
                  <img src="assets/images/sms.png" alt="" />
                  <span className="d-block">SMS</span>
                </a>
              </div>
              <ul className="nav flex-md-column nav-pills mb-0 list-unstyled" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="appoinment" data-bs-toggle="tab" data-bs-target="#appoinment-tab" type="button" role="tab">
                    appoinment
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="client-detail" data-bs-toggle="tab" data-bs-target="#client-detail-tab" type="button" role="tab">
                    Client Details
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="vouchers" data-bs-toggle="tab" data-bs-target="#vouchers-tab" type="button" role="tab">
                    vouchers
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="subscriptions" data-bs-toggle="tab" data-bs-target="#subscriptions-tab" type="button" role="tab">
                    subscriptions
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="memberships" data-bs-toggle="tab" data-bs-target="#memberships-tab" type="button" role="tab">
                    memberships
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="photos" data-bs-toggle="tab" data-bs-target="#photos-tab" type="button" role="tab">
                    photos
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="invoices" data-bs-toggle="tab" data-bs-target="#invoices-tab" type="button" role="tab">
                    invoices
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="documents" data-bs-toggle="tab" data-bs-target="#documents-tab" type="button" role="tab">
                    documents
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="notes" data-bs-toggle="tab" data-bs-target="#notes-tab" type="button" role="tab">
                    notes
                  </button>
                </li>
              </ul>
            </div>
            <div className="content col-md-7 position-relative">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="appoinment-tab" role="tabpanel" aria-labelledby="appoinment-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5">
                      Appointments <img src="assets/images/print.png" alt="" className="ms-md-2 ms-1" />
                    </h2>
                  </div>
                  <div className="content-wrp">
                    <Appointment />
                  </div>
                </div>
                <div className="tab-pane fade" id="client-detail-tab" role="tabpanel" aria-labelledby="client-detail-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5">
                      Edit Client <img src="assets/images/print.png" alt="" className="ms-md-2 ms-1" />
                    </h2>
                  </div>
                  <div className="content-wrp">
                    <ClientForm />
                  </div>
                </div>
                <div className="tab-pane fade" id="vouchers-tab" role="tabpanel" aria-labelledby="vouchers-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">
                      Vouchers{" "}
                      <a href="#" className="btn sell-gift-voucher ms-2">
                        Sell Gift Voucher
                      </a>
                    </h2>
                  </div>
                  <div className="content-wrp">
                        <Voucher />
                  </div>
                </div>
                <div className="tab-pane fade" id="subscriptions-tab" role="tabpanel" aria-labelledby="subscriptions-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">Subscriptions</h2>
                  </div>
                  <div className="content-wrp">
                    <Subscription />
                  </div>
                </div>
                <div className="tab-pane fade" id="memberships-tab" role="tabpanel" aria-labelledby="memberships-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">Memberships</h2>
                  </div>
                  <div className="content-wrp">
                    <Membership />
                  </div>
                </div>
                <div className="tab-pane fade" id="photos-tab" role="tabpanel" aria-labelledby="photos-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">Photos</h2>
                  </div>
                  <div className="content-wrp">
                    <Photos />
                  </div>
                </div>
                <div className="tab-pane fade" id="invoices-tab" role="tabpanel" aria-labelledby="invoices-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">
                      Invoices{" "}
                      <a href="#" className="btn btn-outline btn-sm ms-2">
                        Print Statement
                      </a>
                    </h2>
                  </div>
                  <div className="content-wrp">
                    <Invoices />
                  </div>
                </div>
                <div className="tab-pane fade" id="documents-tab" role="tabpanel" aria-labelledby="documents-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">Documents</h2>
                  </div>
                  <div className="content-wrp">
                    <Documents />
                  </div>
                </div>
                <div className="tab-pane fade" id="notes-tab" role="tabpanel" aria-labelledby="notes-tab">
                  <div className="drawer-header">
                    <h2 className="mb-4 pe-md-5 mb-lg-5">Notes</h2>
                  </div>
                  <div className="content-wrp">
                    <Notes/>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientDetail;
