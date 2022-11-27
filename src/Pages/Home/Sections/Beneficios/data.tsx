import React from "react";
import { 
    MdSecurity,
    MdOutlineCalendarToday,
    MdMonetizationOn
}  from "react-icons/md";

export const dataBeneficios = [
    {
        id:1,
        text:'Profesores Expertos: Verificamos y confirmamos cuidadosamente el perfil de cada profesor',
        icon:<MdSecurity className="icon"/>
    },
    {
        id:2,
        text:'Aprende en cualquier momento: Toma clases particulares online en un horario que se adapte a tu apretada agenda',
        icon:<MdOutlineCalendarToday className="icon"/>
    },
    {
        id:3,
        text:'Precios asequibles: Elige un profesor experimentado que se ajuste a tu presupuesto',
        icon:<MdMonetizationOn className="icon"/>
    }
]