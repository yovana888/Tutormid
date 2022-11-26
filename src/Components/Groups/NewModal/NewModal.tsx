import React from "react";
import { Modal } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { NewHeaderModal,ModalTitle, NewBodyModal } from "./Style";

interface Props {
    toggle: any;
    isOpen:boolean;
    title:string;
    children: JSX.Element,
  }

  export default function NewModal({ isOpen,toggle,children,title }: Props) {

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