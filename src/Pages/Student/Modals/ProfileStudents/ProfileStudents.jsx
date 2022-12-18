import React from 'react'
import NewModal from "../../../../Components/Groups/NewModal/NewModal";
import TextField from "../../../../Components/Elements/TextField/TextField";
import Button from "../../../../Components/Elements/Button/Button";


const  ModalProfileStudents = ({isOpen, toggle}) => {

  return (
    
        <NewModal isOpen={isOpen} toggle={toggle} title={"Editar Perfil"}> 
        <>

        <TextField
            edge="end"
            label="Nombre y Apellidos"
            type="text"
            placeholder="Insert full name"
            width100={true}
            name="nombre"
            classes='mb-4'
          />

        <TextField
            edge="end"
            label="Celular"
            type="text"
            placeholder="Insert phone number"
            width100={true}
            name="phone"
            classes='mb-4'  
          />

        <TextField
            edge="end"
            label="Foto de perfil"
            type="file"
            placeholder=""
            width100={true}
            name="text"
            classes='mb-4 input-file'  
          />

        <div className='d-flex justify-content-center m-4'>
            <img  id='preview'
                  style={{
                    width: '150px', 
                    height: '150px',
                    borderRadius: '50%', 
                    objectFit: 'cover'
                  }}
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                alt="" 
              />
        </div>

        <div className="d-flex justify-content-around "> 

        <Button
            text={'Cancelar'}
            size="lg-size"
            className="mt-4 mx-2 "
            type="submit"
          />

        <Button
            text={'Guadar'}
            size="lg-size"
            className="mt-4 mx-2"
            type="submit"
            
          />

        
        </div>   
        </>



        </NewModal>
   
  )
}

export default ModalProfileStudents
