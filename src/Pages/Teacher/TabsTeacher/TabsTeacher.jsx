import React, { useState } from "react";
import NewModal from "../../../Components/Groups/NewModal/NewModal";
import TextField from "../../../Components/Elements/TextField/TextField";
import Button from "../../../Components/Elements/Button/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function TabsTeacher({isOpen, toggle}) {
  const TabsTeacher = ({ isOpen, toggle }) => {
    function handleUploadImage(e) {
      const file = e.target.files[0];
      document.querySelector("#preview").src = URL.createObjectURL(file);
    }}
    
  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={"Editar Perfil"}>
      <>
        <p>hola</p>
      </>
    </NewModal>
  );
}
