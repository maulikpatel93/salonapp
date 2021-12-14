import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
// validation Formik
import * as Yup from "yup";
import { Formik, Form } from "formik";
import config from "../../../config";
import yupconfig from "../../../yupconfig";
import { InputField, SelectField } from "../../../component/form/Field";

import { clearMessage } from "../../../store/slices/message";
import { closeclientform, clientCreate } from "../../../store/slices/clientSlice";

const ClientForm = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const rightDrawerOpened = useSelector((state) => state.client.opened);
  const handleCloseClientForm = () => {
      dispatch(closeclientform());
  }
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    first_name: "",
    last_name: "",
    profile_photo: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
    address: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    description: "",
    send_sms_notification: "",
    send_email_notification: "",
    recieve_marketing_email: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().max(50).label(t("first_name")).email().required(),
    last_name: Yup.string().max(50).label(t("last_name")).required(),
    profile_photo: Yup.string().label(t("profile_photo")).required(),
    email: Yup.string().max(100).label(t("email")).required(),
    phone_number: Yup.string().matches(config.phone_number_pattern, t(config.phone_number_334_error)).label(t("phone_number")).required(),
    date_of_birth: Yup.string().label(t("date_of_birth")).required(),
    gender: Yup.string().label(t("gender")).required(),
    address: Yup.string().label(t("address")).required(),
    street: Yup.string().label(t("street")).required(),
    suburb: Yup.string().label(t("suburb")).required(),
    state: Yup.string().label(t("state")).required(),
    postcode: Yup.string().label(t("postcode")).required(),
    description: Yup.string().label(t("description")).required(),
    send_sms_notification: Yup.string().label(t("send_sms_notification")),
    send_email_notification: Yup.string().label(t("send_email_notification")),
    recieve_marketing_email: Yup.string().label(t("send_sms_notification")),
  });
  yupconfig();

  const handleClientSubmit = (formValue) => {
    setLoading(true);
    try {
      dispatch(clientCreate());
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleClientSubmit}>
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <Form>
          <div className={ "drawer client-drawer "+rightDrawerOpened } id="addclient-drawer">
            <div className="drawer-wrp position-relative include-footer">
              <div className="drawer-header">
                <h2 className="mb-4 pe-md-5 pe-3">New Client</h2>
                <a className="close-drawer cursor-pointer" onClick={ handleCloseClientForm }>
                  <img src={config.imagepath + "close-icon.svg"} alt="" />
                </a>
              </div>
              <div className="drawer-body pb-md-5 pb-3">
                <div className="row">
                  <div className="col-md-7">
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">{t('first_name')}</label>
                        <InputField type="text" name="first_name" value={values.first_name} />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">{t('last_name')}</label>
                        <InputField type="text" name="last_name" value={values.last_name}/>
                      </div>
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">{t('phone_number')}</label>
                        <InputField type="text" name="phone_number" value={values.phone_number} mask="999-999-9999"/>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">{t('email')}</label>
                        <InputField type="text" name="email" value={values.email}/>
                      </div>
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">{t('date_of_birth')}</label>
                        <InputField type="text" className="form-control" name="date_of_birth" value={values.date_of_birth}/>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">Gender</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="mb-3 search">
                      <label htmlFor="">Address</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="far fa-search"></i>
                        </span>
                        <input type="text" className="form-control search-input" placeholder="Start typing address" />
                        <a className="close cursor-pointer" style={{ display: "none" }}>
                          <i className="fal fa-times"></i>
                        </a>
                      </div>
                      <div className="search-result dropdown-box">
                        <ul className="p-0 m-0 list-unstyled">
                          <li>
                            <a className="d-flex cursor-pointer">
                              <div className="user-img me-2">
                                <img src={config.imagepath + "Avatar.png"} alt="" />
                              </div>
                              <div className="user-id">
                                <span className="user-name">Jo Smith</span>
                                <span className="user-id">jo.smith@gmail.com</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="d-flex cursor-pointer">
                              test
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 mb-md-0 mb-3">
                    <div className="insert-photo d-flex flex-column justify-content-center align-items-center ms-md-auto">
                      <img src={config.imagepath + "addphoto-box.png"} alt="" className="mb-3" />
                      <button className="btn btn-sm position-relative">
                        <input type="file" />
                        Upload Profile Photo
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="mb-3">
                      <label htmlFor="">Street</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">Suburb</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-sm-3 col-6 mb-3">
                        <label htmlFor="">State</label>
                        <select name="" id="" className="form-control">
                          <option value=""></option>
                          <option value="">Yes</option>
                          <option value="">No</option>
                        </select>
                      </div>
                      <div className="col-sm-3 col-6 mb-3">
                        <label htmlFor="">Postcode</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Client Notes</label>
                      <textarea id="my-textarea" className="form-control" name="" rows="5" placeholder="For example, allergic to latex"></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Notifcations</label>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  />
                        <span>Send SMS notifications to client</span>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <span>Send email notifications to client</span>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <span>Client agrees to receive marketing emails</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="drawer-footer">
                <div className="col-md-7 pe-2">
                  <input type="submit" className="btn w-100 btn-lg" value="Create Client" />
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ClientForm;
