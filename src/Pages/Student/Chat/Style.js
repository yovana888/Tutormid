import styled from "styled-components";
import { colors } from "../../../Styles/colors";
import { ImAttachment } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { MdInsertEmoticon } from 'react-icons/md';
import { FaRegImage } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { BiVideoRecording } from 'react-icons/bi';
import { TiArrowLeftThick } from 'react-icons/ti';




export const ChatMain = styled.div`
  height: 87vh;
	margin: 0;
  background-color: ${colors.bgLight2};
  font-family: 'Inter';

  .chat{
  margin-top: auto;
	margin-bottom: auto;
  background-color: rgba(119, 110, 243, 0.04);
  padding: 0;
  }

  .card {
    height: 80vh;
    background-color: #fff;
    border-radius: 0;
    border: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .contacts-card {
    border-radius: 10px 0 0 10px;
    
  }

  .card-header{
    border-radius: 10px 0 0 0;
	  border-bottom: 0;
    background-color: rgba(119, 110, 243, 0.04);
  }

  .search {
    border-radius: 10px 0 0 10px;
    color: ${colors.textColor};
    border-right: 0;
    height: 50px;

    &:focus {
      box-shadow: none;
      border: 1px solid ${colors.lineColor};
    }
  }

  .search-btn {
    border-radius: 0 10px 10px 0;
    background-color: #fff;
    border: 1px solid ${colors.lineColor};
    border-left: 0;
    height: 50px;
  }

  .card-chat {
    border-radius: 0 10px 10px 0;
  }

`;

export const ChatList = styled.div`
  background-color: rgba(119, 110, 243, 0.04);
  padding: 0.75rem 0;
  overflow-y: auto;
  white-space: nowrap;
  border-radius: 0 0 0 10px;

  .contacts {
    list-style: none;
    padding: 0;
    padding-top: 10px;
    
      li {
        padding: 5px 10px;
        margin-top: 5px;
        border-bottom: 1px solid ${colors.bgLight2};
        margin-right: 10px;

        .info-chatlist {  
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 5px;
                   
          p {
            font-weight: 500;
            color: ${colors.primaryColor};
            margin-bottom: 0; 
          }

          span {
            font-weight: 400;
            margin-bottom: 0;
            color: ${colors.cardDescriptionColor};
            font-size: 13px;

          }
        }
      }

      .active {
        background-color: #fff;
        box-shadow: rgba(119, 110, 243, 0.21) 0px 7px 29px 0px;
        border-left: 6px solid ${colors.primaryColor};
        border-radius: 0px 8px 8px 0px;
        margin-right: 0;

      }
  }

  .card-footer {
    border-radius: 0 0 0px 15px;
    border-top: 0;
    background-color: transparent;
  }

`;

export const ChatHeader = styled.div`
  border-radius: 0 10px 0 0;
  border-top: 0;
  border-bottom: 1px solid ${colors.bgLight};

  .chat-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 0 10px 0 0;
  }

  .header-info {
    display: flex;
  }

  .img-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 70px;
	  width: 70px;
  }

  .user-img {    
    height: 60px;
    width: 60px;
    clip-path:  circle(50%);
    border: 2px solid #fff;
  }

  .online-icon {
    position: absolute;
    height: 15px;
	  width: 15px;
    background-color: ${colors.greenColor};
    border-radius: 50%;
    bottom: 9px;
    right: 9px;
    border: 1.5px solid white;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
  
    span {
      font-size: 1rem;
      color: ${colors.textColor};
    }

    p {
      font-weight: 500;
      font-size: 20px;
      color: ${colors.tittlePurpleColor};
      margin-bottom: 0;
    }
  }

  .video-cam {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6rem;
    margin-right: 2rem;


    .star-icon {
      background-color: ${colors.yellowColor};
      width: 35px;
      height:35px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  .camera-icon {
      background-color: ${colors.bgPurple2};
      width: 35px;
      height:35px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

.back-icon {
  margin-top: 20px;
  color: ${colors.bgPurple2};

  @media (min-width:768px)  {
    display: none;
  }
}

  
`;

export const ChatBody = styled.div`
  overflow-y: auto;
  color: ${colors.darkPurpleColor};
  font-size: 10px;

  .msg-cotainer-send {
    position: relative;
    margin-top: auto;
	  margin-bottom: 2rem;
	  margin-right: 5px;
	  border-radius: 25px;
	  background-color: ${colors.bgPurple2};
	  padding: 10px 1rem;
    width: 75%;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
  }
  
  .msg-time-send {
    position: absolute;
    right: 15px;
    bottom: -15px;
    color: ${colors.darkPurpleColor};
    font-size: 10px;
}

.img-cont-msg {
    height: 45px;
	  width: 45px;
  }

  .user-img-msg {
    height: 35px;
    width: 35px;
    clip-path:  circle(50%);
  }

  .msg-cotainer {
    position: relative;
    margin-top: auto;
    margin-bottom: 2rem;
    margin-left: 5px;
    border-radius: 25px;
    background-color: rgba(130, 78, 242, 0.09);
    padding: 10px 15px;
    width: 75%;
    color: ${colors.darkPurpleColor};
    font-size: 14px;
    font-weight: 300;
  }

  .msg-time {
    position: absolute;
    left: 15px;
    bottom: -15px;
    color: ${colors.darkPurpleColor};
    font-size: 10px;
  }

`;

export const ChatFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  .input-group{
    border-radius: 20px 20px 20px 20px;
    border-top: 0;
    width: 95%;
  }

  .type_msg {
    display: flex;
    justify-content: center;
    color: ${colors.textColor};    
    background-color: ${colors.bgChatInput};
    border: 0;

    &:focus {
      box-shadow: none !important;
      outline: 0px !important;
    }

  }

::-webkit-input-placeholder {
      text-align: center;
      line-height: 100px;/* Centrado vertical */
    }

  .attach_btn {
    border-radius: 8px 0 0 8px;
    border: 0;
    background-color: ${colors.bgChatInput};
    height: 62px;
  }

  .send_btn {
    border-radius: 0 8px 8px 0;
    border: 0;
    background-color: ${colors.bgChatInput};
    height: 62px;
  }
`;


/*----------------------ICONS--------------------- */
export const Share = styled(ImAttachment)`
  color: ${colors.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;

`;

export const Send = styled(FiSend)`
  color: ${colors.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`;
export const Emoticon = styled(MdInsertEmoticon)`
  color: ${colors.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Images = styled(FaRegImage)`
  color: ${colors.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

export const SearchIcon = styled(BiSearchAlt2)`
  color: ${colors.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Star = styled(AiFillStar)`
  color: #fff;
  width: 20px;
  height:20px;
  cursor: pointer;
`;

export const Video = styled(BiVideoRecording)`
  color: #fff;
  width: 20px;
  height:20px;
  cursor: pointer;
`;

export const Back = styled(TiArrowLeftThick)`
  color: ${colors.darkPurpleColor};
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  color: ${colors.bgPurple2};



`;