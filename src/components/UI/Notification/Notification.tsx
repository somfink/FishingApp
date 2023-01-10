import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { NotificationContainer } from "./Notification.styles";

type Props = {
  children: ReactNode;
};

const portalNotification = document.getElementById(
  "notification"
) as HTMLElement;

const Notification: FC<Props> = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <NotificationContainer>{children}</NotificationContainer>,
        portalNotification
      )}
    </>
  );
};

export default Notification;
