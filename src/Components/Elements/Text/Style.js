import styled from "styled-components";
import { colors } from "../../../Styles/colors";

export const Title = styled.h1`
  color: ${colors.darkColor};
`;

export const SubTitle = styled.span`
  color: ${colors.darkColor};
  margin-bottom: 18px;
  font-size:17px;

  > svg {
      color:#FFC538;
      margin-right:19px;
      font-size:17px;
    }

`;
