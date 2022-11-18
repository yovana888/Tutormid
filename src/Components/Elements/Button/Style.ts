import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { colors } from '../../../Styles/colors';


export const StyledButton = styled(Button)`
  color: white;
  &:hover{
   color:white; 
  }


  &.primary{ 
    background-color: ${colors.primaryColor};
    &:hover{
    background: ${colors.darkPrimaryColor}; 
  }
  
  } 

  &.secondary{ 
    background-color: ${colors.secondaryColor};
  } 
  
`;


