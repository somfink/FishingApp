import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { ModalSection } from "./Modal.styles";

type Props = {
  children: ReactNode;
};

const portalDiv = document.getElementById("modal") as HTMLElement;

const Modal: FC<Props> = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalSection>{children}</ModalSection>,
        portalDiv
      )}
    </>
  );
};

export default Modal;
