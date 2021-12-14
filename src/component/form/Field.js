import React, { useRef } from "react";
import { useField } from "formik";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputMask from "react-input-mask";

const FloatLabelInputField = ({ label, controlId, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FloatingLabel controlId={controlId} label={label} className="mb-3">
        <Form.Control {...field} {...props} isInvalid={!!meta.error} />
        <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
};

const InputField = ({ label, controlId, ...props }) => {
  const [field, meta] = useField(props);
  // console.log(<InputMask as={Form.Control}/>);
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as={InputMask} {...field} {...props} isInvalid={!!meta.error}/>
        <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-4">
        <label htmlFor={props.id}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? <div className="invalid-feedback">{meta.error}</div> : null}
      </div>
    </>
  );
};

export { FloatLabelInputField, InputField, SelectField };
