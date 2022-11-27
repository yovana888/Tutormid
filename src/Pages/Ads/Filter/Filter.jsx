import React, { useState } from 'react'

import {Select} from '../../../Components/Elements/Select/Select'


export default function Filter() {

    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue", disabled: true},
        { value: "white", label: "White" },
        { value: "orange", label: "Orange" },
        { value: "purple", label: "Purple" },
        { value: "prueba", label: "Prueba" },
        { value: "purple2", label: "purple2" }
      ];

      const [selectedOption3, setSelectedOption3] = useState(null);
        function handleSelect3(option) {setSelectedOption3(option);
  }

  return (
    <div className='container'>
        <div>
        <p>Aprendo:</p>
        <Select
            options={optionList}
            value={selectedOption3}
            onChange={handleSelect3}
            isSearchable={true}
          />
      </div>
        
      <div>
        <p>Filtrar profesores por </p>
        <div>
        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOption1}
          onChange={handleSelect1}
        />
        </div>
      </div>
    </div>

    
  )
};
