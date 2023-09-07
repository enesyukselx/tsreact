import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import useModal from "../../Hooks/useModal";

const ModalLoading = () => {
    const { toggleModal } = useModal();

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>&nbsp;</Modal.Title>
            </Modal.Header>
            <Modal.Body className="m-auto">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                    Close
                </Button>
            </Modal.Footer>
        </>
    );
};

export default ModalLoading;
