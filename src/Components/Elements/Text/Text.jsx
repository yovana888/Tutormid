import React from 'react'
import { Title, SubTitle } from './Style'

export default function Text({name, typeText='title', name2, className,children}) {
  return (
    <>
       {typeText=='title' && (<Title className={className}> {children} {name} <br /> {name2} </Title>)}
       {typeText=='subtitle' && (<SubTitle className={className}>{children} {name} <br /> {name2}</SubTitle>)}
    </>
  )
}
