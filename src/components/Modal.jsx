import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="p-10 rounded-lg relative">
        <button className="absolute top-2 right-2 text-gray-700 bg-[#00ff00ff] border-none rounded-3xl pb-2 pr-3 pl-3 font-extrabold text-2xl cursor-pointer" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
