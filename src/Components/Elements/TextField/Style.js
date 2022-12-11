import styled from "styled-components";
import { colors } from "../../../Styles/colors";

const styles = () => (`
    padding: 8px 14px;
    display: inline-block;
    border-radius: 5px;
    box-sizing: border-box;
    color:${colors.textColor};
    outline: none;
    transition: border .1s ease-in-out;
    &:focus {
        border: 1px solid #5C4D9C;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color:${colors.placeholderColor}
    }
`);

export const TextField = styled.input`
    ${styles()}
`;

export const Label = styled.span`
    color:${colors.secondaryColor};
   
`

export const TextTareaField = styled.textarea`
    ${styles()}
`;

export const ContainerTextField = styled.div`
    span {
        margin-bottom: 8px;
        display: block;
    }
`;

export const Input = styled.input`
    ${styles()}
    border: none;
    &:focus {
        border: none;
    }
`;

export const ContainerInput = styled.div`
    ${styles()}
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border: 1px solid ${({ isFocus }) => isFocus ? colors.primaryColor : colors.borderInput};
    ${({ edge }) => edge && (edge === 'start' ? 'padding-left: 12px; color:#B2BBCB' : 'padding-right: 12px; color:#B2BBCB')};
    svg {
        cursor: pointer;
    }
    input{
        width: 100%;
    }
`;