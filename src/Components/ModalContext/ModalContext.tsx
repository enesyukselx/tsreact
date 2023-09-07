import React from "react";

interface IModalContext {
    isModalOpen: boolean;
    toggleModal: () => void;
    modelContent: React.ReactNode | undefined;
    setContent?: (Content: React.ReactNode) => void;
}

const ModalContext = React.createContext<IModalContext>({
    isModalOpen: false,
    toggleModal: () => {},
    modelContent: undefined,
    setContent: () => {},
});

export default ModalContext;
