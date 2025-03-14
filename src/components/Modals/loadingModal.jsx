/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { ClipLoader } from "react-spinners";

// Ensure to set the app element for accessibility reasons
Modal.setAppElement("#root");

const LoadingModal = ({ loading }) => {
  return (
    <Modal
      isOpen={loading}
      className="relative bg-transparent border-none outline-hidden"
      overlayClassName="fixed z-20 top-0 left-0 right-0 bottom-0 bg-[#000000]/50 flex items-center justify-center"
      contentLabel="Loading"
    >
      <ClipLoader color="#1F2937" size={50} />
    </Modal>
  );
};

export default LoadingModal;
