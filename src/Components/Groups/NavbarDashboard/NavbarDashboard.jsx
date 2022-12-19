import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Navbar,NavLogo, Notification, MenuSession, UserItems} from './Style';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoMdExit } from 'react-icons/io';
import { AuthContext } from '../../../context/auth.context';
import { MenuTeacher, MenuStudent } from './MenuRol'
import { useNavigate } from 'react-router-dom';
export default function NavbarStd() {

  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [menu, setMenu] = useState(user.rol=="estudiante" ? MenuStudent : MenuTeacher)
  const navigate = useNavigate();

  return (
    <Navbar className='nav-bar'>
      <div className='space'>
        <NavLogo to="/"><img src="/LogoTutormid.svg" alt="" style={{ width:'130px'}}/></NavLogo>
        <div className={`nav-items ${isOpen && "open"}`}>
            {
              menu.map(item=>(
                <Link className='nav-options' to={item.path} key={item.id}>{item.name}</Link>
              ))
            }

        </div>

        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'>
          </div>
        </div>
      </div>
      <UserItems className='user-items'>  
        <img src={user.photo_url} alt="" />  
        
{/*-----------DROPDOWN SALIR---------------- */}
        <Dropdown>
          <Dropdown.Toggle>
            <MenuSession/>             
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{logout(); navigate('/')}}><IoMdExit/> Salir</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> 

      </UserItems> 
    </Navbar>
  )
}
