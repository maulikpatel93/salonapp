import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
// validation Formik
import * as Yup from "yup";
import { Formik, Form } from "formik";
import config from "../../../config";
import yupconfig from "../../../yupconfig";
import { InputField, MapAddressField, ReactSelectField, TextareaField, SwitchField, FileInputField, DatePickerField } from "../../../component/form/Field";

import { clearMessage } from "../../../store/slices/message";
import { closeclientform, clientCreate } from "../../../store/slices/clientSlice";

const ClientForm = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const rightDrawerOpened = useSelector((state) => state.client.opened);
  const handleCloseClientForm = () => {
    dispatch(closeclientform());
  };
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
    gender: null,
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
    // first_name: Yup.string().max(50).label(t("first_name")).required(),
    // last_name: Yup.string().max(50).label(t("last_name")).required(),
    // profile_photo: Yup.string().label(t("profile_photo")).required(),
    // email: Yup.string().max(100).label(t("email")).required(),
    // phone_number: Yup.string().matches(config.phone_number_pattern, t(config.phone_number_334_error)).label(t("phone_number")).required(),
    // date_of_birth: Yup.string().label(t("date_of_birth")).required(),
    // gender: Yup.object()
    //   .shape({
    //     value: Yup.string(),
    //     label: Yup.string(),
    //   })
    //   .required()
    //   .nullable(),
    // address: Yup.string().label(t("address")).required(),
    // street: Yup.string().label(t("street")).required(),
    // suburb: Yup.string().label(t("suburb")).required(),
    // state: Yup.string().label(t("state")).required(),
    // postcode: Yup.string().max(12).label(t("postcode")).required(),
    // description: Yup.string().label(t("description")).required(),
    // send_sms_notification: Yup.string().label(t("send_sms_notification")),
    // send_email_notification: Yup.string().label(t("send_email_notification")),
    // recieve_marketing_email: Yup.string().label(t("send_sms_notification")),
  });
  yupconfig();


  const handleClientSubmit = (values) => {
    const formData = new FormData(values);
    console.log(formData);
    setLoading(true);
    try {
      dispatch(clientCreate(formData));
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const genderOptions = [
    { value: "Male", label: t("male") },
    { value: "Female", label: t("female") },
    { value: "Other", label: t("other") },
  ];

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleClientSubmit}>
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <Form>
          <div className={"drawer client-drawer " + rightDrawerOpened} id="addclient-drawer">
            <div className="drawer-wrp position-relative include-footer">
              <div className="drawer-header">
                <h2 className="mb-4 pe-md-5 pe-3">New Client</h2>
                <a className="close-drawer cursor-pointer" onClick={handleCloseClientForm}>
                  <img src={config.imagepath + "close-icon.svg"} alt="" />
                </a>
              </div>
              <div className="drawer-body pb-md-5 pb-3">
                <div className="row">
                  <div className="col-md-7">
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <InputField type="text" name="first_name" value={values.first_name} label={t("first_name")} controlId="clientForm-first_name" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <InputField type="text" name="last_name" value={values.last_name} label={t("last_name")} controlId="clientForm-last_name" />
                      </div>
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <InputField type="text" name="phone_number" value={values.phone_number} mask="999-999-9999" label={t("phone_number")} controlId="clientForm-phone_number" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <InputField type="text" name="email" value={values.email} label={t("email")} controlId="clientForm-email" />
                      </div>
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <InputField type="date" name="date_of_birth" value={values.date_of_birth} label={t("date_of_birth")} controlId="clientForm-date_of_birth" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <ReactSelectField name="gender" label={t("gender")} options={genderOptions} placeholder={t("--select--")} controlId="clientForm-gender" />
                      </div>
                    </div>
                    <MapAddressField name="address" label={t("address")} value={values.address} placeholder={t("typing_address")} controlId="clientForm-address" />
                  </div>
                  <div className="col-md-5 mb-md-0 mb-3">
                    <FileInputField name="profile_photo" type="file" accept="image/*" label={t("profile_photo")} page="profile_photo" controlId="clientForm-profile_photo"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="mb-3">
                      <InputField type="text" name="street" value={values.street} label={t("street")} controlId="clientForm-street" />
                    </div>
                    <div className="row gx-2">
                      <div className="col-sm-6 mb-3">
                        <InputField type="text" name="suburb" value={values.suburb} label={t("suburb")} controlId="clientForm-suburb" />
                      </div>
                      <div className="col-sm-3 col-6 mb-3">
                        <InputField type="text" name="state" value={values.state} label={t("state")} controlId="clientForm-state" />
                      </div>
                      <div className="col-sm-3 col-6 mb-3">
                        <InputField type="text" name="postcode" value={values.postcode} label={t("postcode")} controlId="clientForm-postcode" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <TextareaField type="text" name="description" value={values.description} label={t("description")} controlId="clientForm-description" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="">Notifcations</label>
                      <SwitchField name="send_sms_notification" label={t("send_sms_notification")} controlId="clientForm-send_sms_notification" />
                      <SwitchField name="send_email_notification" label={t("send_email_notification")} controlId="clientForm-send_email_notification" />
                      <SwitchField name="recieve_marketing_email" label={t("recieve_marketing_email")} controlId="clientForm-recieve_marketing_email" />
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
