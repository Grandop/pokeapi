import CreatableSelect from "react-select/creatable";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { SingleValue } from "react-select";

type SelectProps = {
  options: string[];
  onChange: (
    e: SingleValue<{
      value: string;
      label: string;
    }>
  ) => void;
};

export const Select = ({ options, onChange }: SelectProps) => {
  return (
    <>
      <CreatableSelect
        isClearable
        onChange={onChange}
        options={options.map((option) => ({
          value: capitalizeFirstLetter(option),
          label: capitalizeFirstLetter(option)
        }))}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "none",
            borderColor: state.isFocused ? "white" : "white",
            height: "3.5rem",
            width: "100%",
            outline: "none",
            borderRadius: "10px",
            alignSelf: "center"
          }),
          option: (provided, state) => ({
            ...provided,
            color: state.isFocused ? "blue" : "black"
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "white"
          })
        }}
      />
    </>
  );
};
