import React, { useState } from "react";
import NewModal from '../../NewModal/NewModal';
import Button from '../../../../Components/Elements/Button/Button'
interface Props {
    toggle: any;
    isOpen: boolean;
}

export default function ModalRegister({ isOpen, toggle }: Props) {
  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={'Title Modal 2'}>
        <>
          <span>Contenido Modal 2 :v</span><br /><br />
          <Button text="Btn Large 100%" size="lg-size" /> 
        </>
    </NewModal>
  )
}
