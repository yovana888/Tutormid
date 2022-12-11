import styled from "styled-components";
import { colors } from "../../../Styles/colors";

export const Card = styled.div`
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: ${colors.textColor};
  max-width: 340px;
  transition: transform 200ms ease-in;
  background: white;
  margin-bottom:2rem;
`;
