import React, { useState } from "react";
import NewModal from '../../NewModal/NewModal';
import Button from '../../../../Components/Elements/Button/Button'
interface Props {
    toggle: any;
    isOpen: boolean;
}

export default function ModalLogin({ isOpen, toggle }: Props) {
  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={'Title Modal'}>
        <>
          <span>Contenido Modal :v</span><br /><br />
          <Button text="Btn Large 100%" size="lg-size" /> 
        </>
    </NewModal>
  )
}
