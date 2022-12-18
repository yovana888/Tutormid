import {colors} from '../../../Styles/colors'
import styled from 'styled-components';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { HiOutlineChat } from 'react-icons/hi';
import { BsCalendar2Week } from 'react-icons/bs';


export const PanelBody = styled.div`
    background-color: ${colors.bgLight2};
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    font-family: 'Inter'; 
    /* padding-bottom: 50px; */

    @media (min-width: 992px) {
        padding: 5.6rem 4.5rem 12rem 4.5rem;
    }

    @media (max-width: 991px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`;

export const Estudios = styled.div`
    font-family: 'Inter';   
    /* width: 26.9rem; */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: ${colors.bgWhite};
    margin: 2rem 0 0 0;
    padding: 2rem;
    
    h4 {
        color: ${colors.darkPrimaryColor};
    }

    .info-studies {
        display: flex;
        
        p {
            margin-left: 13px;
            color: ${colors.cardDescriptionColor};
            font-weight: 400;
        }

        .uni {
            color: ${colors.tittlePurpleColor};
        }
    }
    `;

export const Welcome = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: auto;
    background-color: ${colors.bgWhite};
    padding: 2rem;
h4{
    color: ${colors.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

.class-day {
    font-size: 20px;
    color: ${colors.bgPurple2};
}

.list-class {
    margin-top: 2rem;
}

.list-details {   
    
}

.list-info {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem 1.5rem 0;
    
    .hour {
        color: ${colors.materiaColor};
        margin-right: 20px;
        font-weight: 400;
        }

        .list-name {
            color: ${colors.darkColor};
            margin-right: 30px;
            font-weight: 400;
        }

        .materia-list {
            color: ${colors.textColor};
            font-weight: 300;
        }
}




`;

export const Solicitudes = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    /* overflow-x: scroll; */
    background-color: ${colors.bgWhite};
    /* padding: 2rem; */
    margin-top: 3.5rem;
    text-align: left;
    
h4{
    font-weight: 400;
    color: ${colors.darkPrimaryColor};
    padding-bottom: 1.4rem;
}

.empty-box{
    text-align: center;
    color: ${colors.textMutedColor};

}

.full-box{
    color: ${colors.textColor};
    padding: 2rem;
}

.title-studies {
    padding: 20px 20px 0 20px;
}

.fecha {
    color: ${colors.dateColor};
}


.name-info{
    padding-right: 2rem;
}

.status{
    font-weight: bold;
    padding-left: 5rem; 
}

.pending{
    color: ${colors.orangeColor};
}

.acept{
    color: ${colors.greenColor};
}

.cancel{
    color: ${colors.cancelColor};
}

.refused{
    color: ${colors.redColor};
}
`;
/*------------ICONS----------- */
export const Check = styled(BsFillCheckCircleFill)`
    color: ${colors.blueColor};    
`;

export const Chat = styled(HiOutlineChat)`
    color: ${colors.darkPrimaryColor};   
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const Calendar = styled(BsCalendar2Week)`
    color: ${colors.darkPrimaryColor};   
    width: 24px;
    height: 24px;
    cursor: pointer;
`;