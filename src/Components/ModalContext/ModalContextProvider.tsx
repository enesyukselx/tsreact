import { ReactNode, useState } from "react";
import ModelContext from "./ModalContext";
import ModalLoading from "../Modal/ModalLoading";

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState<string | undefined>(" ");
    const [modalContent, setModalContent] = useState<ReactNode | undefined>(
        <ModalLoading />
    );

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const setTitle = (title: string) => {
        setModalTitle(title);
    };

    const setContent = (Content: ReactNode) => {
        toggleModal();
        setModalContent(<ModalLoading />);
        setTimeout(() => {
            setModalContent(Content);
            toggleModal();
        }, 500);
    };

    return (
        <ModelContext.Provider
            value={{
                isModalOpen,
                toggleModal,
                modalTitle,
                setTitle,
                modalContent,
                setContent,
            }}
        >
            {children}
        </ModelContext.Provider>
    );
};

export default ModalContextProvider;
