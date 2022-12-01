import styled from "styled-components";
import { colors } from "../../../../Styles/colors";

export const AcercaBody = styled.div `
    background-color: ${colors.bgWhite};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.5rem, 53rem));
    width: 53rem;
    font-family: 'Inter';
    padding: 2rem 3rem;
    box-sizing: border-box;
    border: 1px solid #D4D6DB;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-left: 5rem;


.detailSection {
    display: flex;
    margin-bottom: 2.8rem;
}

.details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.image {
    height: 8rem;
    width: 8rem;
    margin-right: 2rem;
    border-radius: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.name {
    color: ${colors.nameTeacherColor};
    
}

.materia {
    color: ${colors.materiaColor};
    font-weight: 400;
}

.level {
    color: ${colors.primaryColor}; 
    font-weight: 400;
}

.acerca {
    color: ${colors.nameTeacherColor};
    margin-bottom: 1rem;
}

.description {
    font-weight: 400;
    color: ${colors.cardDescriptionColor};
    font-size: 22px;
}
`;