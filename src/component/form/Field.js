import React, { useState } from "react";
import { useField } from "formik";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputMask from "react-input-mask";
import Select from "react-select";
import { ErrorMessage } from "formik";

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
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as={InputMask} {...field} {...props} isInvalid={!!meta.error} />
        <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

const SelectField = ({ label, controlId, options, ...props }) => {
  const [field, meta] = useField(props);
  let List =
    options.length > 0 &&
    options.map((item, i) => {
      return (
        <option key={i} value={item.value}>
          {item.label}
        </option>
      );
    });
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" {...field} {...props} isInvalid={!!meta.error}>
          <option key="0" value="">
            {props.placeholder}
          </option>
          {List}
        </Form.Control>
        <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

const ReactSelectField = ({ label, controlId, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [valueState, setValueState] = useState(null);
  const handler = (event) => {
    helpers.setValue(event);
    setValueState(event);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Select {...field} {...props} isInvalid={!!meta.error} className={meta.touched && meta.error ? "is-invalid" : ""} isClearable={true}  onChange={handler} options={options} onBlur={() => helpers.setTouched(true)}/>
        <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export { FloatLabelInputField, InputField, SelectField, ReactSelectField };
