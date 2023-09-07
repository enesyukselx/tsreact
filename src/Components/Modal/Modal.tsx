import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import ModalContext from "../ModalContext/ModalContext";

const ModalScreen = () => {
    const { isModalOpen, toggleModal, modelContent } = useContext(ModalContext);

    return (
        <Modal show={isModalOpen} onHide={toggleModal}>
            {modelContent}
        </Modal>
    );
};

export default ModalScreen;
