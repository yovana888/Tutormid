import React, { useState } from "react";
import NewModal from "../../../Components/Groups/NewModal/NewModal";
import TextField from "../../../Components/Elements/TextField/TextField";
import Button from "../../../Components/Elements/Button/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function TabsTeacher({isOpen, toggle}) {
  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={"Editar Perfil"}>
      <>
        <p>hola</p>
      </>
    </NewModal>
  );
}
