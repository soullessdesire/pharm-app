"use client";

import { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  return createPortal(
    <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-modal">
      {children}
    </div>,
    document.getElementById("modal")
  );
};
