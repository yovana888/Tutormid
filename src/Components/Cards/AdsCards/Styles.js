import styled from "styled-components";
import { colors } from "../../../Styles/colors";

export const BodyCard = styled.div`
display: flex;
border: 1px solid #D4D6DB;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
border-radius: 15px;
justify-content: space-between;
padding: 2.5rem 3.4rem;
cursor: pointer;
transition: all 0.3s ease-in-out;
align-items: center;
margin-bottom: 2rem;
background-color: ${colors.bgWhite};

&:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
};

.name {
    font-weight: 500;
    color: ${colors.nameTeacherColor};
}

.materia {
    font-weight: 400;
    color: ${colors.materiaColor};
}

.description {
    font-weight: 400;
    color: ${colors.cardDescriptionColor};
    font-size: 14px;
}

.icons-section {
    display: flex;
    justify-content: space-between;
}

.hours {
    color: ${colors.darkPrimaryColor};
    font-weight: 500;
}


`;

