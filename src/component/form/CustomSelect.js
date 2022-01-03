import { FieldProps } from "formik";
import React from "react";
import Select from "react-select";

// interface Option {
//   label: string;
//   value: string;
// }

// interface CustomSelectProps extends FieldProps {
//   options: OptionsType;
//   isMulti?: boolean;
//   className?: string;
//   placeholder?: string;
// }

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}) => {
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? option ? (option).map((item) => item.value) : ''
        : option ? (option).value : ''
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : ("");
    }
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '',
      borderWidth: state.isFocused ? '0' : '0',
    }),
    control: (provided, state) => ({
      ...provided,
      borderWidth: state.isFocused ? '0px' : '1px'
    }),
  }

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      isClearable
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          border:'1px',
          primary25: '#F4EEEB',
          primary: '#8C1C4D',
        },
      })}
    />
  );
};

export default CustomSelect;
