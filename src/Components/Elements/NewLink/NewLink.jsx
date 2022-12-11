import React, { useState } from 'react'
import {MenuItemLink, PurpleLink} from './Styled'
import { useNavigate } from 'react-router-dom';

export default function NewLink({name, type='link',  onClick, path}) {
  const navigate = useNavigate();

  function click(){
      if(path){
        navigate(path);
      }
      if(onClick){
        onClick();
      }
  }

  return (
    <>
      {type=='link' && (<PurpleLink onClick={()=>{click()}}>{name}</PurpleLink>)}
      {type=='menu' && (<MenuItemLink onClick={()=>{click()}}>{name}</MenuItemLink>)}
    </>
  )
}
