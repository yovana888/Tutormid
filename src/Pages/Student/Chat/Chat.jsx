import React from 'react'
import { ChatMain, ChatList, ChatBody, ChatHeader, ChatFooter, Share, Send, Emoticon,Images, SearchIcon,Star, Video, Back } from './Style'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default function Chat() {

    // const [selectChat, setSelectChat] = useState(false);
    // function handleSelectChat(isOpen) {setSelectChat(isOpen)}
    
    // function showChat() {handleSelectChat(true)};
    // function hideChat() {handleSelectChat(false)};
    

  return (
<ChatMain className='container-fluid '>
    <div className="row justify-content-center h-100">
        {/* {!selectChat ? <> */}
        <div className="col-md-3 col-xl-3 chat">
        <div className="card contacts-card">
            <div className="card-header">
			    <div className="input-group">
				    <input type="text" placeholder="Buscar Profesor" name="" className="form-control search"/>
					<span className="input-group-text search-btn"><SearchIcon/></span>			    
			    </div>
		    </div>

		    <ChatList className="card-body">
			    <ul className="contacts">
                    <li className="active">
                        <ChatItems
                         img='/Ellipse 40.svg'
                         status='online_icon'
                         name='Anderson Hans'
                         materia='Matematica General'
                         />
                    </li>
                    <li>
                    <ChatItems
                         img='/Ellipse 41.svg'
                         status='online_icon'
                         name='Jimena Flores'
                         materia='Algebra'
                         />
                    </li>
                    <li>
                    <ChatItems
                         img='/Ellipse 42.svg'
                         status='online_icon'
                         name='Isabel Hernandez'
                         materia='Ingles'
                         />
                    </li>
			    </ul>
                <div className="card-footer"></div>
		    </ChatList>		    
		</div></div>
        {/* </>
        :
        <> */}
        <div className="col-md-9 col-xl-6 chat" >
            <div className="card card-chat">
                <ChatHeader>
                    <div className="d-flex chat-header ">
                        <span className='back-icon'><Back/></span>
                        <div className='header-info'>
                            
                            <div className="img-cont">
                                <img src="/Ellipse 40.svg" className="user-img"/>
                                <span className="online-icon"></span>
                            </div>
                            <div className="user-info">
                                <p>Anderson Hans</p>
                                <span>anderson@gmail.com  - 956482819</span>
                            </div>
                        </div>
                        <div className="video-cam">
                            <span className='star-icon'><Star/></span>
                            <span className='camera-icon'><Video/></span>
                        </div>
                    </div>
                </ChatHeader> 
                <ChatBody className="card-body">
                    <SendMessage
                    msg='Hola Isabel, Me llamo Amelia y busco un/a profesor/a de Matematica General.Me gustaría tomar las clases vía online.Idealmente, quisiera tomar las clases lo antes posible.'
                    date='8:40 AM, Hoy'
                    img='/Ellipse 41.svg'/>
                    
                    <RecivedMessage
                    img='/Ellipse 37.svg'
                    msg='Hola Yovana, me encantaría darte clases. (Ofrezco mi primera clase para que nos podamos conocer.)'
                    date='8:55 AM, Hoy'/>

                    <SendMessage
                    msg='Hola Isabel, Me llamo Amelia y busco un/a profesor/a de Matematica General.Me gustaría tomar las clases vía online.Idealmente, quisiera tomar las clases lo antes posible.'
                    date='8:40 AM, Hoy'
                    img='/Ellipse 41.svg'/>
                    
                    <RecivedMessage
                    img='/Ellipse 37.svg'
                    msg='Hola Yovana, me encantaría darte clases. (Ofrezco mi primera clase para que nos podamos conocer.)'
                    date='8:55 AM, Hoy'/>
                    
                </ChatBody>
                <ChatFooter className=''>
                    <div className="input-group">
                        <div className="input-group-append">
                            <span className="input-group-text attach_btn"><Share/></span>
                        </div>
                        <input name="" className="form-control type_msg" placeholder="Enviar Mensaje"></input>
                        <div className="input-group-append right-btns">
                            <span className="input-group-text  send_btn"><Emoticon/> <Images/> <Send/></span>
                        </div>
                    </div>
                </ChatFooter>
            </div>
	    </div>

        {/* </>
        } */}
    </div>
</ChatMain>
  )
}



function ChatItems(props) {
  return(
    <div className='chatlist-item d-flex'>
      <div className='img_cont'>
        <img src={props.img} alt="" />
      </div>
      <div className='info-chatlist'>
        <p>{props.name}</p>
        <span>{props.materia}</span>
      </div>
    </div>
  )

}

function SendMessage(props) {
    return(
        <div className="d-flex justify-content-end mb-4">
            <div className="msg-cotainer-send">
                {props.msg}
                <span className="msg-time-send">{props.date}</span>
            </div>
            <div className="img-cont-msg">
                <img src={props.img} className="user-img-msg"/>
            </div>
        </div>
    )
}

function RecivedMessage(props) {
    return(
        <div className="d-flex justify-content-start mb-4">
            <div className="img-cont-msg">
                <img src={props.img} className="user-img-msg"/>
            </div>
            <div className="msg-cotainer">
                {props.msg}
                <span className="msg-time">{props.date}</span>
            </div>
        </div>
    )
}