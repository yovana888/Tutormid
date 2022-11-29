import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { colors } from "../../../Styles/colors";

export const Input = styled(Form.Control)`
    border-radius: 5px;
    color:${colors.textColor} !important;
    outline: none;
    transition: border .1s ease-in-out;
    &:focus {
        box-shadow: none;
        border: 1px solid #ab96db;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color:${colors.placeholderColor}
    }
`;


export const ContainerInline = styled.div`
    display:flex;
    flex-direction:row;
    gap:15px;
    justify-content: stretch;
    align-items:center;
    @media screen and (max-width: 750px) {
        flex-direction:column;
        width:100%;
    }
`