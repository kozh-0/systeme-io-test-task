"use client";
import { memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  // console.log("modal render");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const url = new URL(location.href);
      url.searchParams.delete("modalData");
      window.history.pushState(null, "", url.toString());
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return createPortal(
    <div
      className={`fixed flex items-center justify-center inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white absolute rounded-lg p-6 shadow-lg transition-transform duration-300 transform"
        style={{ transform: isOpen ? "scale(1)" : "scale(0.9)", top: "15%" }}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default memo(Modal);
