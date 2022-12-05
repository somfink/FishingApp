import { ChangeEvent, FC } from "react";
import { InputField } from "./Input.styles";

type Props = {
  type: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ type, placeholder, onChange, hasError, onBlur }) => {
  return (
    <>
      <InputField
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        hasError={hasError}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;
