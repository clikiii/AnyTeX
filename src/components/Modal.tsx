import React, { ReactElement, ReactNode } from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'

interface ModalProps {
    isOpen: boolean;
    setClose: VoidFunction;
    header: string;
    children: ReactNode;
}

const PackedModal = ({ isOpen, setClose, header, children }: ModalProps) => {
    return (
        <>
            <Modal
                closeOnOverlayClick={false} 
                isOpen={isOpen} 
                onClose={setClose}
                size="xl"
            >
                <ModalOverlay />
                <ModalContent>

                    <ModalHeader>{header}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {children}
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    );
};

export default PackedModal;
