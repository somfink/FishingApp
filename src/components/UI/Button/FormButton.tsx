import { FC, ReactNode } from "react";
import { FormBtn } from "./FormButton.styles";

type Props = {
  children: ReactNode;
};

const FormButton: FC<Props> = ({ children }) => {
  return (
    <>
      <FormBtn>{children}</FormBtn>
    </>
  );
};

export default FormButton;
