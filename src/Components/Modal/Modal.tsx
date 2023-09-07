import Modal from "react-bootstrap/Modal";
import useModal from "../../Hooks/useModal";

const ModalScreen = () => {
    const { isModalOpen, toggleModal, modelContent } = useModal();

    return (
        <Modal show={isModalOpen} onHide={toggleModal}>
            {modelContent}
        </Modal>
    );
};

export default ModalScreen;
