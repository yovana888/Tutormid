import{s as n,c as s,a as o,j as e,r as i,A as I,Q as u,F as C,u as E,f as P}from"./index.b242ee12.js";import{G as T,I as N}from"./iconBase.593b40a0.js";import{h as j,e as A,i as H}from"./index.esm.d32e7a11.js";import{b as L,A as w}from"./index.esm.a38c61bb.js";import{B as S}from"./Button.0891ecfe.js";import{C as V,A as M}from"./AddCommet.dd9aa911.js";import{F as O,L as z}from"./Loader.96d5ac61.js";import{d as k,e as R}from"./ads.0395036c.js";import"./ThemeProvider.921e4875.js";import"./useWindow.94bff523.js";import"./NewModal.8836b92a.js";import"./setPrototypeOf.41d9bd23.js";import"./CardHeaderContext.fb7d6481.js";import"./index.esm.33a9aaa7.js";const g=()=>`
    background-color: ${s.bgWhite};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.5rem, 53rem));
    /* width: 53rem; */
    font-family: 'Inter';
    padding: 2rem 3rem;
    box-sizing: border-box;
    border: 1px solid #D4D6DB;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    /* margin-left: 5rem; */
`,q=n.div`
    background-color: ${s.bgLight2};
    padding: 4em 2em;
`,G=n.div`
${g}
margin-bottom: 3rem;

p {
    font-weight: 400;
    color: ${s.cardDescriptionColor};
    font-size: 19px;
    margin-top: 1rem;
}
`,W=n.div`
  ${g}
  margin-bottom: 3rem;
`,Q=n.div`
  ${g}
  margin-bottom: 3rem;
  
p {
    font-weight: 400;
    color: ${s.cardDescriptionColor};
    font-size: 19px;
    margin-top: 1rem;
}  
`,J=n.div`
  ${g}
  margin-bottom: 3rem;
`,K=n.div`
    background-color: ${s.bgWhite};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18.5rem, 53rem));
    /* width: 53rem; */
    font-family: 'Inter';
    padding: 2rem 3rem;
    box-sizing: border-box;
    border: 1px solid #D4D6DB;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    /* margin-left: 5rem; */


.detailSection {
    /* display: flex;
    margin-bottom: 2.8rem; */
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
    color: ${s.nameTeacherColor};
    
}

.materia {
    color: ${s.materiaColor};
    font-weight: 400;
}

.level {
    color: ${s.primaryColor}; 
    font-weight: 400;
}

.acerca {
    color: ${s.nameTeacherColor};
    margin-bottom: 1rem;
}

.description {
    font-weight: 400;
    color: ${s.cardDescriptionColor};
    font-size: 19px;
}
`;function B(r){return T({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5 2H9l-.35.15-.65.64-.65-.64L7 2H1.5l-.5.5v10l.5.5h5.29l.86.85h.7l.86-.85h5.29l.5-.5v-10l-.5-.5zm-7 10.32l-.18-.17L7 12H2V3h4.79l.74.74-.03 8.58zM14 12H9l-.35.15-.14.13V3.7l.7-.7H14v9zM6 5H3v1h3V5zm0 4H3v1h3V9zM3 7h3v1H3V7zm10-2h-3v1h3V5zm-3 2h3v1h-3V7zm0 2h3v1h-3V9z"}}]})(r)}function U({data:r}){return o(K,{className:"container-fluid",children:[o("div",{className:"detailSection row",children:[e("div",{className:"col-12 col-md-4 col-lg-3 text-center",children:e("img",{className:"image",src:r.users_rol.photo_url,alt:""})}),e("div",{className:"details col-12 col-md-8 col-lg-9",children:o(N.Provider,{value:{size:"1.3rem",style:{paddingBottom:"4px"}},children:[e("h4",{className:"name",children:r.users_rol.full_name}),o("h5",{className:"materia",children:[e(B,{})," ",r.course.name]}),o("h5",{className:"level",children:[e(j,{})," Nivel: ",r.nivel.name]}),o("h5",{className:"text-muted",children:[e(L,{})," Dirigido a : ",r.type_study.name]})]})})]}),o("div",{className:"mt-5",children:[e("h4",{className:"acerca",children:"Acerca del Profesor"}),o("p",{className:"description",children:["Tengo m\xE1s de 5 a\xF1os de experiencia dando clases de matem\xE1ticas, y me he dado cuenta de que lo m\xE1s importante es la confianza del alumno con el profesor/tutor, de ah\xED que lo primero que hago es preguntarle al alumno todas las dudas que pueda tener. , luego les sigo explicando ejercicios relacionados con el tema y luego, cuando est\xE1n seguros les dejo ejercicios para que lo hagan, y por supuesto los corrijo. Reserva una clase de prueba conmigo y podr\xE1s ver c\xF3mo se ve una clase m\xEDa y cu\xE1nto te ayudar\xEDa a alcanzar tus objetivos.",e("br",{})]})]})]})}const X=n(V)`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    cursor: pointer;
    font-family: 'Inter';
    border: none;
    width: 100%;


.CardImage {
    object-fit: none;
    border-radius: 12px 12px 0px 0px;
    
};

.CardBody {
    padding: 1.2rem;
};

.iconSection {
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
}

.hoursShare {
    display: flex;
    justify-content: space-evenly;
    font-weight: 500;
    color: ${s.darkPrimaryColor};
}

.btn-area {
    padding: 0 1em 1em 1em;
}
`;function Y({data:r}){return o(X,{className:"",children:[e("img",{className:"CardImage p-0",src:"/video.png",alt:""}),o("div",{className:"CardBody p-0",children:[e("div",{className:"iconSection",children:o(N.Provider,{value:{size:"1.3rem",style:{paddingBottom:"4px"}},children:[o("p",{children:[e(w,{color:"#FFC538"}),r.users_rol.score]}),o("p",{children:[e(A,{color:"#4D7DF9"})," ",r.users_rol.comments]}),e("p",{children:e(O,{color:"#FE374C"})})]})}),o("div",{className:"hoursShare",children:[o("p",{children:[e(B,{color:"#5F2ECC",style:{paddingBottom:"4px"},size:"1.4rem"})," ",`  S/ ${r.price} / ${r.time} ${r.type_time}`]}),e("span",{children:e(H,{color:"#4D7DF9"})})]}),e("div",{className:"btn-area",children:e(S,{text:"Reservar Clase",className:"container-fluid"})})]})]})}const Z=n.div`
    font-family: 'Inter';
    padding: 0 3rem 0 2rem;

h4 {
    padding-bottom: 2rem;
}

.section {
    display: flex;
    justify-content: space-between;
}

.content {
    margin-left: 2rem;
}

.nameStar {
    display: flex;
    justify-content: space-between;
}  

.name {
    color: ${s.materiaColor};
    font-weight: 500;
    margin-bottom: 7px;
}

.date {
    margin-bottom: 7px;
    
}

.text {
    color: ${s.cardDescriptionColor};
    font-size: 19px;
}


`;function ee({idDocente:r,nameTeacher:c}){const[m,h]=i.exports.useState(!1),[d,l]=i.exports.useState([]),[x,f]=i.exports.useState(!1),[a,b]=i.exports.useState(!1),{isLoginFunction:p,user:v}=i.exports.useContext(I),y=()=>{b(!a)};i.exports.useEffect(()=>{D(),F()},[]);const D=async()=>{try{h(!0);const t=await k(r);if(console.log(t,"comentarios"),t.status==500)throw t.message;l(t)}catch(t){u.error(t.toString(),{position:u.POSITION.TOP_RIGHT})}finally{h(!1)}},F=async()=>{const t=await p();f(!!t)},_=()=>{y()};return o(Z,{children:[e("h4",{children:"Comentarios"}),m&&o(C,{children:[e(z,{}),e("br",{}),e("br",{}),e("br",{})]}),d.length>0&&d.map((t,$)=>e("div",{children:e(oe,{img:t.users_rol.photo_url,name:t.users_rol.full_name,stars:t.score,date:t.created_at.slice(0,9)+t.created_at.slice(11,16),text:t.message})},$)),e("div",{className:"d-flex justify-content-center",children:x&&e(S,{className:"mt-3 ",text:"Publicar un comentario",color:"outline",onClick:()=>_()})}),e(M,{toggle:y,isOpen:a,idTeacher:r,nameTeacher:c,idStudent:v==null?void 0:v.id})]})}function oe(r){return o("div",{className:"section",children:[e("div",{className:"image",children:e("img",{src:r.img,alt:"",style:{borderRadius:"50%",width:"50px",height:"50px"}})}),o("div",{className:"content ",children:[o("div",{className:"nameStar",children:[e("span",{className:"name",children:r.name}),o("span",{className:"calification",children:[e(w,{value:{size:"1.3rem",style:{paddingBottom:"4px"}},color:"#FFC538"})," ",r.stars]})]}),e("div",{className:"date",children:e("span",{children:r.date})}),e("div",{className:"text",children:e("p",{children:r.text})})]})]})}function xe(){const r=E(),{idDocente:c,idAds:m}=P(),[h,d]=i.exports.useState(!1),[l,x]=i.exports.useState([]);i.exports.useEffect(()=>{c&&m?f():r("/ads")},[]);const f=async()=>{try{d(!0);const a=await R(c,m);if(a.status==500)throw a.message;console.log(a),x(a)}catch(a){u.error(a.toString(),{position:u.POSITION.TOP_RIGHT})}finally{d(!1)}};return o(q,{children:[h&&o(C,{children:[e(z,{}),e("br",{}),e("br",{}),e("br",{})]}),l.length>0&&l.map((a,b)=>e("div",{className:"container",children:o("div",{className:"row flex-row-reverse",children:[e("div",{className:"col-12 col-md-3 mb-3",children:e(Y,{data:a})}),o("div",{className:"col-12 col-md-9",children:[e(U,{data:a}),o(G,{className:"mt-3 mb-3",children:[e("h4",{children:"Mis clases y m\xE9todo de ense\xF1anza"}),e("p",{children:a.users_rol.about_me})]}),e(W,{className:"mb-3",children:e("img",{src:"/horario.png",alt:"",className:"img-fluid"})}),o(Q,{className:"mb-3",children:[e("h4",{children:"Estudios"}),a.studies>0?a.studies.map(p=>o("p",{children:[" "," ",">"," ",p.universidad," - ",p.grado]})):e("p",{children:"--"})]}),e(J,{className:"",children:e(ee,{idDocente:c,nameTeacher:l.length>0?l[0].users_rol.full_name:"name"})})]})]})},b))]})}export{xe as default};
