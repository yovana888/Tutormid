import{s as T,c as m,j as e,a as s,F as D,r as a,u as $,Q as y}from"./index.b242ee12.js";import{B as u}from"./Button.0891ecfe.js";import{A as j,a as O}from"./index.esm.a38c61bb.js";import{e as P}from"./index.esm.d32e7a11.js";import{F as q,L as H}from"./Loader.96d5ac61.js";import{N as k}from"./NewModal.8836b92a.js";import{F as G}from"./Form.696d3680.js";import{T as F}from"./TextField.4fa8fd50.js";import{T as Q,a as U}from"./index.esm.9283ee80.js";import{I as W}from"./iconBase.593b40a0.js";import{N}from"./NewSelect.0c823722.js";import{F as V}from"./index.esm.08e251e5.js";import{g as J,a as K,b as X,c as Y}from"./ads.0395036c.js";import"./ThemeProvider.921e4875.js";import"./useWindow.94bff523.js";import"./setPrototypeOf.41d9bd23.js";import"./ElementChildren.9e79adbc.js";import"./extends.a18a37bd.js";const Z=T.div`
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
background-color: ${m.bgWhite};

&:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
};

.name {
    font-weight: 500;
    color: ${m.nameTeacherColor};
}

.materia {
    font-weight: 400;
    color: ${m.materiaColor};
}

.description {
    font-weight: 400;
    color: ${m.cardDescriptionColor};
    font-size: 14px;
}

.icons-section {
    display: flex;
    justify-content: space-between;
}

.hours {
    color: ${m.darkPrimaryColor};
    font-weight: 500;
}


`,ee=({isOpen:l,toggle:o})=>e(k,{isOpen:l,toggle:o,title:"Planifica tu clase de Matem\xE1ticas con Lisa",children:s(D,{children:[s("p",{children:[" ",e("b",{children:"\xBFLa clase es para ti?"})," "]}),s("div",{className:"d-flex justify-content-justify",children:[s("div",{className:"form-check mx-1",children:[e("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),e("label",{className:"form-check-label",for:"flexRadioDefault1",children:"Si"})]}),s("div",{className:"form-check mx-5",children:[e("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",checked:!0}),e("label",{className:"form-check-label",for:"flexRadioDefault2",children:"No, es para un familiar o amigo"})]})]}),e(F,{icon:e(Q,{}),edge:"end",label:"Nombre y Apellidos",type:"text",placeholder:"Ingresa tu nombre",width100:!0,name:"fullname",classes:"mt-4 mb-4"}),e(F,{icon:e(U,{}),edge:"end",label:"Email",type:"text",placeholder:"email@gmail.com",width100:!0,name:"Email",classes:"mt-4 mb-4"}),e(F,{edge:"end",label:"Celular",type:"text",placeholder:"Ingresa tu celular",width100:!0,name:"nombre",classes:"mb-4 mt-4 "}),s("div",{className:"d-flex justify-content-start mt-3 ",children:[e(u,{text:"Atras",size:"lg-size",className:"mt-4 mx-3"}),e(u,{text:"Enviar solicitud",size:"lg-size",className:"mt-4 mx-3",type:"submit",onClick:()=>{toggleModalReserve2()}})]})]})}),se=({isOpen:l,toggle:o})=>{const[i,n]=a.exports.useState(!1),d=()=>{n(!i)};return s(k,{isOpen:l,toggle:o,title:"Planifica tu clase de Matem\xE1ticas con Lisa",children:[s(D,{children:[s("p",{children:[" ",e("b",{children:"\xBFQu\xE9 quieres aprender?"}),"  "]}),e("textarea",{placeholder:"Describe lo que quieres aprender...",style:{border:"1px solid #a9a9a9",borderRadius:5,padding:10,margin:"20px 0",minHeight:100,width:410},className:"mt-0"}),s("p",{children:[" ",e("b",{children:"Selecciona el nivel de estudios"}),"  "]}),s(G.Select,{size:"lg",style:{height:"45px",width:"410px",borderRadius:"8px",fontSize:"16px"},children:[e("option",{children:" Secundaria "}),e("option",{children:" Instituto "}),e("option",{children:" Universidad "})]})]}),s("div",{className:"d-flex justify-content-start mt-3 ",children:[e(u,{text:"Cancelar",size:"lg-size",className:"mt-4 mx-3"}),e(u,{text:"Siguiente",size:"lg-size",className:"mt-4 mx-3",type:"submit",onClick:()=>{d()}})]}),e(ee,{toggle:d,isOpen:i})]})},te=se;function le({item:l}){const o=$(),i=(f,g)=>{o("/profileteacher/"+f+"/"+g)},[n,d]=a.exports.useState(!1),p=()=>{d(!n)};return s(Z,{className:"card-content row",onClick:()=>{i(l.users_rol.id,l.id)},children:[e("section",{className:"col-md-2 col-sm-12",children:e("img",{className:"img-fluid",style:{borderRadius:"50%"},src:l.users_rol.photo_url,alt:""})}),s("section",{className:"col-md-7 col-sm-12 text-area",children:[e("h4",{className:"name",children:l.users_rol.full_name}),e("h5",{className:"materia",children:l.course.name}),e("p",{className:"description",children:l.users_rol.about_me})]}),s("section",{className:"col-md-2 col-sm-12 ",children:[e("div",{className:"d-flex icons-section",children:s(W.Provider,{value:{size:"1.3rem",style:{paddingBottom:"4px"}},children:[s("p",{children:[e(j,{color:"#FFC538"})," ",l.users_rol.score]}),s("p",{children:[e(P,{color:"#4D7DF9"})," ",l.users_rol.comments]}),e("p",{children:e(q,{})})]})}),e("div",{className:"hours",children:s("p",{children:[e(O,{color:"#5F2ECC",style:{paddingBottom:"4px"},size:"1.4rem"}),`  S/ ${l.price} / ${l.time} ${l.type_time}`]})}),e("div",{children:e(u,{text:"Reservar Clase",className:"container-fluid",onClick:()=>{p()}})}),e(te,{toggle:p,isOpen:n})]})]})}const ae=T.div`
background-color: ${m.bgLight2};

.results {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 22px;
    padding: 2rem 0;
    color: ${m.primaryColor};
}

.btn-ads {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
}

`,oe=T.div`
background-color: ${m.bgWhite} ;
padding: 3rem 0;


`;function ie({setFilters:l,filters:o}){const[i,n]=a.exports.useState([]),[d,p]=a.exports.useState([]),[f,g]=a.exports.useState([]);a.exports.useEffect(()=>{h()},[]);const h=async()=>{try{const t=await J();if(t.status==500)throw t.message;n(t);const x=await K();if(x.status==500)throw x.message;g(x);const C=await X();if(C.status==500)throw C.message;p(C)}catch(t){y.error(t.toString(),{position:y.POSITION.TOP_RIGHT})}},[S,b]=a.exports.useState(null);function v(t){b(t),w("idcurso",t===null?null:t.value)}const[r,c]=a.exports.useState(null);function R(t){c(t),w("idtipo",t===null?null:t.value)}const[L,M]=a.exports.useState(null);function z(t){M(t),console.log(t,"ayer"),w("idnivel",t===null?null:t.value)}const A=[],[B,I]=a.exports.useState(null);function E(t){I(t)}function _(){v(null),z(null),R(null)}const w=(t,x)=>{l({...o,[t]:x})};return e(oe,{children:e("div",{className:"container mb-1",children:s("div",{className:"row",children:[s("div",{className:"col-12 col-md-2",children:[e("p",{children:"Aprendo:"}),e(N,{options:i,value:S,onChange:v,isSearchable:!0,placeholder:"Materia"})]}),s("div",{className:"col-12 col-md-10",children:[e("p",{children:"Filtrar profesores por "}),e("div",{className:"teacher-filter",children:s("div",{className:"row",children:[e("div",{className:"col-12 col-sm-4 col-md-3 mb-4",children:e(N,{options:f,placeholder:"Dirigido a",value:r,onChange:R})}),e("div",{className:"col-12 col-sm-4 col-md-3 mb-4",children:e(N,{options:A,placeholder:"Disponibilidad",value:B,onChange:E})}),e("div",{className:"col-12 col-sm-4 col-md-3 mb-4",children:e(N,{options:d,value:L,placeholder:"Niveles",onChange:z})}),e("div",{className:"col-12 col-md-3 ",children:e(u,{text:"Limpiar Filtros",icon:e(V,{}),color:"outline-blue",onClick:_})})]})})]})]})})})}function Fe(){const[l,o]=a.exports.useState(!1),[i,n]=a.exports.useState([]),[d,p]=a.exports.useState(5),[f,g]=a.exports.useState(!0),[h,S]=a.exports.useState({idcurso:null,idnivel:null,idtipo:null});a.exports.useEffect(()=>{b(5)},[]),a.exports.useEffect(()=>{Object.values(h).every(r=>r==null)},[h]);const b=async r=>{try{o(!0);const c=await Y(r,h);if(c.status==500)throw c.message;n(c)}catch(c){y.error(c.toString(),{position:y.POSITION.TOP_RIGHT})}finally{o(!1)}},v=()=>{const r=d+5;p(r),b(r)};return s(ae,{children:[e(ie,{setFilters:S,filters:h}),s("div",{className:"container body",children:[e("h3",{className:"results",children:"Profesores Disponibles"}),i.length>0&&i.map((r,c)=>e(le,{item:r},c)),i.length>0&&f&&e("div",{className:"btn-ads",children:e(u,{size:"ads-size",text:"Ver m\xE1s profesores    ",type:"button",color:"outline",className:"",onClick:()=>v()})}),l&&s(D,{children:[e(H,{}),e("br",{}),e("br",{})]})]})]})}export{Fe as default};
