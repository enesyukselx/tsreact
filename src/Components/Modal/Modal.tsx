import { Fragment, ReactNode, useContext } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import UserContext from "../UserContext/UserContext";
import { Button } from "react-bootstrap";

const portalElement = document.getElementById("overlays") as HTMLElement;

const ModalOverlay = ({ children }: { children: ReactNode }) => {
    const { isModalOpen, toggleModal } = useContext(UserContext);

    return (
        <Modal show={isModalOpen} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={toggleModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const ModalScreen = () => {
    const { modelContent } = useContext(UserContext);

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay>{modelContent}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default ModalScreen;
