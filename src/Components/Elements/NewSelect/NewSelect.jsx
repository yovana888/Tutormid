import React, { FocusEventHandler } from "react";
import { colors } from "../../../Styles/colors";
import Select  from 'react-select' 


import classNames from "classnames";

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    boxShadow: "none",
    height:40,
    borderColor: state.isFocused ? colors.primaryColor : colors.borderInput,
    "&:hover": {
      borderColor: state.isFocused ? colors.primaryColor : colors.borderInput,
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? colors.bgLightPurple : "white",
      fontWeight: isSelected?500:400,
      color: isSelected
        ? colors.primaryColor
        : isDisabled
        ? colors.textMutedColor
        : colors.textColor,
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
  singleValue: (provided, state) => ({
    ...provided,
    color: colors.textColor,
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: colors.bgLightPurple,
    color: colors.primaryColor,
  })
};


export const NewSelect = ({
  className,
  isMulti = false,
  isSearchable = false,
  options,
  placeholder,
  value,
  onBlur,
  onChange,
  onFocus,
  isClearable = true,
  isDisabled = false,
  isInputSearch = false
}) => {
  return (
    <Select
      components={ isInputSearch?{ DropdownIndicator:() => null , IndicatorSeparator:() => null }:{} }
      className={classNames("Select option", className)}
      isMulti={isMulti}
      options={options}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      isSearchable={isSearchable}
      placeholder={placeholder}
      isClearable={isClearable}
      styles={colourStyles}
      isDisabled={isDisabled}
    />
  );
};
