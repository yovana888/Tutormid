import{s as r,c as t,L as c,r as n,A as m,u as x,a as o,j as e,F as u,O as f}from"./index.b242ee12.js";import{l as b,m as v}from"./index.esm.d32e7a11.js";import{d as w}from"./index.esm.f74e9662.js";import{D as s}from"./Dropdown.ef28eb4d.js";import"./iconBase.593b40a0.js";import"./ThemeProvider.921e4875.js";import"./useWindow.94bff523.js";import"./NavbarContext.af5f2dbd.js";import"./extends.a18a37bd.js";import"./Button.12c2e030.js";import"./Button.b317a860.js";const k=r.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  align-items: center;
  background: ${t.darkPurpleColor};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  padding: 0 2rem;
  font-family: 'Inter';
  z-index: 99;

  
  
  .btn-primary {
    background-color: none;

    &:active {
      background-color: transparent;
    }
  }
  .dropdown-menu.item {
    &:hover {
      background: #B2ADCC;
      border-radius: 5px;
    }
  }

  a.dropdown-item {
    &:hover {
      background-color: transparent;
    }
  }

  .dropdown-toggle {
    background: ${t.darkPurpleColor};
    border: none;
    padding: 0;
    margin: 0;
  }
  .dropdown-toggle::after {
    display: inline-block;
    content: none;
    
}

.dropdown-menu.show {
    margin-top: 10px;
    padding: 0;
    background: ${t.darkPurpleColor};
    margin-left: 10px;
    border-color: ${t.darkPurpleColor};


    &:hover::after {
      background: #B2ADCC;
 
    }

    &:hover::before {
      background: #B2ADCC;
    }


    a {
      padding: 1rem;

    }
}

  .space {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
  }

  /*-------------NavItems----------- */
  .nav-items {
    display: flex;
    
    justify-content: space-between;

    @media (max-width: 767px) {
      position: fixed;
      top: 75px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      background: ${t.darkPurpleColor};
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1;
      transform: translateX(-100%);
      transition: all .45s;
      padding-left:3.3rem;

      a {
        padding: 15px;
      }
    }
  }

  .nav-items.open {
      transform: translateX(0);
  }
 /*-------------Links----------- */
  a {
    color: ${t.textMutedColor};
    text-decoration: none;
    position: relative;
    opacity: 0.9;
    padding: 0 2rem;

    &:hover{
      color: ${t.bgWhite};
      opacity: 1;
      font-size: 600;
      transition: all .5s; 
    }

    &:hover::before {
      width: 100%;
    }

    @media (max-width: 767px) {
      &::before {
        background: transparent;
      }



    }
  }

  
/*-------------TOGGLE----------- */
  .nav-toggle {
    display: none;

    @media (max-width: 767px) {
    display: flex;
    width: 50px;
    height: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
  }

/*-------------BAR----------- */
.bar {
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    position: relative;
    width: 32px;
    height: 2px;
    background: ${t.bgAlternative};
    transition: all 0.45s ease-in-out;

    &::before{
      width: 32px;
      transform: translateY(-8px);
      right: 0;
    }

    &::after{
      width: 32px;
      transform: translateY(8px);
    }
    
    &::before, &::after{
      content: "";
      position: absolute;
      height: 2px;
      background: #fff;
      border-radius: 2px;
      transition: all .45s ease-in-out;
    }
  }
}

.nav-toggle.open > .bar {
  transform: translateX(-40px);
  background: transparent;

  &:before {
      width: 32px;
      transform: rotate(45deg) translate(26px, -26px);
  }

  &::after {
    transform: rotate(-45deg) translate(26px, 26px);
  }
}

.dot {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: red;
    border-radius: 50%;
    padding: 5px;
    font-size: 12px;
    right: 128px;
    top: 28px;
    color: #fff; 

}
`,y=r(c)`
  align-items: center;
  padding: 0;
  
img{
  width: fit-content;
  padding-bottom: 15px;
  }

@media (max-width: 767px) {
  display: none;
}
`,C=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 

  img{
    width: 2.7rem;
    height: 2.7rem;
    clip-path:  circle(50%);
    margin-right: 9px;
  }

  @media (max-width: 767px) {
   
  }
`;r(b)`
  text-align: center;
  color: ${t.textMutedColor}; 
  margin-right: 1.3rem;
  font-size: 20px;

  &:hover{
    font-size: 23px;
  }


`;const M=r(w)`
  color: ${t.textMutedColor};
  font-size: 25px;

  &:hover{
    color: #fff;
  }


`,j=[{id:1,path:"/teacher",name:"Panel de Control"},{id:2,path:"/teacher/ads",name:"Mis anuncios"},{id:3,path:"/teacher/chat",name:"Mis mensajes"}],N=[{id:1,path:"/student",name:"Panel de Control"},{id:2,path:"/student/ads",name:"Profesores"},{id:3,path:"/student/chat",name:"Mis mensajes"}];function $(){const[a,d]=n.exports.useState(!1),{user:i,logout:l}=n.exports.useContext(m),[h,z]=n.exports.useState(i.rol=="estudiante"?N:j),g=x();return o(k,{className:"nav-bar",children:[o("div",{className:"space",children:[e(y,{to:"/",children:e("img",{src:"/LogoTutormid.svg",alt:"",style:{width:"130px"}})}),e("div",{className:`nav-items ${a&&"open"}`,children:h.map(p=>e(c,{className:"nav-options",to:p.path,children:p.name},p.id))}),e("div",{className:`nav-toggle ${a&&"open"}`,onClick:()=>d(!a),children:e("div",{className:"bar"})})]}),o(C,{className:"user-items",children:[e("img",{src:i.photo_url,alt:""}),o(s,{children:[e(s.Toggle,{children:e(M,{})}),e(s.Menu,{children:o(s.Item,{onClick:()=>{l(),g("/")},children:[e(v,{})," Salir"]})})]})]})]})}function X(){const{isLoginFunction:a}=n.exports.useContext(m),d=x();n.exports.useEffect(()=>{i()},[]);const i=async()=>{await a()||d("/")};return o(u,{children:[e($,{}),e(f,{})]})}export{X as default};
