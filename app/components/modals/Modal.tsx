'use client';   //if we use useState in app components that means we have to define as use client

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen, 
    onClose, 
    onSubmit, 
    title, 
    body, 
    actionLabel, 
    footer, 
    disabled,
    secondaryAction,
    secondaryActionLabel

}) => {
    const [showModal, setShowModal] = useState(isOpen); 

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    //check whether modal is disable, if disable we are going to break the function not allow anything happen once we click on the close button. otherwise turn our local setModal to false and open a timeout
    const handleClose = useCallback(() => {
        if(disabled){
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);    


    return(
        <div>
            modal
        </div>
    )
}

export default Modal;