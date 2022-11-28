import React, { useState } from 'react'
import {Select} from '../../../Components/Elements/Select/Select'
import { FilterStyled } from './Styles';
import Button from '../../../Components/Elements/Button/Button';
import { FiFilter } from 'react-icons/fi';

export default function Filter() {

    const materiasList = [
        { value: "literatura", label: "Lenguaje y Literatura" },
        { value: "inglésConversacional", label: "Inglés Conversacional" },
        { value: "programación", label: "Programación"},
        { value: "matematicas", label: "Matemáticas" },
        { value: "inglés", label: "Inglés" },
        { value: "química", label: "Química" },
        { value: "programación", label: "Programación"},
        { value: "calculo", label: "Cálculo" },
        { value: "biología", label: "Biología" },
        { value: "guitarra", label: "Guitarra" },
        { value: "desarroloWeb", label: "Desarrolo Web" },
        { value: "canto", label: "Canto" }
      ];

      const [selectedMaterias, setSelectedMaterias] = useState(null);
      function handleMaterias(option) {setSelectedMaterias(option);
    }

    
    const precioList = [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue"},
      { value: "white", label: "White" },
      { value: "orange", label: "Orange" },
      { value: "purple", label: "Purple" },
      { value: "prueba", label: "Prueba" },
      { value: "purple2", label: "purple2" }
    ];

      const [selectedPrecio, setSelectedPrecio] = useState(null);
      function handlePrecio(option) {setSelectedPrecio(option);
    }


    const disponibilityList = [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue"},
      { value: "white", label: "White" },
      { value: "orange", label: "Orange" },
      { value: "purple", label: "Purple" },
      { value: "prueba", label: "Prueba" },
      { value: "purple2", label: "purple2" }
    ];

      const [selectedDisponibility, setSelectedDisponibility] = useState(null);
      function handleDisponibility(option) {setSelectedDisponibility(option);
    }


    const levelList = [
      { value: "preescolar", label: "Preescolar" },
      { value: "primaria", label: "Niños/Primaria" },
      { value: "secundaria", label: "Secundaria" },
      { value: "universitarío", label: "Universitario"},
      { value: "general", label: "Púbico General" },
    ];

    const [selectedLevel, setSelectedLevel] = useState(levelList[2]);
    function handleLevel(option) {
    setSelectedLevel(option);
    };

function Clear () {
  selectedMaterias = null;
  
 alert ("no funciona")

}


    
  return (
    <FilterStyled className=''>
        <div className='container-fluid mb-1'>
          <div className='row'>
            <div className='col-12 col-md-2'>
              <p>Aprendo:</p>
              <Select
                options={materiasList}
                value={selectedMaterias}
                onChange={handleMaterias}
                isSearchable
                placeholder='Materia'
              />
            </div>
            
            <div className='col-12 col-md-10'>
              <p>Filtrar profesores por </p>
              <div className='teacher-filter'>
                <div className='row'>
                  <div className='col-12 col-sm-4 col-md-3 mb-1'>
                    <Select
                      options={precioList}
                      placeholder="Precio"
                      value={selectedPrecio}
                      onChange={handlePrecio}
                    />
                  </div>

                  <div className='col-12 col-sm-4 col-md-3 mb-1'>
                    <Select
                      options={disponibilityList}
                      placeholder="Disponibilidad"
                      value={selectedDisponibility}
                      onChange={handleDisponibility}
                    />
                  </div>

                  <div className='col-12 col-sm-4 col-md-3 mb-1'>
                    <Select
                      options={levelList}
                      value={selectedLevel}
                      placeholder="Niveles"
                      onChange={handleLevel}
                      isMulti
                    />
                  </div>

                  <div className='col-12 col-md-3'>
                  <Button text="Limpiar Filtros" icon={<FiFilter/>} color="outline-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </FilterStyled>
  )
};
