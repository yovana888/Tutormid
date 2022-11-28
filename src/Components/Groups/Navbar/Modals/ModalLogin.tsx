import React, { useState } from "react";
import NewModal from '../../NewModal/NewModal';
import Button from '../../../../Components/Elements/Button/Button';
import NewLink from '../../../../Components/Elements/NewLink/NewLink';
import TextField from '../../../../Components/Elements/TextField/TextField';
import { TfiEmail } from "react-icons/tfi";
import { login } from '../../../../supabase/services/auth'

interface Props {
    toggle: any;
    isOpen: boolean;
}

export default function ModalLogin({ isOpen, toggle }: Props) {

  const loginByEmail=()=>{
    console.log('procesando...')
    login('yovana.ulc@gmail.com','Posgrado123#').then(res=>{
      console.log(res.data,'data user')
    }).catch(e=>{
      console.log(e)
    })
  
  }
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
            value=''
            width100={true}
          /><br />
          <NewLink name="Link prueba" onClick={()=>{console.log('hice click')}}/><br /><br />
          <Button text="Btn Large 100%" size="lg-size" onClick={()=> {loginByEmail()}}/>
        </>
    </NewModal>
  )
}
