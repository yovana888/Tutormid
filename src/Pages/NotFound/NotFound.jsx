import React, { useState } from "react";
import Button from "../../Components/Elements/Button/Button";
import { Container, ContainerInline, Container50} from "./Style";
import TextField from "../../Components/Elements/TextField/TextField";
import { TfiEmail } from "react-icons/tfi";
import { TiPlus } from "react-icons/ti";
import  { Select }  from "../../Components/Elements/Select/Select";


export default function NotFounf() {
  /**option para el select ejemplo */
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
  const [selectedOption1, setSelectedOption1] = useState(null);
  function handleSelect1(option) {
    setSelectedOption1(option);
  }

  const [selectedOption2, setSelectedOption2] = useState(null);
  function handleSelect2(option) {
    setSelectedOption2(option);
  }

  const [selectedOption3, setSelectedOption3] = useState(null);
  function handleSelect3(option) {
    setSelectedOption3(option);
  }

  
  const [selectedOption4, setSelectedOption4] = useState(optionList[2]);
  function handleSelect4(option) {
    setSelectedOption4(option);
  }
  
  const [selectedOption5, setSelectedOption5] = useState(optionList[2]);
  function handleSelect5(option) {
    setSelectedOption5(option);
  }




  return (
    <Container>
      NotFound
      <Button text="Prueba" icon={<TiPlus />} /> <br />
      <Button text="Prueba" icon={<TiPlus />} color="outline" /> <br />
      <Button text="Prueba" icon={<TiPlus />} color="outline-blue" />
      <br />
      <ContainerInline>
        <Button text="Prueba" color="info" icon={<TiPlus />} />
        <TextField name="prueba" placeholder="prueba" />
      </ContainerInline>
      <br />
      <TextField name="prueba2" label="Password" type="password" />
      <br />
      <TextField
        icon={<TfiEmail />}
        edge="end"
        label="Email"
        placeholder="Your Email"
      />
      <br />
      <TextField name="prueba2" label="100%" width100={true} /><br />
      {/*El container es alternativo*/}
      
      <Container50>
        <p>Select Normal</p>
        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOption1}
          onChange={handleSelect1}
        />

        <p>Select sin la opcion de limpiar ni placeholder</p>
        <Select
          options={optionList}
          value={selectedOption2}
          onChange={handleSelect2}
          isClearable={false}
        />

        <p>Select con Buscador</p>
        <Select
          options={optionList}
          value={selectedOption3}
          onChange={handleSelect3}
          isSearchable={true}
        />

        <p>Default Value</p>
        <Select
          options={optionList}
          value={selectedOption4}
          onChange={handleSelect4}
        />

        <p>Select Multi</p>
        <Select
          options={optionList}
          value={selectedOption5}
          onChange={handleSelect5}
          isMulti
        />

      </Container50>


    </Container>
  );
}
