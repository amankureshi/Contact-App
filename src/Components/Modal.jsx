import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" grid place-items-center z-40 backdrop-blur h-screen w-screen absolute top-0">
          <div className="relative m-auto z-50 min-h-[200px] min-w-[30%] bg-white p-4 rounded-md">
            <div className="flex justify-end">
              <IoClose
                onClick={onClose}
                className="text-3xl cursor-pointer text-red-600"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
