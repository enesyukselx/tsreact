import { useContext } from "react";
import ModalContext from "../Components/ModalContext/ModalContext";

const useModal = () => {
    const {
        isModalOpen,
        toggleModal,
        modalContent,
        setContent,
        modalTitle,
        setTitle,
    } = useContext(ModalContext);
    return {
        isModalOpen,
        toggleModal,
        modalContent,
        setContent,
        modalTitle,
        setTitle,
    };
};

export default useModal;
