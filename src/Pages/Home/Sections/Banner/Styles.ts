import styled from "styled-components";
import { colors } from "../../../../Styles/colors";
import Col from "react-bootstrap/Col";

export const Container = styled.div`
  background: ${colors.bgLight};
  padding: 30px 3.3rem;
`;

export const ContainerImage = styled(Col)`
  display: flex;
  justify-content: end;
  align-items: center;
  img {
    width: 94%;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10%;
  padding-bottom: 30px;
  @media screen and (max-width: 750px) {
    padding-top: 5%;
    justify-content: center;
    align-items: center;
    text-align:center;
  }
`;

export const Title = styled.h1`
  color: ${colors.darkColor};
`;

export const SubTitle = styled.span`
  color: ${colors.darkColor};
  margin-bottom: 18px;
  font-size:17px;
`;
