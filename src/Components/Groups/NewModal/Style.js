import styled from "styled-components";
import {Modal} from "react-bootstrap";
import { colors } from "../../../Styles/colors";

export const NewHeaderModal = styled(Modal.Header)`
   color:${colors.darkColor};
   border: none;
`;

export const NewBodyModal = styled(Modal.Body)`
   padding-left:2.5rem;
   padding-right:2.5rem;
   padding-top:0.2rem;
   padding-bottom:2rem;
`;

export const ModalTitle = styled.h6`
  margin-top:20px;
  margin-left:15px;
  font-size:21px;
`;
