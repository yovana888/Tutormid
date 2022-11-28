import React, { FocusEventHandler } from "react";
import { colors } from "../../../Styles/colors";
import {
  ActionMeta,
  default as ReactSelect,
  MultiValue,
  OnChangeValue,
  SingleValue,
} from "react-select";

import classNames from "classnames";

export interface ISelectOption {
  value: string;
  label: string;
}

export type isMultiType = true | false;

const colourStyles = {
  control: (styles: any, state: any) => ({
    ...styles,
    boxShadow: "none",
    height:40,
    borderColor: state.isFocused ? colors.primaryColor : colors.borderInput,
    "&:hover": {
      borderColor: state.isFocused ? colors.primaryColor : colors.borderInput,
    },
  }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
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
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: colors.textColor,
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: colors.bgLightPurple,
    color: colors.primaryColor,
  })
};

export interface ISelectProps {
  className?: string;
  isMulti?: isMultiType;
  options: ISelectOption[];
  placeholder?: string;
  value?: SingleValue<ISelectOption> | MultiValue<ISelectOption>;
  isSearchable?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (
    value: OnChangeValue<ISelectOption, isMultiType>,
    action: ActionMeta<ISelectOption>
  ) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  isClearable?: boolean;
  isDisabled?: boolean;
  isInputSearch?:boolean
}

export const Select: React.FC<ISelectProps> = ({
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
    <ReactSelect
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
