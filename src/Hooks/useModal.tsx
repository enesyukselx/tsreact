import { useContext } from "react";
import ModalContext from "../Components/ModalContext/ModalContext";

const useModal = () => {
    const { isModalOpen, toggleModal, modelContent, setContent } =
        useContext(ModalContext);
    return { isModalOpen, toggleModal, modelContent, setContent };
};

export default useModal;
