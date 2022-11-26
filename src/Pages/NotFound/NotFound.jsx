import React from 'react'
import Button from '../../Components/Elements/Button/Button'
import { Container, ContainerInline } from './Style'
import TextField from '../../Components/Elements/TextField/TextField'
import { TfiEmail } from "react-icons/tfi";
import { TiPlus } from "react-icons/ti";

export default function NotFounf() {
  return (
    <Container>
        NotFound
        <Button text='Prueba'  icon={<TiPlus />}/> <br />
        <Button text='Prueba'  icon={<TiPlus />} color='outline'/><br />
        
        <ContainerInline>
          <Button text='Prueba' color='info'  icon={<TiPlus />}/>
          <TextField name='prueba' placeholder='prueba'/>
        </ContainerInline><br />

        <TextField name='prueba2' label='Password' type='password'/><br />

        <TextField
          icon={<TfiEmail />}
          edge="end"
          label="Email"
          placeholder='Your Email'
        /><br />

        <TextField name='prueba2' label='100%' width100={true}/>


    </Container>
  )
}
