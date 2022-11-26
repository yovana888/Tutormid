import React, { useState } from "react";
import NewModal from '../../NewModal/NewModal';
import Button from '../../../../Components/Elements/Button/Button';
import NewLink from '../../../../Components/Elements/NewLink/NewLink';
import TextField from '../../../../Components/Elements/TextField/TextField';
import { TfiEmail } from "react-icons/tfi";

interface Props {
    toggle: any;
    isOpen: boolean;
}

export default function ModalLogin({ isOpen, toggle }: Props) {
  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={'Title Modal ppp'}>
        <>
        {/*Si quieres password type=password */}
          <TextField
            icon={<TfiEmail />}
            edge="end"
            label="Email"
            name="Email"
            type="text"
            placeholder="Your Email"
            width100={true}
          /><br />
          <NewLink name="Link prueba" onClick={()=>{console.log('hice click')}} type='link'/><br /><br />
          <Button text="Btn Large 100%" size="lg-size" />
        </>
    </NewModal>
  )
}
