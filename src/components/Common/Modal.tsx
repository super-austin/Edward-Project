//  External Depedencies
import { FC, PropsWithChildren } from "react";

//  Icons
import CloseIcon from "@images/close.svg";

//  Types & Interfaces
interface IModal {
  setOpenModal: (isOpen: boolean) => void;
}

const Modal: FC<IModal & PropsWithChildren> = ({ setOpenModal, children }) => {
  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="relative max-w-xl p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex flex-row justify-end items-center gap-3">
              <CloseIcon
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className="sm:flex">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
