import React from "react";
import { createPortal } from "react-dom";

const PortalModal = ({ children }: { children: React.ReactNode }) => {
  const modalRoot = document.querySelector("#modal-root");

  return createPortal(children, modalRoot);
};

export default PortalModal;
