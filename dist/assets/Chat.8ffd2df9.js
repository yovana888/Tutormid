import{s as i,c as r,r as m,j as e,F as l,a}from"./index.ebe67edf.js";import{a as H}from"./index.esm.1ca1f1b4.js";import{c as A}from"./index.esm.af26c755.js";import{e as I}from"./index.esm.9f8fd165.js";import{c as j}from"./index.esm.2a6daaa4.js";import{a as z,b as P}from"./index.esm.b806443e.js";import{A as D}from"./index.esm.3fa8f5b4.js";import{T as _}from"./index.esm.e52b1367.js";import"./iconBase.2ca0f33d.js";const S=i.div`
  height: 87vh;
	margin: 0;
  background-color: ${r.bgLight2};
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
    color: ${r.textColor};
    border-right: 0;
    height: 50px;

    &:focus {
      box-shadow: none;
      border: 1px solid ${r.lineColor};
    }
  }

  .search-btn {
    border-radius: 0 10px 10px 0;
    background-color: #fff;
    border: 1px solid ${r.lineColor};
    border-left: 0;
    height: 50px;
  }

  .card-chat {
    border-radius: 0 10px 10px 0;
  }

`,p=i.div`
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
        border-bottom: 1px solid ${r.bgLight2};
        margin-right: 10px;

        .info-chatlist {  
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 5px;
                   
          p {
            font-weight: 500;
            color: ${r.primaryColor};
            margin-bottom: 0; 
          }

          span {
            font-weight: 400;
            margin-bottom: 0;
            color: ${r.cardDescriptionColor};
            font-size: 13px;

          }
        }
      }

      .active {
        background-color: #fff;
        box-shadow: rgba(119, 110, 243, 0.21) 0px 7px 29px 0px;
        border-left: 6px solid ${r.primaryColor};
        border-radius: 0px 8px 8px 0px;
        margin-right: 0;

      }
  }

  .card-footer {
    border-radius: 0 0 0px 15px;
    border-top: 0;
    background-color: transparent;
  }

`,h=i.div`
  border-radius: 0 10px 0 0;
  border-top: 0;
  border-bottom: 1px solid ${r.bgLight};

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
    background-color: ${r.greenColor};
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
      color: ${r.textColor};
    }

    p {
      font-weight: 500;
      font-size: 20px;
      color: ${r.tittlePurpleColor};
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
      background-color: ${r.yellowColor};
      width: 35px;
      height:35px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  .camera-icon {
      background-color: ${r.bgPurple2};
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
  color: ${r.bgPurple2};

  @media (min-width:768px)  {
    display: none;
  }
}

  
`,g=i.div`
  overflow-y: auto;
  color: ${r.darkPurpleColor};
  font-size: 10px;

  .msg-cotainer-send {
    position: relative;
    margin-top: auto;
	  margin-bottom: 2rem;
	  margin-right: 5px;
	  border-radius: 25px;
	  background-color: ${r.bgPurple2};
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
    color: ${r.darkPurpleColor};
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
    color: ${r.darkPurpleColor};
    font-size: 14px;
    font-weight: 300;
  }

  .msg-time {
    position: absolute;
    left: 15px;
    bottom: -15px;
    color: ${r.darkPurpleColor};
    font-size: 10px;
  }

`,u=i.div`
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
    color: ${r.textColor};    
    background-color: ${r.bgChatInput};
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
    background-color: ${r.bgChatInput};
    height: 62px;
  }

  .send_btn {
    border-radius: 0 8px 8px 0;
    border: 0;
    background-color: ${r.bgChatInput};
    height: 62px;
  }
`,x=i(H)`
  color: ${r.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;

`,b=i(A)`
  color: ${r.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`,f=i(I)`
  color: ${r.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
`,v=i(j)`
  color: ${r.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`,N=i(z)`
  color: ${r.darkPurpleColor};
  height: 20px;
  width: 20px;
  cursor: pointer;
`,w=i(D)`
  color: #fff;
  width: 20px;
  height:20px;
  cursor: pointer;
`,y=i(P)`
  color: #fff;
  width: 20px;
  height:20px;
  cursor: pointer;
`,C=i(_)`
  color: ${r.darkPurpleColor};
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  color: ${r.bgPurple2};



`;function W(){function o(){const{innerWidth:n,innerHeight:M}=window;return{width:n,height:M}}const[k,E]=m.exports.useState(o());m.exports.useEffect(()=>{function n(){E(o())}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const[$,t]=m.exports.useState(!1);return e(S,{className:"container-fluid ",children:k.width<768?e(l,{children:e("div",{className:"row justify-content-center h-100",children:$?e(l,{children:e("div",{className:"col-md-9 col-xl-6 chat",children:a("div",{className:"card card-chat",children:[e(h,{children:a("div",{className:"d-flex chat-header ",children:[e("span",{className:"back-icon",onClick:()=>{t(!1)},children:e(C,{})}),a("div",{className:"header-info",children:[a("div",{className:"img-cont",children:[e("img",{src:"/Ellipse 40.svg",className:"user-img"}),e("span",{className:"online-icon"})]}),a("div",{className:"user-info",children:[e("p",{children:"Anderson Hans"}),e("span",{children:"anderson@gmail.com - 956482819"})]})]}),a("div",{className:"video-cam",children:[e("span",{className:"star-icon",children:e(w,{})}),e("span",{className:"camera-icon",children:e(y,{})})]})]})}),a(g,{className:"card-body",children:[e(c,{msg:"Hola Isabel, Me llamo Amelia y busco un/a profesor/a de Matematica General.Me gustar\xEDa tomar las clases v\xEDa online.Idealmente, quisiera tomar las clases lo antes posible.",date:"8:40 AM, Hoy",img:"/Ellipse 41.svg"}),e(d,{img:"/Ellipse 37.svg",msg:"Hola Yovana, me encantar\xEDa darte clases. (Ofrezco mi primera clase para que nos podamos conocer.)",date:"8:55 AM, Hoy"}),e(c,{msg:"Hola Isabel, Me llamo Amelia y busco un/a profesor/a de Matematica General.Me gustar\xEDa tomar las clases v\xEDa online.Idealmente, quisiera tomar las clases lo antes posible.",date:"8:40 AM, Hoy",img:"/Ellipse 41.svg"}),e(d,{img:"/Ellipse 37.svg",msg:"Hola Yovana, me encantar\xEDa darte clases. (Ofrezco mi primera clase para que nos podamos conocer.)",date:"8:55 AM, Hoy"})]}),e(u,{className:"",children:a("div",{className:"input-group",children:[e("div",{className:"input-group-append",children:e("span",{className:"input-group-text attach_btn",children:e(x,{})})}),e("input",{name:"",className:"form-control type_msg",placeholder:"Enviar Mensaje"}),e("div",{className:"input-group-append right-btns",children:a("span",{className:"input-group-text  send_btn",children:[e(f,{})," ",e(v,{})," ",e(b,{})]})})]})})]})})}):e(l,{children:e("div",{className:"col-md-3 col-xl-3 chat",children:a("div",{className:"card contacts-card",children:[e("div",{className:"card-header",children:a("div",{className:"input-group",children:[e("input",{type:"text",placeholder:"Buscar Profesor",name:"",className:"form-control search"}),e("span",{className:"input-group-text search-btn",children:e(N,{})})]})}),a(p,{className:"card-body",children:[a("ul",{className:"contacts",children:[e("li",{className:"active",onClick:()=>{t(!0)},children:e(s,{img:"/Ellipse 40.svg",status:"online_icon",name:"Anderson Hans",materia:"Matematica General"})}),e("li",{children:e(s,{img:"/Ellipse 41.svg",status:"online_icon",name:"Jimena Flores",materia:"Algebra"})}),e("li",{children:e(s,{img:"/Ellipse 42.svg",status:"online_icon",name:"Isabel Hernandez",materia:"Ingles"})})]}),e("div",{className:"card-footer"})]})]})})})})}):e(l,{children:a("div",{className:"row justify-content-center h-100",children:[e("div",{className:"col-md-3 col-xl-3 chat",children:a("div",{className:"card contacts-card",children:[e("div",{className:"card-header",children:a("div",{className:"input-group",children:[e("input",{type:"text",placeholder:"Buscar Profesor",name:"",className:"form-control search"}),e("span",{className:"input-group-text search-btn",children:e(N,{})})]})}),a(p,{className:"card-body",children:[a("ul",{className:"contacts",children:[e("li",{className:"active",onClick:()=>{t(!0)},children:e(s,{img:"/Ellipse 40.svg",status:"online_icon",name:"Anderson Hans",materia:"Matematica General"})}),e("li",{children:e(s,{img:"/Ellipse 41.svg",status:"online_icon",name:"Jimena Flores",materia:"Algebra"})}),e("li",{children:e(s,{img:"/Ellipse 42.svg",status:"online_icon",name:"Isabel Hernandez",materia:"Ingles"})})]}),e("div",{className:"card-footer"})]})]})}),e("div",{className:"col-md-9 col-xl-6 chat",children:a("div",{className:"card card-chat",children:[e(h,{children:a("div",{className:"d-flex chat-header ",children:[e("span",{className:"back-icon",onClick:()=>{t(!1)},children:e(C,{})}),a("div",{className:"header-info",children:[a("div",{className:"img-cont",children:[e("img",{src:"/Ellipse 40.svg",className:"user-img"}),e("span",{className:"online-icon"})]}),a("div",{className:"user-info",children:[e("p",{children:"Anderson Hans"}),e("span",{children:"anderson@gmail.com - 956482819"})]})]}),a("div",{className:"video-cam",children:[e("span",{className:"star-icon",children:e(w,{})}),e("span",{className:"camera-icon",children:e(y,{})})]})]})}),a(g,{className:"card-body",children:[e(c,{msg:"Hola Isabel, Me llamo Amelia y busco un/a profesor/a de Matematica General.Me gustar\xEDa tomar las clases v\xEDa online.Idealmente, quisiera tomar las clases lo antes posible.",date:"8:40 AM, Hoy",img:"/Ellipse 41.svg"}),e(d,{img:"/Ellipse 37.svg",msg:"Hola Yovana, me encantar\xEDa darte clases. (Ofrezco mi primera clase para que nos podamos conocer.)",date:"8:55 AM, Hoy"}),e(c,{msg:"Hola Isabel, Me llamo Amelia y busco un/a profesor/a de Matematica General.Me gustar\xEDa tomar las clases v\xEDa online.Idealmente, quisiera tomar las clases lo antes posible.",date:"8:40 AM, Hoy",img:"/Ellipse 41.svg"}),e(d,{img:"/Ellipse 37.svg",msg:"Hola Yovana, me encantar\xEDa darte clases. (Ofrezco mi primera clase para que nos podamos conocer.)",date:"8:55 AM, Hoy"})]}),e(u,{className:"",children:a("div",{className:"input-group",children:[e("div",{className:"input-group-append",children:e("span",{className:"input-group-text attach_btn",children:e(x,{})})}),e("input",{name:"",className:"form-control type_msg",placeholder:"Enviar Mensaje"}),e("div",{className:"input-group-append right-btns",children:a("span",{className:"input-group-text  send_btn",children:[e(f,{})," ",e(v,{})," ",e(b,{})]})})]})})]})})]})})})}function s(o){return a("div",{className:"chatlist-item d-flex",children:[e("div",{className:"img_cont",children:e("img",{src:o.img,alt:""})}),a("div",{className:"info-chatlist",children:[e("p",{children:o.name}),e("span",{children:o.materia})]})]})}function c(o){return a("div",{className:"d-flex justify-content-end mb-4",children:[a("div",{className:"msg-cotainer-send",children:[o.msg,e("span",{className:"msg-time-send",children:o.date})]}),e("div",{className:"img-cont-msg",children:e("img",{src:o.img,className:"user-img-msg"})})]})}function d(o){return a("div",{className:"d-flex justify-content-start mb-4",children:[e("div",{className:"img-cont-msg",children:e("img",{src:o.img,className:"user-img-msg"})}),a("div",{className:"msg-cotainer",children:[o.msg,e("span",{className:"msg-time",children:o.date})]})]})}export{W as default};
