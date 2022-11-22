import ReactDOM from "react-dom";
import { ModalSection } from "./Modal.styles";

type Props = {
    children: React.ReactNode;
}

const portalDiv = document.getElementById('modal') as HTMLElement;

const Modal: React.FC<Props> = ({children}) => {
  return <>
  {ReactDOM.createPortal(<ModalSection>{children}</ModalSection>, portalDiv)}
  </>;
};

export default Modal;
