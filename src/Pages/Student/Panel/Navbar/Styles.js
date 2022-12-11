import styled from "styled-components";
import {colors} from "../../../../Styles/colors"

export const Navbar =styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.darkPurpleColor};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;