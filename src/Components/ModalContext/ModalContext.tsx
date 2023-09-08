import React from "react";

interface IModalContext {
    isModalOpen: boolean;
    toggleModal: () => void;
    modalTitle?: string;
    setTitle?: (title: string) => void;
    modalContent: React.ReactNode | undefined;
    setContent?: (Content: React.ReactNode) => void;
}

const ModalContext = React.createContext<IModalContext>({
    isModalOpen: false,
    toggleModal: () => {},
    modalTitle: undefined,
    setTitle: () => {},
    modalContent: undefined,
    setContent: () => {},
});

export default ModalContext;
