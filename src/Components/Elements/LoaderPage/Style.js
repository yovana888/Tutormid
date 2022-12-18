import styled from "styled-components";
import { colors } from "../../../Styles/colors";
export const ConatinerLoading = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    opacity: 0.7;
    background-color: #fff;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpinerText = styled.h5`
   margin-left: 10px;
   color: ${colors.primaryColor};
`;