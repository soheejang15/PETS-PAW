import React from "react";
import { createPortal } from "react-dom";

const PortalModal = ({ children }: { children: React.ReactNode }) => {
  const root = document.querySelector("#__next");

  if (root) {
    return createPortal(children, root);
  }

  return <></>;
};

export default PortalModal;
