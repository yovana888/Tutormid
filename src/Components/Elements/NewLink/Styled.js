import styled from "styled-components";
import { colors } from "../../../Styles/colors";

export const MenuItemLink = styled.span`
  text-decoration: none;
  color: ${colors.textColor}; 
  cursor:pointer;
  font-weight: 450;
  font-size: 18px;
  &:hover{
    color:${colors.primaryColor};
  }
  &.active{
    color:${colors.primaryColor};
    font-weight: 500;
  }
`
export const PurpleLink = styled.span`
    color:${colors.primaryColor};
    font-weight: 400;
    font-size: 16px;
    cursor:pointer;
    text-decoration: underline;
`;
