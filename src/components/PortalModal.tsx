import React from "react";
import { createPortal } from "react-dom";

const PortalModal = ({ children }: { children: React.ReactNode }) => {
  const root = document.querySelector("#__next");

  return createPortal(children, root);
};

export default PortalModal;
