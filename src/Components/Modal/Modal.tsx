import Modal from "react-bootstrap/Modal";
import useModal from "../../Hooks/useModal";

const ModalScreen = () => {
    const { isModalOpen, toggleModal, modalTitle, modalContent } = useModal();

    return (
        <Modal show={isModalOpen} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalContent}</Modal.Body>
        </Modal>
    );
};

export default ModalScreen;
