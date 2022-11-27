import React from 'react'
import { Title, SubTitle } from './Style'

interface Props {
    name: string;
    name2?:string;
    typeText?: 'title' | 'subtitle';
    className?:string;
    children?:JSX.Element
}
export default function Text({name, typeText='title', name2, className,children}:Props) {
  return (
    <>
       {typeText=='title' && (<Title className={className}> {children} {name} <br /> {name2} </Title>)}
       {typeText=='subtitle' && (<SubTitle className={className}>{children} {name} <br /> {name2}</SubTitle>)}
    </>
  )
}
