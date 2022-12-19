import{s as u,c as e,a as x,j as g}from"./index.b242ee12.js";const h=u.button`
    border: none;
    box-sizing: border-box;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
    
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    transition: all 0.3s ease-out;

    height: 40px;
    box-sizing: border-box;

    /* si hay icono, lo separo un poco del texto */
    > svg {
        margin-left: 10px;
        height: 15px;
        width: 15px;
    }

    >img {
        margin-right:10px;
        height: 15px;
        width: 15px;
    }

    /* tamaños */
    &.default-size {
        padding: 10px 50px;
    }

    &.md-size {
        padding: 10px 35px;
        @media screen and (max-width: 750px) {
            width:100%;
        }
    }

    &.small-size {
        padding: 10px 20px;
    }

    &.ads-size {
        padding: 10px 90px;
    }

    &.lg-size {
        padding: 10px 20px;
        width:100%;
    }

    &.adst-size {
        padding: 22px 20px;
        width:100%;
    }

    &.mini-size {
        height: 68px;
        width: 68px;
        padding-left: 0;

    }
    /* fin tamaños */

    /* colores */
    &.primary {
        background: ${e.primaryColor};
        color: white;
    }

    &.secondary {
        background: ${e.secondaryColor};
        color: white;
    }

    &.info {
        background: ${e.blueColor};
        color: white;
    }

    &.group {
      border-radius: 8px 0px 0px 8px;
    }

    &.outline {
        border: 1px solid ${e.primaryColor};
        background: white;
        color: ${e.primaryColor};
    }

    &.outline-blue {
        border: 1px solid ${e.blueColor};
        background: white;
        color: ${e.blueColor};
    }

    &.responsive-right{
        @media screen and (max-width: 960px) {
            margin-top:17px;
            margin-right: auto;
        }
    }


    /* fin colores */

    /* cuando se hace hover */
    &:hover {
        filter: brightness(1.15);
        box-shadow: 0 5px 10px 2px #00000018;
    }

    /* cuando está deshabilitado */
    &:disabled {
        filter: grayscale(1);
        opacity: 0.5;
    }
`;function b({text:o,size:i="default-size",color:r="primary",type:a="button",disabled:s,onClick:t,icon:n,className:d,style:p,isGoogle:l=!1,responsiveRight:c=!1}){return i!=="default-size"?x(h,{onClick:t,type:a,className:`${d} ${i} ${r} ${c?"responsive-right":""}`,style:p,disabled:s,children:[l&&g("img",{src:"/google.png",className:"google"})," ",o," ",n]}):x(h,{onClick:t,type:a,className:`default-size ${d} ${r}`,style:p,disabled:s,children:[l&&g("img",{src:"/google.png",className:"google"})," ",o,"  ",n]})}export{b as B};
