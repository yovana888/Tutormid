import{s as a,c as i,j as e,a as n,F as N,L as B,r as u}from"./index.ebe67edf.js";import{C as S,A as k}from"./AddCommet.6b9beea4.js";import{B as z,I as T,a as M,b as v,c as I}from"./index.esm.d0ed7035.js";import{A as R}from"./index.esm.3fa8f5b4.js";import{B as $}from"./Button.b338f9cc.js";import{M as q,a as P,b as _}from"./index.esm.9f8fd165.js";import{u as A,a as D,b as L,c as O}from"./ThemeProvider.b4733c37.js";import{C as c,F as G}from"./Form.2d9324a2.js";import{N as V}from"./NewSelect.c42c8c8e.js";import{g as H}from"./ads.9e6c86ab.js";import"./useWindow.75ee041c.js";import"./NewModal.9c318701.js";import"./setPrototypeOf.41d9bd23.js";import"./CardHeaderContext.08225436.js";import"./index.esm.2a6daaa4.js";import"./iconBase.2ca0f33d.js";import"./ElementChildren.6068e26a.js";import"./extends.a18a37bd.js";const Q=a.section`
        background-color: ${i.bgLight2};
        padding: 4rem 2.4rem;
        display:flex;
        flex-direction:column;
        gap:20px;
        justify-content: center;

    a {
        text-decoration: none;
    }
    `,U=a.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 19rem));
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2.5rem;
`,J=a(S)`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    cursor: pointer;
    transition: transform 200ms ease-in;
    font-family: 'Inter';
    border: none;
    max-width: 20rem;   
    min-width: 15rem;
`,X=a.div`
    padding: 1.2rem;
`,Y=a.img`
    height: 12rem;
    max-width: 20rem;   
    min-width: 15rem;
    object-fit: none;
    border-radius: 12px 12px 0px 0px;
`,Z=a.h2`
    font-weight: 500;
    font-size: 17px;
    color: ${i.nameTeacherColor};
`,K=a.h5`
    font-weight: 400;
    font-size: 17px;
    color: ${i.materiaColor};
    padding-bottom: 0.5rem;
`,W=a.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: ${i.cardDescriptionColor};
    padding-bottom: 0.7rem;
`,ee=a.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: ${i.darkPrimaryColor};
    padding-bottom: 0.7rem;
`,ae=a.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: ${i.nameTeacherColor};
    padding-bottom: 0.7rem;
`;function te(){return e("div",{className:"container",children:n(U,{className:"wrapper",children:[e("div",{children:e(p,{img:"./Rectangle 974.svg",name:"Lisa Sotelo Flores",materia:"Matem\xE1ticas",description:"Tutora de matem\xE1ticas para ni\xF1os y adolescentes",price:"$15.00 / 1 hora",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 976.svg",name:"Meri Rosas Laura",materia:"Musica-Piano",description:"Instructora de piano con m\xE1s de 5 a\xF1os de experien...",price:"$10.00 / 50 min",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 978.svg",name:"Meri Rosas Laura",materia:"Fisica - Qu\xEDmica",description:"Magister en ciencias aplicadas y Titulada en Fisi...",price:"$10.00 / 1 hora",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 986.svg",name:"Gerardo Perez",materia:"Matematica Universitaria",description:"Docente de la Academia XYZ, e Ingeniero Civil de ...",price:"$12.00 / 1 hora",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 988.svg",name:"Ramon Alave",materia:"Musica - Guitarra",description:"Instructor de musica y canto, egresado de la escu..",price:"$12.00 / 30 min",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 990.svg",name:"Evelin Cutipa",materia:"Entrenadora de Gym",description:"Entrenadora personal online y presencial de habla ingle...",price:"$10.00 / 50 min",calification:"5.0"})})]})})}function p(t){return n(J,{className:"card",children:[e(Y,{className:"card__image ",src:t.img}),n(X,{className:"card__body",children:[e(Z,{className:"card__name",children:t.name}),e(K,{className:"card__materia",children:t.materia}),e(W,{className:"description",children:t.description}),n("div",{className:"d-flex justify-content-between card__footerr",children:[n(ee,{className:"price",children:[e(z,{style:{paddingBottom:"4px"},size:"1.4rem"}),"  ",t.price]}),n(ae,{className:"calification",children:[e(R,{color:"#FFC538",style:{paddingBottom:"4px"},size:"1.4rem"}),"  ",t.calification]})]})]})]})}const ne=a.h1`
  color: ${i.darkColor};
`,ie=a.span`
  color: ${i.darkColor};
  margin-bottom: 18px;
  font-size:17px;

  > svg {
      color:#FFC538;
      margin-right:19px;
      font-size:17px;
    }

`;function d({name:t,typeText:r="title",name2:o,className:s,children:m}){return n(N,{children:[r=="title"&&n(ne,{className:s,children:[" ",m," ",t," ",e("br",{})," ",o," "]}),r=="subtitle"&&n(ie,{className:s,children:[m," ",t," ",e("br",{})," ",o]})]})}function re(){return n(Q,{children:[e(d,{name:"Profesores profesionales y calificados",className:"text-center"}),e(d,{name:"M\xE1s del 85% de los alumnos han dado",className:"text-center",name2:"una calificaci\xF3n de 5 estrellas",typeText:"subtitle"}),e(te,{}),e("div",{className:"d-flex justify-content-center",children:n(B,{to:"ads",children:[" ",e($,{text:"Ver m\xE1s profesores",type:"button",color:"outline",icon:e(T,{})})," "]})})]})}const oe=a.div`
    background-image: url("Rectangle 972.svg");
    display: flex;
    justify-content: end;
    padding-right: 3.3rem;
    padding-left: 3.3rem;
    align-items:center;
    color: #ffff;
    font-family: 'Inter';
    font-style: normal;
    background-repeat: no-repeat;
    background-size: cover;
    .text {
        padding-right: 3.5rem;
    }
`,se=a.span` 
    font-weight: 300;
    font-size: 18px;
    display: flex;
    padding-bottom: 1.5rem;
    align-items:center;
    gap:15px;
    .icon{
        color:#FFC538;
        font-size: 25px;
        @media screen and (max-width: 750px) {
           display:none;
        }
    }

`,ce=a.div` 
    padding-top:70px;
`,le=a.img`

`,de=[{id:1,text:"Profesores Expertos: Verificamos y confirmamos cuidadosamente el perfil de cada profesor",icon:e(q,{className:"icon"})},{id:2,text:"Aprende en cualquier momento: Toma clases particulares online en un horario que se adapte a tu apretada agenda",icon:e(P,{className:"icon"})},{id:3,text:"Precios asequibles: Elige un profesor experimentado que se ajuste a tu presupuesto",icon:e(_,{className:"icon"})}];function me(){return e(oe,{children:n("div",{className:"row",children:[n(ce,{className:"col-12 col-sm-12 col-md-8",children:[e(d,{name:"Descubre qu\xE9 ofrece Tutormid",className:"text-white"}),e("br",{}),de.map(t=>e("div",{className:"d-flex",children:n(se,{className:"text-white",children:[t.icon," ",e("span",{children:t.text})]})},t.id))]}),e("div",{className:"col-12 col-sm-12 col-md-4 align-self-end",children:e("div",{className:"imagen ",children:e(le,{className:"img-fluid",src:"/foto_beneficios.svg",alt:""})})})]})})}const pe=a.div`
  padding: 3.3rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`,ue=a.div`
   display:flex;
   justify-content: center;
   align-items:center;
   margin-bottom:4rem;
    img{ 
        width:90%;
        @media screen and (max-width: 768px) {
            width:80%;
        }
    }
`,j=u.exports.forwardRef(({bsPrefix:t,className:r,as:o="div",...s},m)=>{const g=A(t,"row"),C=D(),l=L(),F=`${g}-cols`,w=[];return C.forEach(f=>{const h=s[f];delete s[f];let b;h!=null&&typeof h=="object"?{cols:b}=h:b=h;const E=f!==l?`-${f}`:"";b!=null&&w.push(`${F}${E}-${b}`)}),e(o,{ref:m,...s,className:O(r,g,...w)})});j.displayName="Row";const x=j,xe=a.div`
  position: relative;
  margin-bottom:4rem;
`,ge=a.div`
  color: white;
  width: 50px;
  height: 50px;
  padding: 15px;
  border-radius: 8px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-left:20px;
  &.purple{
    background: ${i.bgPurple2};
  };
  &.blue{
    background: ${i.blueColor};
  };
  &.green{
    background: ${i.greenColor};
  };
  &.yellow{
    background: ${i.yellowColor};
  }
`,fe=a.div`
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: ${i.textColor};
  max-width: 310px;
  transition: transform 200ms ease-in;
  background: white;
`,he=a.p`
  font-weight: 500;
  font-size: 22px;
  color: ${i.primaryColor};
`;function y({title:t,text:r,color:o,icon:s}){return n(xe,{children:[e(ge,{className:o,children:s}),n(fe,{children:[e(he,{children:t}),r]})]})}function be(){const[t,r]=u.exports.useState(!1),o=()=>{r(!t)};return n(pe,{children:[e(d,{name:"Aprender nunca fue as\xED de f\xE1cil",className:"text-center"}),e(d,{name:"Sigue los siguientes pasos para recibir",className:"text-center",name2:"tus clases en la plataforma",typeText:"subtitle"}),e("br",{}),n(x,{children:[e(c,{lg:4,md:4,sm:12,xs:12,children:n(x,{children:[e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"1. Encuentra a tu Profesor",text:"Utiliza filtros para limitar tu b\xFAsqueda y encontrar el que mejor se ajuste a tus necesidades",icon:e(M,{}),color:"purple"})}),e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"2. Agenda y Reserva",text:"Encuentra el momento perfecto que se ajuste a tu horario y reserva tu clase en segundos",icon:e(v,{}),color:"yellow"})})]})}),e(c,{className:"d-flex justify-content-center",lg:4,md:4,sm:12,xs:12,children:e(ue,{children:e("img",{src:"/joven_steps.svg",alt:""})})}),e(c,{lg:4,md:4,sm:12,xs:12,children:n(x,{children:[e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"3. Ingresa a tu Clase",text:"Lleg\xF3 la hora de tu sesi\xF3n, trata de estar 5 minutos antes, asi mismo puedes grabar tu clase",icon:e(I,{}),color:"green"})}),e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"4. Valora y Comparte",text:"Comenta que te parecio la clase; asi mismo puedes recomendar al profesor a otras personas. ",icon:e(v,{onClick:()=>{o()}}),color:"blue"})})]})})]}),e(k,{toggle:o,isOpen:t})]})}const ye=a.div`
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: ${i.textColor};
  max-width: 340px;
  transition: transform 200ms ease-in;
  background: white;
  margin-bottom:2rem;
`;function Ce({text:t,author:r}){return e(c,{className:"d-flex justify-content-center",md:6,lg:4,sm:12,xs:12,children:n(ye,{children:[e("img",{src:"./src/assets/icon-comillas.svg",alt:""}),n("p",{className:"px-4",children:[t," ",e("br",{})," ",n("b",{children:[r," "]})," "]})]})})}const we=[{id:1,text:"Fue un \xE9xito total, ya que no solo pude aprender matematicas si no que hice un grupo de estudio para repasar los fines de semana.",author:"Mayra Gutierrez J."},{id:2,text:"Es realmente excelente, las clases son muy amenas, y se aprende mucho siendo la sesi\xF3n individual, lo recomendio mucho, es genial.",author:"Marcos Lara B."},{id:3,text:" Fue una experiencia muy placentera poder estudiar con un profesor personalizado y desde la comodidad de casa. ",author:"Bryan Schuller M."}],ve=a.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin-top:3rem;
`,Ne=a.div`
    padding: 3.3rem;
    padding-top:4.5rem;
`;function $e(){return n(Ne,{children:[e(d,{name:"Descubre qu\xE9 dicen nuestros estudiantes",className:"text-center"}),e(ve,{children:e(x,{children:we.map(t=>e(Ce,{text:t.text,author:t.author},t.id))})})]})}const je=a.div`
  background: ${i.bgLight};
  padding: 30px 3.3rem;
`,Fe=a(c)`
  display: flex;
  justify-content: end;
  align-items: center;
  img {
    width: 94%;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`,Ee=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10%;
  padding-bottom: 30px;
  @media screen and (max-width: 750px) {
    padding-top: 5%;
    justify-content: center;
    align-items: center;
    text-align:center;
  }
`;a.h1`
  color: ${i.darkColor};
`;a.span`
  color: ${i.darkColor};
  margin-bottom: 18px;
  font-size:17px;
`;a(G.Control)`
    border-radius: 5px;
    color:${i.textColor} !important;
    outline: none;
    transition: border .1s ease-in-out;
    &:focus {
        box-shadow: none;
        border: 1px solid #ab96db;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color:${i.placeholderColor}
    }
`;const Be=a.div`
    display:flex;
    flex-direction:row;
    gap:15px;
    justify-content: stretch;
    align-items:center;
    @media screen and (max-width: 750px) {
        flex-direction:column;
        width:100%;
    }
`;function Se(){const[t,r]=u.exports.useState([]);u.exports.useEffect(()=>{o()},[]);const o=async()=>{try{const l=await H();if(l.status==500)throw l.message;r(l)}catch(l){toast.error(l.toString(),{position:toast.POSITION.TOP_RIGHT})}},[s,m]=u.exports.useState(null);function g(l){m(l)}const C=()=>{console.log(s)};return n(Be,{children:[e(V,{options:t,placeholder:"\xBFQu\xE9 te interesa aprender?",value:s,onChange:g,isSearchable:!0,isInputSearch:!0}),e($,{text:"Buscar",size:"md-size",onClick:()=>{C()}})]})}function Je(){return n(N,{children:[e(je,{children:n(x,{children:[e(c,{children:n(Ee,{children:[e(d,{name:"Encuentra tu",name2:"Profesor Particular"}),e(d,{name:"En l\xEDnea o presencial, comienza y agenda tus  lecciones de manera grupal o individual en el   horario que m\xE1s se adpate a t\xED",typeText:"subtitle"}),e(Se,{})]})}),e(Fe,{children:e("img",{src:"src/assets/img-banner.svg",alt:"img-banner"})})]})}),e(be,{}),e(re,{}),e(me,{}),e($e,{})]})}export{Je as default};
