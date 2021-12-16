import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useField } from "formik";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import InputMask from "react-input-mask";
import Select from "react-select";
import Autocomplete from "react-google-autocomplete";
import config from "../../config";

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

const TextareaField = ({ label, controlId, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="textarea" rows={3} {...field} {...props} isInvalid={!!meta.error} />
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

const SwitchField = ({ label, controlId, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Check {...field} {...props} label={label} type="switch" id={controlId} />
      </Form.Group>
    </>
  );
};
const FileInputField = ({ label, controlId, page, ...props }) => {
  const { t } = useTranslation();
  const [field, meta] = useField(props);
  const [selectedImage, setSelectedImage] = useState("");
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage('');
  };
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <div className="insert-photo d-flex flex-column justify-content-center align-items-center ms-md-auto" >
          <img src={selectedImage ? URL.createObjectURL(selectedImage) : config.imagepath + "addphoto-box.png"} alt="" className="mb-3"/>
          <button type="button" className={selectedImage ? "d-none" : "btn btn-sm position-relative" }>
            <Form.Control type="file" rows={3} {...field} {...props} isInvalid={!!meta.error} onChange={imageChange} />
            {label}
          </button>
          <button type="button" className={selectedImage ? "btn btn-sm position-relative" : 'd-none' } onClick={removeSelectedImage}>
            {t('remove')}
          </button>
          <Form.Control.Feedback type="invalid" className={selectedImage ? "d-none" : "d-block" }>
            {meta.error}
          </Form.Control.Feedback>
        </div>
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
        <Select {...field} {...props} isInvalid={!!meta.error} className={meta.touched && meta.error ? "is-invalid" : ""} isClearable={true} onChange={handler} options={options} onBlur={() => helpers.setTouched(true)} classNamePrefix={"my-custom-react-select"} />
        <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

const MapAddressField = ({ label, controlId, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend" className="bg-white text-secondary">
            <i className="far fa-search"></i>
          </InputGroup.Text>
          <Form.Control {...field} {...props} isInvalid={!!meta.error} aria-describedby="inputGroupPrepend" className="search-input" />
          <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};


const DatePickerField = ({ label, controlId, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...field} {...props} isInvalid={!!meta.error} />
        <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export { FloatLabelInputField, InputField, SelectField, ReactSelectField, MapAddressField, TextareaField, SwitchField, FileInputField, DatePickerField };
