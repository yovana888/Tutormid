import React from "react";
import { Modal } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { NewHeaderModal,ModalTitle, NewBodyModal } from "./Style";


  export default function NewModal({ isOpen,toggle,children,title }) {

    return (
        <Modal show={isOpen} onHide={toggle}  scrollable={true} centered>
            <NewHeaderModal>
                <ModalTitle> <IoIosArrowBack cursor={'pointer'} size={23} onClick={() => toggle()}/> {'   '} {title}</ModalTitle>
            </NewHeaderModal>

            <NewBodyModal>
                {children}
            </NewBodyModal>
        </Modal>
    );
    }