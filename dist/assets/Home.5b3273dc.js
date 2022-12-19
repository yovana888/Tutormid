import{s as a,c as n,j as e,a as i,F as N,L as I,r as u}from"./index.b242ee12.js";import{C as k,A as E}from"./AddCommet.dd9aa911.js";import{B,I as R,a as S,b as v,c as T}from"./index.esm.d32e7a11.js";import{A as M}from"./index.esm.a38c61bb.js";import{B as $}from"./Button.0891ecfe.js";import{M as q,a as A,b as D}from"./index.esm.f74e9662.js";import{u as O,a as _,b as P,c as L}from"./ThemeProvider.921e4875.js";import{C as c,F as J}from"./Form.696d3680.js";import{N as G}from"./NewSelect.0c823722.js";import{g as Y}from"./ads.0395036c.js";import"./useWindow.94bff523.js";import"./NewModal.8836b92a.js";import"./setPrototypeOf.41d9bd23.js";import"./CardHeaderContext.fb7d6481.js";import"./index.esm.33a9aaa7.js";import"./iconBase.593b40a0.js";import"./ElementChildren.9e79adbc.js";import"./extends.a18a37bd.js";const Z=a.section`
        background-color: ${n.bgLight2};
        padding: 4rem 2.4rem;
        display:flex;
        flex-direction:column;
        gap:20px;
        justify-content: center;

    a {
        text-decoration: none;
    }
    `,V=a.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 19rem));
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2.5rem;
`,Q=a(k)`
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
`,H=a.img`
    height: 12rem;
    max-width: 20rem;   
    min-width: 15rem;
    object-fit: none;
    border-radius: 12px 12px 0px 0px;
`,W=a.h2`
    font-weight: 500;
    font-size: 17px;
    color: ${n.nameTeacherColor};
`,U=a.h5`
    font-weight: 400;
    font-size: 17px;
    color: ${n.materiaColor};
    padding-bottom: 0.5rem;
`,K=a.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: ${n.cardDescriptionColor};
    padding-bottom: 0.7rem;
`,ee=a.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: ${n.darkPrimaryColor};
    padding-bottom: 0.7rem;
`,ae=a.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color: ${n.nameTeacherColor};
    padding-bottom: 0.7rem;
`;function te(){return e("div",{className:"container",children:i(V,{className:"wrapper",children:[e("div",{children:e(p,{img:"./Rectangle 974.svg",name:"Lisa Sotelo Flores",materia:"Matem\xE1ticas",description:"Tutora de matem\xE1ticas para ni\xF1os y adolescentes",price:"$15.00 / 1 hora",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 976.svg",name:"Meri Rosas Laura",materia:"Musica-Piano",description:"Instructora de piano con m\xE1s de 5 a\xF1os de experien...",price:"$10.00 / 50 min",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 978.svg",name:"Meri Rosas Laura",materia:"Fisica - Qu\xEDmica",description:"Magister en ciencias aplicadas y Titulada en Fisi...",price:"$10.00 / 1 hora",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 986.svg",name:"Gerardo Perez",materia:"Matematica Universitaria",description:"Docente de la Academia XYZ, e Ingeniero Civil de ...",price:"$12.00 / 1 hora",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 988.svg",name:"Ramon Alave",materia:"Musica - Guitarra",description:"Instructor de musica y canto, egresado de la escu..",price:"$12.00 / 30 min",calification:"5.0"})}),e("div",{children:e(p,{img:"./Rectangle 990.svg",name:"Evelin Cutipa",materia:"Entrenadora de Gym",description:"Entrenadora personal online y presencial de habla ingle...",price:"$10.00 / 50 min",calification:"5.0"})})]})})}function p(t){return i(Q,{className:"card",children:[e(H,{className:"card__image ",src:t.img}),i(X,{className:"card__body",children:[e(W,{className:"card__name",children:t.name}),e(U,{className:"card__materia",children:t.materia}),e(K,{className:"description",children:t.description}),i("div",{className:"d-flex justify-content-between card__footerr",children:[i(ee,{className:"price",children:[e(B,{style:{paddingBottom:"4px"},size:"1.4rem"}),"  ",t.price]}),i(ae,{className:"calification",children:[e(M,{color:"#FFC538",style:{paddingBottom:"4px"},size:"1.4rem"}),"  ",t.calification]})]})]})]})}const ie=a.h1`
  color: ${n.darkColor};
`,ne=a.span`
  color: ${n.darkColor};
  margin-bottom: 18px;
  font-size:17px;

  > svg {
      color:#FFC538;
      margin-right:19px;
      font-size:17px;
    }

`;function d({name:t,typeText:r="title",name2:o,className:s,children:m}){return i(N,{children:[r=="title"&&i(ie,{className:s,children:[" ",m," ",t," ",e("br",{})," ",o," "]}),r=="subtitle"&&i(ne,{className:s,children:[m," ",t," ",e("br",{})," ",o]})]})}function re(){return i(Z,{children:[e(d,{name:"Profesores profesionales y calificados",className:"text-center"}),e(d,{name:"M\xE1s del 85% de los alumnos han dado",className:"text-center",name2:"una calificaci\xF3n de 5 estrellas",typeText:"subtitle"}),e(te,{}),e("div",{className:"d-flex justify-content-center",children:i(I,{to:"ads",children:[" ",e($,{text:"Ver m\xE1s profesores",type:"button",color:"outline",icon:e(R,{})})," "]})})]})}const oe=a.div`
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

`,de=[{id:1,text:"Profesores Expertos: Verificamos y confirmamos cuidadosamente el perfil de cada profesor",icon:e(q,{className:"icon"})},{id:2,text:"Aprende en cualquier momento: Toma clases particulares online en un horario que se adapte a tu apretada agenda",icon:e(A,{className:"icon"})},{id:3,text:"Precios asequibles: Elige un profesor experimentado que se ajuste a tu presupuesto",icon:e(D,{className:"icon"})}];function me(){return e(oe,{children:i("div",{className:"row",children:[i(ce,{className:"col-12 col-sm-12 col-md-8",children:[e(d,{name:"Descubre qu\xE9 ofrece Tutormid",className:"text-white"}),e("br",{}),de.map(t=>e("div",{className:"d-flex",children:i(se,{className:"text-white",children:[t.icon," ",e("span",{children:t.text})]})},t.id))]}),e("div",{className:"col-12 col-sm-12 col-md-4 align-self-end",children:e("div",{className:"imagen ",children:e(le,{className:"img-fluid",src:"/foto_beneficios.svg",alt:""})})})]})})}const pe=a.div`
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
`,j=u.exports.forwardRef(({bsPrefix:t,className:r,as:o="div",...s},m)=>{const g=O(t,"row"),C=_(),l=P(),z=`${g}-cols`,w=[];return C.forEach(h=>{const f=s[h];delete s[h];let b;f!=null&&typeof f=="object"?{cols:b}=f:b=f;const F=h!==l?`-${h}`:"";b!=null&&w.push(`${z}${F}-${b}`)}),e(o,{ref:m,...s,className:L(r,g,...w)})});j.displayName="Row";const x=j,xe=a.div`
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
    background: ${n.bgPurple2};
  };
  &.blue{
    background: ${n.blueColor};
  };
  &.green{
    background: ${n.greenColor};
  };
  &.yellow{
    background: ${n.yellowColor};
  }
`,he=a.div`
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: ${n.textColor};
  max-width: 310px;
  transition: transform 200ms ease-in;
  background: white;
`,fe=a.p`
  font-weight: 500;
  font-size: 22px;
  color: ${n.primaryColor};
`;function y({title:t,text:r,color:o,icon:s}){return i(xe,{children:[e(ge,{className:o,children:s}),i(he,{children:[e(fe,{children:t}),r]})]})}function be(){const[t,r]=u.exports.useState(!1),o=()=>{r(!t)};return i(pe,{children:[e(d,{name:"Aprender nunca fue as\xED de f\xE1cil",className:"text-center"}),e(d,{name:"Sigue los siguientes pasos para recibir",className:"text-center",name2:"tus clases en la plataforma",typeText:"subtitle"}),e("br",{}),i(x,{children:[e(c,{lg:4,md:4,sm:12,xs:12,children:i(x,{children:[e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"1. Encuentra a tu Profesor",text:"Utiliza filtros para limitar tu b\xFAsqueda y encontrar el que mejor se ajuste a tus necesidades",icon:e(S,{}),color:"purple"})}),e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"2. Agenda y Reserva",text:"Encuentra el momento perfecto que se ajuste a tu horario y reserva tu clase en segundos",icon:e(v,{}),color:"yellow"})})]})}),e(c,{className:"d-flex justify-content-center",lg:4,md:4,sm:12,xs:12,children:e(ue,{children:e("img",{src:"/joven_steps.svg",alt:""})})}),e(c,{lg:4,md:4,sm:12,xs:12,children:i(x,{children:[e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"3. Ingresa a tu Clase",text:"Lleg\xF3 la hora de tu sesi\xF3n, trata de estar 5 minutos antes, asi mismo puedes grabar tu clase",icon:e(T,{}),color:"green"})}),e(c,{md:12,className:"d-flex justify-content-center",children:e(y,{title:"4. Valora y Comparte",text:"Comenta que te parecio la clase; asi mismo puedes recomendar al profesor a otras personas. ",icon:e(v,{onClick:()=>{o()}}),color:"blue"})})]})})]}),e(E,{toggle:o,isOpen:t})]})}const ye=a.div`
  padding: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: ${n.textColor};
  max-width: 340px;
  transition: transform 200ms ease-in;
  background: white;
  margin-bottom:2rem;
`;function Ce({text:t,author:r}){return e(c,{className:"d-flex justify-content-center",md:6,lg:4,sm:12,xs:12,children:i(ye,{children:[e("img",{src:"/icon-comillas.svg",alt:""}),i("p",{className:"px-4",children:[t," ",e("br",{})," ",i("b",{children:[r," "]})," "]})]})})}const we=[{id:1,text:"Fue un \xE9xito total, ya que no solo pude aprender matematicas si no que hice un grupo de estudio para repasar los fines de semana.",author:"Mayra Gutierrez J."},{id:2,text:"Es realmente excelente, las clases son muy amenas, y se aprende mucho siendo la sesi\xF3n individual, lo recomendio mucho, es genial.",author:"Marcos Lara B."},{id:3,text:" Fue una experiencia muy placentera poder estudiar con un profesor personalizado y desde la comodidad de casa. ",author:"Bryan Schuller M."}],ve=a.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin-top:3rem;
`,Ne=a.div`
    padding: 3.3rem;
    padding-top:4.5rem;
`;function $e(){return i(Ne,{children:[e(d,{name:"Descubre qu\xE9 dicen nuestros estudiantes",className:"text-center"}),e(ve,{children:e(x,{children:we.map(t=>e(Ce,{text:t.text,author:t.author},t.id))})})]})}const je=a.div`
  background: ${n.bgLight};
  padding: 30px 3.3rem;
`,ze=a(c)`
  display: flex;
  justify-content: end;
  align-items: center;
  img {
    width: 94%;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`,Fe=a.div`
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
  color: ${n.darkColor};
`;a.span`
  color: ${n.darkColor};
  margin-bottom: 18px;
  font-size:17px;
`;a(J.Control)`
    border-radius: 5px;
    color:${n.textColor} !important;
    outline: none;
    transition: border .1s ease-in-out;
    &:focus {
        box-shadow: none;
        border: 1px solid #ab96db;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color:${n.placeholderColor}
    }
`;const Ie=a.div`
    display:flex;
    flex-direction:row;
    gap:15px;
    justify-content: stretch;
    align-items:center;
    @media screen and (max-width: 750px) {
        flex-direction:column;
        width:100%;
    }
`;function ke(){const[t,r]=u.exports.useState([]);u.exports.useEffect(()=>{o()},[]);const o=async()=>{try{const l=await Y();if(l.status==500)throw l.message;r(l)}catch(l){toast.error(l.toString(),{position:toast.POSITION.TOP_RIGHT})}},[s,m]=u.exports.useState(null);function g(l){m(l)}const C=()=>{console.log(s)};return i(Ie,{children:[e(G,{options:t,placeholder:"\xBFQu\xE9 te interesa aprender?",value:s,onChange:g,isSearchable:!0,isInputSearch:!0}),e($,{text:"Buscar",size:"md-size",onClick:()=>{C()}})]})}function Qe(){return i(N,{children:[e(je,{children:i(x,{children:[e(c,{children:i(Fe,{children:[e(d,{name:"Encuentra tu",name2:"Profesor Particular"}),e(d,{name:"En l\xEDnea o presencial, comienza y agenda tus  lecciones de manera grupal o individual en el   horario que m\xE1s se adpate a t\xED",typeText:"subtitle"}),e(ke,{})]})}),e(ze,{children:e("img",{src:"https://eheiqcszbiikeipnnzhf.supabase.co/storage/v1/object/sign/storage/img-banner.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9yYWdlL2ltZy1iYW5uZXIuc3ZnIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcxNDkxNzQ1LCJleHAiOjE5ODY4NTE3NDV9.5vRRk1ZOz2lZtQF_AZ71QtpeNs0DYwCOvKYX8WrzhF0",alt:"img-banner"})})]})}),e(be,{}),e(re,{}),e(me,{}),e($e,{})]})}export{Qe as default};
