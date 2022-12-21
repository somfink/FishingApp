import { FC, ReactNode } from "react";
import { FormBtn } from "./FormButton.styles";

type Props = {
  children: ReactNode;
  isValid?: boolean;
};

const FormButton: FC<Props> = ({ children, isValid }) => {
  return (
    <>
      <FormBtn disabled={!isValid}>{children}</FormBtn>
    </>
  );
};

export default FormButton;
