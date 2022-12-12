import styled from "styled-components";
import {colors} from "../../../../Styles/colors"
import { Link } from "react-router-dom";
import { BsFillBellFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

export const Navbar =styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.darkPurpleColor};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  padding: 0 2rem;
  
  
`;

export const NavLogo =styled(Link)`
margin-top: -1rem;
img{
  width: 10rem;
}
`;

export const NavItems = styled.div`
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

}

img{
  width: 2.7rem;
  height: 2.7rem;
  clip-path:  circle(40%);
}


`;
export const NavOptions = styled(Link)`
  color: ${colors.textMutedColor};
    text-decoration: none;
    position: relative;
    opacity: 0.9;
    padding: 2rem;

    &:hover{
      color: ${colors.bgWhite};
      opacity: 1;
      font-size: 600;
      transition: all .5s; 
    }
 `;

export const UserItems = styled.div`

`;

export const Notification = styled(BsFillBellFill)`
  text-align: center;
  color: ${colors.textMutedColor}; 
  
`;

export const MenuSession = styled(IoIosArrowDown)`
  color: ${colors.textMutedColor};
`;

export const NavToggle = styled.div`
  display: none;
  

  @media (max-width: 700px) {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

}
`;

export const Bar = styled.div`

  @media (max-width: 700px) {
    position: relative;
    width: 32x;
    height: 2px;
    background: ${colors.bgAlternative};

    &::before{
      width: 25px;
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
    
    .open{
      transform: translate(-40px);
      background: transparent;
    }
}

`;