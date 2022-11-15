import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
// import { colors } from '../../../Styles/colors';


export const StyledButton = styled(Button)`
  
  /* background-color: colors.primaryColor; */
  &:hover{
    background: red; 
  }
`;

export const Container = styled.div`
      width: 100px; 
      height: 100px; 
      border: 1px solid red; 
`
