import styled from "styled-components";
import { colors } from "../../../Styles/colors";

export const NewCard = styled.div`
  position: relative;
  margin-bottom:4rem;
`;
export const ContainerIcon = styled.div`
  color: white;
  width: 50px;
  height: 50px;
  padding: 15px;
  border-radius: 8px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-left:20px;
  &.purple{
    background: ${colors.bgPurple2};
  };
  &.blue{
    background: ${colors.blueColor};
  };
  &.green{
    background: ${colors.greenColor};
  };
  &.yellow{
    background: ${colors.yellowColor};
  }
`;

export const Card = styled.div`
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: ${colors.textColor};
  max-width: 310px;
  transition: transform 200ms ease-in;
  background: white;
`;
export const Title = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: ${colors.primaryColor};
`;
