import { ReactNode, useState } from "react";
import ModelContext from "./ModalContext";
import ModalLoading from "../Modal/ModalLoading";

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modelContent, setModelContent] = useState<ReactNode | undefined>(
        <ModalLoading />
    );

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const setContent = (Content: ReactNode) => {
        toggleModal();
        setModelContent(<ModalLoading />);
        setTimeout(() => {
            setModelContent(Content);
            toggleModal();
        }, 300);
    };

    return (
        <ModelContext.Provider
            value={{
                isModalOpen,
                toggleModal,
                modelContent,
                setContent,
            }}
        >
            {children}
        </ModelContext.Provider>
    );
};

export default ModalContextProvider;
