import styled from "styled-components";
import {colors} from "../../../Styles/colors"
import { Link } from "react-router-dom";
import { BsFillBellFill } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';


export const Navbar =styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.darkPurpleColor};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  padding: 0 2rem;
  font-family: 'Inter';

  
  
  .btn-primary {
    background-color: none;

    &:active {
      background-color: transparent;
    }
  }
  .dropdown-menu.item {
    &:hover {
      background: #B2ADCC;
      border-radius: 5px;
    }
  }

  a.dropdown-item {
    &:hover {
      background-color: transparent;
    }
  }

  .dropdown-toggle {
    background: ${colors.darkPurpleColor};
    border: none;
    padding: 0;
    margin: 0;
  }
  .dropdown-toggle::after {
    display: inline-block;
    content: none;
    
}

.dropdown-menu.show {
    margin-top: 10px;
    padding: 0;
    background: ${colors.darkPurpleColor};
    margin-left: 10px;
    border-color: ${colors.darkPurpleColor};


    &:hover::after {
      background: #B2ADCC;
 
    }

    &:hover::before {
      background: #B2ADCC;
    }


    a {
      padding: 1rem;

    }
}

  .space {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
  }

  /*-------------NavItems----------- */
  .nav-items {
    display: flex;
    
    justify-content: space-between;

    @media (max-width: 700px) {
      position: absolute;
      top: 60px;
      display: flex;
      flex-direction: column;
      background: ${colors.darkPurpleColor};
      left: 0;
      width: 100%;
      height: 50%;
      z-index: 1;
      transform: translateX(-100%);
      transition: all .45s;
    }
  }

  .nav-items.open {
      transform: translateX(0);
  }
 /*-------------Links----------- */
  a {
    color: ${colors.textMutedColor};
    text-decoration: none;
    position: relative;
    opacity: 0.9;
    padding: 0 2rem;

    &:hover{
      color: ${colors.bgWhite};
      opacity: 1;
      font-size: 600;
      transition: all .5s; 
    }

    &:hover::before {
      width: 100%;
    }

    @media (max-width: 700px) {
      &::before {
        background: transparent;
      }



    }
  }

  
/*-------------TOGGLE----------- */
  .nav-toggle {
    display: none;

    @media (max-width: 700px) {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
  }

/*-------------BAR----------- */
.bar {
  @media (max-width: 700px) {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 32px;
    height: 2px;
    background: ${colors.bgAlternative};
    transition: all 0.45s ease-in-out;

    &::before{
      width: 32px;
      transform: translateY(-8px);
      right: 0;
    }

    &::after{
      width: 32px;
      transform: translateY(8px);
    }
    
    &::before, &::after{
      content: "";
      position: absolute;
      height: 2px;
      background: #fff;
      border-radius: 2px;
      transition: all .45s ease-in-out;
    }
  }
}

.nav-toggle.open > .bar {
  transform: translateX(-40px);
  background: transparent;

  &:before {
      width: 32px;
      transform: rotate(45deg) translate(26px, -26px);
  }

  &::after {
    transform: rotate(-45deg) translate(26px, 26px);
  }
}

.dot {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
    padding: 5px;
    font-size: 12px;
    right: 128px;
    top: 28px;
    color: #fff; 

}
`;

export const NavLogo =styled(Link)`
  align-items: center;
  padding: 0;
  
img{
  width: fit-content;
    
  }

@media (max-width: 700px) {
  display: none;
}
`;

export const UserItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 

  img{
    width: 2.7rem;
    height: 2.7rem;
    clip-path:  circle(50%);
    margin-right: 9px;
  }

  @media (max-width: 700px) {
   
  }
`;

export const Notification = styled(BsFillBellFill)`
  text-align: center;
  color: ${colors.textMutedColor}; 
  margin-right: 1.3rem;
  font-size: 20px;

  &:hover{
    font-size: 23px;
  }


`;


export const MenuSession = styled(MdOutlineKeyboardArrowDown)`
  color: ${colors.textMutedColor};
  font-size: 25px;

  &:hover{
    color: #fff;
  }


`;