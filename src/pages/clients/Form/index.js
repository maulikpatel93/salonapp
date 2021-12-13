import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";

// validation Formik
import * as Yup from "yup";
import { Formik, Form } from "formik";
import config from "../../../config";
import yupconfig from "../../../yupconfig";
import FloatLabelInputField from "../../../component/form/FloatLabelInputField";

import { clearMessage } from "../../../store/slices/message";

const ClientForm = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
    remember_me: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().label("Email").email().required(),
    password: Yup.string().min(6).max(16).label("Password").required(),
    remember_me: Yup.bool(),
  });
  yupconfig();

  const handleLogin = (formValue) => {
    const { email, password, remember_me } = formValue;
    setLoading(true);
    try {
      dispatch(login({ email, password, remember_me }));
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <Form>
          <div className="drawer client-drawer" id="addclient-drawer">
            <div className="drawer-wrp position-relative include-footer">
              <div className="drawer-header">
                <h2 className="mb-4 pe-md-5 pe-3">New Client</h2>
                <a className="close-drawer cursor-pointer">
                  <img src={config.imagepath + "close-icon.svg"} alt="" />
                </a>
              </div>
              <div className="drawer-body pb-md-5 pb-3">
                <div className="row">
                  <div className="col-md-7">
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">Mobile</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">Email Address</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="">Date of Birth</label>
                        <input type="text" className="form-control" />
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
