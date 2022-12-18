import Dropdown from 'react-bootstrap/Dropdown';
import { colors } from '../../../Styles/colors';
import styled from "styled-components";

export const NewDropdown = styled(Dropdown)`
    height:40px !important;
`

export const ButtonDropdown = styled(Dropdown.Toggle)`
   height:40px;
   border-radius:5px;
   background:white;
   border:1px solid ${colors.borderInput};
   color:${colors.textColor};
   text-decoration:none;
   &:hover, &:active {
      background:white;
      border:1px solid ${colors.borderInput};
      color:${colors.textColor};
   }

`
