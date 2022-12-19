import{r as n,a as r,j as e,s as l,c as f,L as p,d as M,g as U,A,Q as u,F as O,u as V,O as W}from"./index.b242ee12.js";import{N as Y,C as q}from"./index.esm.e370eef9.js";import{c as K}from"./index.esm.f74e9662.js";import{H as Q}from"./index.esm.2cc7cbcc.js";import{j as J,k as X}from"./index.esm.d32e7a11.js";import{I as Z}from"./index.esm.6be62602.js";import{c as ee}from"./index.esm.a38c61bb.js";import{a as oe,b as re}from"./index.esm.33a9aaa7.js";import{u as E,v as te,T as I,N as k,a as ae,b as ie}from"./auth.c905aab5.js";import{B as L}from"./Button.0891ecfe.js";import{N as G}from"./NewModal.8836b92a.js";import{T as F}from"./TextField.4fa8fd50.js";import{F as se}from"./Form.696d3680.js";import{a as D,b as $,T as ne}from"./index.esm.9283ee80.js";import{N as le}from"./NewSelect.0c823722.js";import{u as ce,c as de}from"./ThemeProvider.921e4875.js";import{D as P}from"./Dropdown.ef28eb4d.js";import"./NavbarContext.af5f2dbd.js";import"./extends.a18a37bd.js";import"./useWindow.94bff523.js";import"./Button.12c2e030.js";import"./iconBase.593b40a0.js";import"./setPrototypeOf.41d9bd23.js";import"./ElementChildren.9e79adbc.js";import"./Button.b317a860.js";const B=n.exports.forwardRef(({id:a,title:o,children:c,bsPrefix:g,className:s,rootCloseEvent:x,menuRole:d,disabled:m,active:b,renderMenuOnMount:h,menuVariant:v,...i},t)=>{const C=ce(void 0,"nav-item");return r(P,{ref:t,...i,className:de(s,C),children:[e(P.Toggle,{id:a,eventKey:null,active:b,disabled:m,childBsPrefix:g,as:Y,children:o}),e(P.Menu,{role:d,renderOnMount:h,rootCloseEvent:x,variant:v,children:c})]})});B.displayName="NavDropdown";const z=Object.assign(B,{Item:P.Item,ItemText:P.ItemText,Divider:P.Divider,Header:P.Header}),me=l.footer`
  .footer-middle {
    background-color: ${f.secondaryColor};
    padding-top: 1rem;
    color: #fff;
  }

  .footer-botton {
    padding-top: 1rem;
    padding-bottom: 0.1rem;
    background: ${f.darkPurpleColor};
    text-align: center;
  }

  .footer-container{
    @media screen and (max-width: 750px) {
      padding-left:3.3rem;
    }
  }

  ul li a {
    color: white;
    text-decoration: none;
    &:hover {
      color: ${f.textColor};
      transition: all 0.3s ease-in-out;
    }
  }
`;function he(){return e(me,{className:"main-footer ",children:r("div",{className:"footer-middle ",children:[e("div",{className:"container footer-container",children:r("div",{className:"row ",children:[r("div",{className:" col-md-3 col-sm-6",children:[e(p,{to:"/",children:e("img",{className:"mb-4 pt-2",src:"./LogoTutormid.svg"})}),r("ul",{className:"list-unstyled",children:[e("li",{className:"mb-2",children:e(p,{to:"/",children:" Sobre Nosotros"})}),e("li",{className:"mb-2",children:e(p,{to:"/",children:"Profesores"})}),e("li",{children:e(p,{to:"/",children:"Politicas de privacidad"})})]})]}),r("div",{className:"col-md-3 py-5 col-sm-6",children:[e("h4",{className:"mb-3",children:"AYUDA"}),r("ul",{className:"list-unstyled",children:[e("li",{className:"mb-2",children:e(p,{to:"/",children:"Preguntas Frecuentes"})}),e("li",{className:"mb-2",children:e(p,{to:"/",children:"Convierte en Docente"})}),e("li",{children:e(p,{to:"/",children:"Blog y Noticias"})})]})]}),r("div",{className:"col-md-3 py-5 col-sm-6",children:[e("h4",{className:"mb-3",children:"CONT\xC1CTANOS"}),r("ul",{className:"list-unstyled",children:[r("li",{className:"mb-2",children:[" ",e(q,{style:{marginRight:"8px"}}),"    992 123 097 - 900 678 231"]}),r("li",{className:"mb-2",children:[e(K,{style:{marginRight:"8px"}}),"            contacto@tutormid.com"]}),r("li",{children:[e(Q,{style:{marginRight:"8px"}}),"   Lun - Sab (9 am - 5 pm)"]})]})]}),r("div",{className:"col-md-3 py-5 col-sm-6 ",children:[e("h4",{className:"mb-3",children:"S\xCDGUENOS"}),r("div",{className:"d-flex gap-4",children:[e(p,{to:"",children:e(J,{color:"white",size:"1.7rem "})}),e(p,{to:"",children:e(Z,{color:"white",size:"1.7rem"})}),e(p,{to:"",children:e(X,{color:"white",size:"1.7rem"})}),e(p,{to:"",children:e(ee,{color:"white",size:"1.7rem"})})]})]})]})}),e("footer",{className:"footer-botton",children:e("div",{className:"container",children:e("div",{className:"row",children:r("p",{className:"",children:["\xA9",new Date().getFullYear(),"   Tutormid all rights reserverd"]})})})})]})})}const j=l.form`
    display:flex;
    flex-direction:column;
    gap:15px;
`,ue=async a=>{try{const o=await M.auth.signUp({email:a.email,password:a.password});if(o.error)throw o.error;const c=await U(o.data.user,a.rol,a.fullname);if(console.log(c.error),c.error)throw c.error;return!0}catch(o){return{status:500,message:o}}},H=async()=>{try{const a=await M.auth.signInWithOAuth({provider:"google"});if(a.error)throw a.error;return a}catch(a){return a}},pe=async a=>{try{const o=await M.auth.signInWithPassword({email:a.email,password:a.password});if(o.error)throw o.error;return o}catch(o){return{status:500,message:o}}},ge=l.div`
   
   > hr.hr-text {
    position: relative;
        border: none;
        height: 1px;
        background: #999;

    }

`;l.small`
        height: 1px;
        width: 10%;
        background-color: gray;
        margin-top: 10px;
`;l.div`
        float: none;
        position: relative;
        margin: 30px auto 20px;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
`;function _(){return e(ge,{children:e("hr",{"data-content":"AND",className:"hr-text"})})}function fe({isOpen:a,toggle:o,toggleModalRegister:c,toggleModalPassword:g}){const{fetchUser:s}=n.exports.useContext(A),[x,d]=n.exports.useState(!1),[m,b]=n.exports.useState(!1),[h,v]=n.exports.useState(!1),i=E({initialValues:{email:"",password:""},validationSchema:te,isInitialValid:!1,onSubmit:function(w){t(w)}}),t=async w=>{try{d(!0),await pe(w).then(y=>{if(y.status==500)throw y.message;s(),T(),o()})}catch(y){u.error(y.toString(),{position:u.POSITION.TOP_RIGHT})}finally{d(!1)}},C=async()=>{try{v(!0),await H().then(w=>{T(),o()})}catch(w){u.error(w.toString(),{position:u.POSITION.TOP_RIGHT})}finally{v(!1)}},T=()=>{i.resetForm(),i.setErrors({})};return e(G,{isOpen:a,toggle:o,title:"Bienvenido a Tutormid",children:r(O,{children:[r(j,{onSubmit:i.handleSubmit,children:[e(L,{text:h?"Procesando...":"Ingresa con Google",isGoogle:!0,color:"outline",size:"lg-size",disabled:!!h,onClick:C}),e(_,{}),e(F,{icon:e(D,{}),edge:"end",label:"Email",type:"text",placeholder:"email@gmail.com",width100:!0,name:"email",onChange:i.handleChange,value:i.values.email}),i.touched.email&&i.errors.email&&e(I,{children:i.errors.email}),e(F,{icon:e($,{onClick:()=>{b(!m)}}),edge:"end",label:"Contrase\xF1a",type:m?"text":"password",placeholder:"************",width100:!0,name:"password",onChange:i.handleChange,value:i.values.password}),i.touched.password&&i.errors.password&&e(I,{children:i.errors.password}),r("div",{className:"d-flex justify-content-between mt-0",children:[e(se.Check,{label:"Recuerdame"}),e(k,{name:"Olvide mi contrase\xF1a",onClick:()=>{o(),g()}})]}),e(L,{text:x?"Procesando...":"Ingresar",size:"lg-size",className:"mt-4",type:"submit",disabled:!!x})]}),r("div",{className:"d-flex justify-content-between mt-4",children:[e("p",{children:" Aun no est\xE1s registrado? "}),e(k,{name:"Crea una cuenta",onClick:()=>{o(),c()}})]})]})})}function xe({isOpen:a,toggle:o,toggleModalLogin:c}){const g=[{value:"docente",label:"Docente"},{value:"estudiante",label:"Estudiante"}],[s,x]=n.exports.useState(null),[d,m]=n.exports.useState(!1),[b,h]=n.exports.useState(!1),[v,i]=n.exports.useState(!1),t=E({initialValues:{email:"",password:"",rol:"",fullname:""},validationSchema:ae,isInitialValid:!0,onSubmit:function(N){C(N)}}),C=async N=>{try{m(!0),await ue(N).then(S=>{if(S&&(u.info("Revisa tu correo, para confirmar tu cuenta",{position:u.POSITION.TOP_RIGHT}),y(),o()),(S==null?void 0:S.status)==500)throw S.message})}catch(S){u.error(S.toString()||"Ocurrio un error, intentelo mas tarde",{position:u.POSITION.TOP_RIGHT})}finally{m(!1)}},T=async()=>{try{if(s==null)throw"Debe selecionar un rol!";h(!0),await H().then(N=>{localStorage.setItem("googleRol",s.value),y(),o()})}catch(N){u.error(N,{position:u.POSITION.TOP_RIGHT})}finally{h(!1)}},w=N=>{x(N),t.setFieldValue("rol",N.value)},y=()=>{t.resetForm(),t.setErrors({}),x(null)};return n.exports.useEffect(()=>{a&&y()},[a]),e(G,{isOpen:a,toggle:o,title:"\xDAnase a Tutormid",children:r(O,{children:[r(j,{onSubmit:t.handleSubmit,children:[e(le,{options:g,placeholder:"Seleccione su Rol",value:s,name:"rol",onChange:w,isClearable:!1}),t.touched.rol&&t.errors.rol&&e(I,{children:t.errors.rol}),e(L,{text:b?"Procesando...":"Registrate con Google",color:"outline",size:"lg-size",type:"button",isGoogle:!0,className:"mt-2",disabled:!!b,onClick:T}),e(_,{}),e(F,{icon:e(ne,{}),edge:"end",label:"Nombre y Apellidos",type:"text",placeholder:"",width100:!0,name:"fullname",onChange:t.handleChange,value:t.values.fullname}),t.touched.fullname&&t.errors.fullname&&e(I,{children:t.errors.fullname}),e(F,{icon:e(D,{}),edge:"end",label:"Email",type:"text",placeholder:"user@gmail.com",width100:!0,name:"email",onChange:t.handleChange,value:t.values.email}),t.touched.email&&t.errors.email&&e(I,{children:t.errors.email}),e(F,{icon:e($,{onClick:()=>{i(!v)}}),edge:"end",label:"Password",type:v?"text":"password",placeholder:"***********",width100:!0,name:"password",onChange:t.handleChange,value:t.values.password}),t.touched.password&&t.errors.password&&e(I,{children:t.errors.password}),e(L,{text:d?"Procesando...":"Registrarme",size:"lg-size",type:"submit",className:"mt-2",disabled:!!d})]}),r("div",{className:"d-flex justify-content-between mt-4",children:[e("p",{children:" Ya tienes una cuenta? "}),e(k,{name:"Ingresa aqu\xED",onClick:()=>{o(),c()}})]})]})})}function we({isOpen:a,toggle:o}){const[c,g]=n.exports.useState(!1),s=E({initialValues:{email:""},validationSchema:ie,isInitialValid:!0,onSubmit:function(m){x(m)}}),x=async m=>{g(!0);const{data:b,error:h}=await M.auth.resetPasswordForEmail(m.email);b&&(u.info("Hemos enviado un enlace a tu correo, no olvides revisar tu spam",{position:u.POSITION.TOP_RIGHT}),o()),h&&u.error(h.toString(),{position:u.POSITION.TOP_RIGHT}),g(!1)},d=()=>{s.resetForm(),s.setErrors({})};return n.exports.useEffect(()=>{a&&d()},[a]),e(G,{isOpen:a,toggle:o,title:"Olvidaste tu contrase\xF1a?",children:e(O,{children:r(j,{onSubmit:s.handleSubmit,children:[e(F,{icon:e(D,{}),edge:"end",label:"Ingresa el email con la que te registraste",type:"text",placeholder:"user@gmail.com",width100:!0,name:"email",value:s.values.email,onChange:s.handleChange}),s.touched.email&&s.errors.email&&e(I,{children:s.errors.email}),e(L,{text:c?"Procesando...":"Restablecer Contrase\xF1a",size:"lg-size",type:"submit",className:"mt-2",disabled:!!c})]})})})}const be=l.div`
  width: 100%;
  height: 80%;
  position: sticky;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid ${f.lineColor};
  background:white;
  padding:20px 3.3rem;
`,ve=l.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `,ye=l(p)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  img{
    margin-top: -22px;
    @media screen and (max-width: 960px){
      margin-top: -15px;
      width: 100px;
    }
  }
  `,Ne=l.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ;

  @media screen and (max-width: 960px){ 
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({click:a})=>a?0:"-100%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    border-top: 1px solid ${f.lineColor};
    padding-top:15px;
    background:white;
    justify-content: flex-start;
    padding-left:3.3rem;
  }
`,R=l.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;

  &:hover{ 
    background-color: ${f.bgWhite} ;
    transition: 0.3s ease-in;
    color: ${f.textColor}
  }

  @media screen and (max-width: 960px) { 
    width: 100%;
    height: 48px;
    padding: .5rem 0;
    justify-content: flex-start;
  }
`;l(p)`
  text-decoration: none;
  color: ${f.textColor}; 
`;l.button`
 border-radius: 4px;
 background: ${f.primaryColor};
 padding: 5px 40px;
 color: #fff;
 border: 0 none;
 outline: none;
 cursor: pointer; 
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 margin-right: 40px;
  
 &:hover { 
  transition:all 0.2s ease-in-out;
  background: #fff ;
  color: #010606 ;
 }

 @media screen and (max-width: 960px) {
  margin-right: auto;
 }

`;const Ce=l.div`
  display: none;
  @media screen and (max-width: 960px) { 
    display: flex;
    color: ${f.darkColor};
    font-size: 1rem;
  }
`;l.button`
    width: 100%;
    border: 2px solid #6B42DE ;
    border-radius: 5px;
    color: #6B42DE ;
    background-color: ${f.bgWhite};
   
`;l.div`
   margin-top: 16px;
   display: flex;
`;l.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;const Se=l.span`
    color: ${f.textColor}; 
    font-weight: 450;
    font-size: 18px;
    >img{
      border-radius:50%;
      height:35px;
      width:35px;
      margin-left:8px;
    }
  `;function Ie(){const{isLogin:a,user:o,logout:c}=n.exports.useContext(A),[g,s]=n.exports.useState(!1),x=V(),d=()=>{s(!g)},[m,b]=n.exports.useState(!1),h=()=>{b(!m)},[v,i]=n.exports.useState(!1),t=()=>{i(!v)},[C,T]=n.exports.useState(!1),w=()=>{T(!C)},y=()=>{x(o.rol=="estudiante"?"/student":"/teacher")};return r(O,{children:[e(be,{children:r(ve,{children:[r(ye,{children:[" ",e("img",{src:"/Logo.svg",width:140,alt:"logo"})]}),e(Ce,{onClick:()=>d(),children:g?e(oe,{}):e(re,{})}),r(Ne,{click:g,children:[e(R,{onClick:()=>d(),children:e(k,{name:"Home",path:"/",type:"menu"})}),e(R,{onClick:()=>d(),children:e(k,{name:"Anuncios",path:"/ads",type:"menu"})}),e(R,{onClick:()=>d(),children:e(k,{name:"Contactanos",type:"menu"})}),a?e(O,{children:e(R,{children:r(z,{title:r(Se,{children:[o.full_name.split(" ")[0]," ",e("img",{src:o.photo_url})]}),id:"navbarScrollingDropdown",children:[e(z.Item,{onClick:()=>y(),children:"Mi Cuenta"}),e(z.Item,{onClick:()=>c(),children:"Salir"})]})})}):r(O,{children:[e(R,{onClick:()=>{h()},children:e(k,{name:"Ingresar",type:"menu"})}),e(L,{onClick:()=>{t()},text:"Registrarse",size:"small-size",responsiveRight:!0})]})]})]})}),e(fe,{isOpen:m,toggle:h,toggleModalRegister:t,toggleModalPassword:w}),e(xe,{isOpen:v,toggle:t,toggleModalLogin:h}),e(we,{isOpen:C,toggle:w})]})}function Je(){return r("div",{children:[e(Ie,{}),e(W,{}),e(he,{})]})}export{Je as default};
