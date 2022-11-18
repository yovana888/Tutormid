import React from 'react'
import { StyledButton } from './Style'


export default function NewButton({text, color='primary', type='button', onClick }) {
 
  return (
    <>
        <StyledButton variant="light" 
        className={color} 
        type={type} 
        onClick={onClick} >
           {text} 
           </StyledButton>
        
    </>
    
  )
}
