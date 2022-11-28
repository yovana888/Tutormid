import styled from "styled-components";

interface IText {
    isDark?: boolean;
    size?: number;
}

export const Text = styled.p`
    margin: 0;
    color: ${({ isDark=false }: IText) => isDark ? '#727070' : '#C5C4C4'};
    font-size: ${({ size }: IText) => size ? (size+'px') : '16px'};
`;

export const TextError =  styled.span`
    font-weight: 500;
    font-size: 11px;
    color: #E80B0B;
`;

export const TextSuccess =  styled.span`
    font-weight: 500;
    font-size: 11px;
    color: #00DE66;
`;
