import styled from "styled-components";

export const BenefitStyled = styled.div `
    background-image: url("Rectangle 972.svg");
    display: flex;
    justify-content: end;
    padding-right: 3.3rem;
    padding-left: 3.3rem;
    align-items:center;
    color: #ffff;
    font-family: 'Inter';
    font-style: normal;
    background-repeat: no-repeat;
    background-size: cover;
    .text {
        padding-right: 3.5rem;
    }
`;

export const TextStyled = styled.span` 
    font-weight: 300;
    font-size: 18px;
    display: flex;
    padding-bottom: 1.5rem;
    align-items:center;
    gap:15px;
    .icon{
        color:#FFC538;
        font-size: 25px;
        @media screen and (max-width: 750px) {
           display:none;
        }
    }

`

export const ContainerText = styled.div` 
    padding-top:70px;
`

export const Image = styled.img`

`




