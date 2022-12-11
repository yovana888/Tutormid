import styled from 'styled-components';
import { colors } from "../../Styles/colors";

export const Container = styled.div `
    padding:  20px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap:20px;
    height:100vh;
    >img{
        margin-left: 8%;
        @media screen and (max-width: 670px) {
            width: 360px;
        }
    }

`;

export const Title = styled.p `
    font-weight: 600;
    font-size: 20px;
    color:${colors.darkColor}
`

export const ContainerInline = styled.div `
   display:flex;
   flex-direction:row;
   gap:10px;
`;

export const Container50 = styled.div `
    width:50%;
    display:flex;
    flex-direction:column;
    gap:10px;
    padding-bottom:150px;
`;