'use client';   //if we use useState in app components that means we have to define as use client

import { IoMdClose } from 'react-icons/io';
import { useCallback, useEffect, useState } from "react";
import Button from '../Button';

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
            return;     //break the fnctn not allow anything to happen once click on the close button. now turn our local set model to false
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();      // adding onClose here cz will add some animation. to delay onClose
        }, 300);
    }, [disabled, onClose]);    

    //Submit
    const handleSubmit = useCallback(() => {
        if(disabled){
            return;
        }
        onSubmit()
    }, [disabled, onSubmit]);

    //Now with the secondary action, button
    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction ){
            return;
        }
        //its not disabled and have secondaryAction
        secondaryAction();
    },[disabled, secondaryAction]);

        if(!isOpen){
            return null;
        }

    return(
        <>
        <div
        className="
            justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto 
            fixed 
            inset-0 
            z-50 
            outline-none 
            focus:outline-none
            bg-neutral-800/70
            "
        >
            <div
            className="
                relative 
                w-full
                md:w-4/6
                lg:w-3/6
                xl:w-2/5
                my-6
                mx-auto 
                h-full 
                lg:h-auto
                md:h-auto
                "
            >
                {/* CONTENT */}
                <div
                className={`
                    translate
                    duration-300
                    h-full
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                `}
                >
                    <div
                    className="
                        translate
                        h-full
                        lg:h-auto
                        md:h-auto
                        border-0 
                        rounded-lg 
                        shadow-lg 
                        relative 
                        flex 
                        flex-col 
                        w-full 
                        bg-white 
                        outline-none 
                        focus:outline-none
                        "
                    >
                        {/* HEADER */}
                        <div
                        className="
                            flex 
                            items-center 
                            p-6
                            rounded-t
                            justify-center
                            relative
                            border-b-[1px] 
                            "
                        >
                            <button
                                className="
                                    p-1
                                    border-0 
                                    hover:opacity-70
                                    transition
                                    absolute
                                    left-9
                                    "
                                    onClick={handleClose}
                            >
                                <IoMdClose size={18} />
                            </button>
                            <div className="text-lg font-semibold">
                            {title}
                            </div>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        {/*footer*/}
                        <div className="flex flex-col gap-2 p-6">
                            <div 
                            className="
                                flex 
                                flex-row 
                                items-center 
                                gap-4 
                                w-full
                            "
                    >
                            <Button label="HIIISNciusa" />
                                </div>
                            <div/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}

export default Modal;