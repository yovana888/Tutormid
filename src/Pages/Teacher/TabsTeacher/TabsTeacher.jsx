import React, {useState} from 'react'
import NewModal from "../../../Components/Groups/NewModal/NewModal";
import TextField from "../../../Components/Elements/TextField/TextField";
import Button from "../../../Components/Elements/Button/Button";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Sonnet from '../../components/Sonnet';  AQui ira los new modals 




const TabsTeacher = ({isOpen, toggle}) => {

  function handleUploadImage(e) {
    const file = e.target.files[0];
    document.querySelector("#preview").src = URL.createObjectURL(file);
  }


 
  
 

 
  return (

    <NewModal isOpen={isOpen} toggle={toggle} title={"Editar Perfil"}> 
   
    <>
    


<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Datos personales" className='tabs_1'>
          
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
                name="nombre"
                classes='mb-4'
               />

              <TextField
                edge="end"
                label="Fecha Nacimiento"
                type="date"
                placeholder="Insert "
                width100={true}
                name="nombre"
                classes='mb-4'
               />

              <TextField 
                onChange={handleUploadImage}
                edge="end"
                label="Foto de Perfil"
                type="file"
                placeholder="Foto de Perfil"
                width100={true}
                name="uploadImage"
                classes='mb-4'
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
            />

          <Button
              text={'Guadar'}
              size="lg-size"
              className="mt-4 mx-2"
              type="submit"
              
            />

          </div>   
      </Tab>



      <Tab eventKey="profile" title="Sobre mi">
        
        <p className='mt-4 mb-2 '> <b> Describe tu perfil como docente </b>  </p>

        <textarea placeholder='ata trayectoria...' 
          style={{
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            padding: 10,
            margin: "20px 0",
            minHeight: 100,
            width: 410
          }}
          className='mt-2'
    
        />


        <div className="d-flex justify-content-around mt-0"> 

            <Button
                text={'Cancelar'}
                size="lg-size"
                className="mt-2 mx-2 "
                type="submit"
              />

            <Button
                text={'Guadar'}
                size="lg-size"
                className="mt-2 mx-2"
                type="submit"
                
              />
        </div>   
          
      </Tab>


      <Tab eventKey="contact" title="Mis estudios" >
           
            <TextField
                edge="end"
                label="Grado o mension obtenido"
                type="text"
                placeholder="Insert carreer"
                width100={true}
                name="nombre"
                classes='mb-4 mt-4'
              />

            <TextField
                edge="end"
                label="Universidad o Instituto"
                type="text"
                placeholder="Insert University "
                width100={true}
                name="nombre"
                classes='mb-4 mt-4'
               />


          <div className="d-flex justify-content-around mt-0"> 
                <Button
                    text={'Cancelar'}
                    size="lg-size"
                    className="mt-2 mx-2 "
                    type="submit"
                  />

                <Button
                    text={'Guadar'}
                    size="lg-size"
                    className="mt-2 mx-2"
                    type="submit"
                  />
          </div>   

      </Tab>

    </Tabs>


    </>
    </NewModal>
  )
}

export default TabsTeacher
