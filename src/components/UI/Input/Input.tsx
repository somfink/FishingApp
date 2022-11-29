import { FC } from "react";
import { InputField } from "./Input.styles";

type Props = {
    type: string;
    placeholder?: string;
}

const Input: FC<Props> = ({type, placeholder}) => {
  return (
    <>
      <InputField type={type} placeholder={placeholder}/>
    </>
  );
};

export default Input;
