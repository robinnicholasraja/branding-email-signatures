import { ReactNode } from "react";

const Modal = ({ children, toggleModal, setToggleModal }: { children: ReactNode, toggleModal: boolean, setToggleModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div
      className={`${
        toggleModal ? "grid" : "hidden"
      } fixed top-0 left-0 w-full place-items-center h-full overflow-hidden bg-slate-100 z-10`}
    >
      {children}
      <button className="absolute top-4 right-4 px-4 py-2 border border-slate-600 rounded-md text-slate-700" onClick={() => setToggleModal(false)}>Close</button>
    </div>
  );
};

export default Modal;
