import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";

// third party
import * as Yup from "yup";
import { Formik, Form } from "formik";

// project imports
import useScriptRef from "../../hooks/useScriptRef";

//Formik
import FloatLabelInputField from "../../component/form/FloatLabelInputField";
// import WithTranslateFormErrors from "../../component/form/use-translate-form-errors";

//============================|| API JWT - LOGIN ||============================//
import { login } from "../../store/slices/auth";
import { clearMessage } from "../../store/slices/message";

const RestLogin = (props) => {
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

  const handleLogin = (formValue) => {
    const { email, password, remember_me } = formValue;
    setLoading(true);
    try {
      dispatch(login({ email, password, remember_me }))
        .unwrap()
        .then(() => {
          navigate("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } catch (err) {
      console.error(err);
      setLoading(false);
      // if (scriptedRef.current) {
      //   setStatus({ success: false });
      //   setErrors({ submit: err.message });
      //   setSubmitting(false);
      // }
    }
  };

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <Form>
            <div className="d-flex flex-row align-items-center justify-content-center mb-5">
              <h1 className="fw-normal mb-0 me-3">{t("sign_in")}</h1>
            </div>
            <FloatLabelInputField
              name="email"
              type="text"
              placeholder=""
              className={
                touched.email && errors.email
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="login-email"
              label={t("email")}
            />
            <FloatLabelInputField
              name="password"
              type="password"
              placeholder=""
              className={
                touched.password && errors.password
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="login-password"
              autoComplete="off"
              label={t("password")}
            />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  {t("remember_me")}
                </label>
              </div>
              <Link to="#!" className="text-body">
                {t("forgot_password?")}
              </Link>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                {t("login")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
  );
};

export default RestLogin;
