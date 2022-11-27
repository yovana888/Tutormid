import React, { useState } from 'react'
import {MenuItemLink, PurpleLink} from './Styled'
import { useNavigate } from 'react-router-dom';

interface Props {
    name: string;
    type?: 'menu' | 'link';
    onClick?: any;
    path?:string
}
export default function NewLink({name, type='link',  onClick, path}:Props) {
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
