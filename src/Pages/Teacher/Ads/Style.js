import styled from "styled-components";
import { colors } from "../../../Styles/colors";
import { AiOutlineEdit } from 'react-icons/ai';
import { FiEyeOff } from 'react-icons/fi';


export const AdsTeacher = styled.div`
    background-color: ${colors.bgLight2};
    padding: 4rem 0;
    font-family: 'Inter';

`;

export const Card = styled.div`
    background-color: ${colors.bgWhite};
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-bottom: 2rem;
    padding: 2rem 1.3rem;

    h4 {
        color: ${colors.darkColor};
        font-weight: 500;        
    }

    p {
        color: ${colors.textColor};
    }

    .active {
        color: ${colors.materiaColor};
        text-decoration: underline;
    }

/*--------- {ITEMS} -------------*/
    &.items {
        padding: 1rem;      
       
        .text-item {
            padding-left: 10px;
        }
        p {
            margin-bottom: 3px;
            color: ${colors.secondaryColor};
            font-size: 20px;
        }

        span {
            color: ${colors.bgPurple2};
            font-size: 20px;
        }
    }

/*--------- {ITEMS} -------------*/
    &.acerca{
        padding: 2.5rem;

        h4 {
            color: ${colors.nameTeacherColor};
            font-weight: 500;
        }

        p {
            color: ${colors.cardDescriptionColor};
            padding: 10px 5rem 0 0;
            font-size: 20px;
            
            
        }
    }
`;

export const Edit = styled(AiOutlineEdit)`
    font-size: 40;
    .svg {
        width: 30px;
    }
    
 
`;

export const Eye = styled(FiEyeOff)`
    font-size: 30px;
`;