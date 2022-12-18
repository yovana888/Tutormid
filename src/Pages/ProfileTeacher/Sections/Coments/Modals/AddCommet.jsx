import React, { useState} from 'react' 
import NewModal from '../../../../../Components/Groups/NewModal/NewModal'
import Button from '../../../../../Components/Elements/Button/Button'
import { FaStar } from "react-icons/fa";

const colors = { 
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 410
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};


const AddComent = ({isOpen, toggle, idTeacher, nameTeacher}) => {

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }



  return (
    <NewModal isOpen={isOpen} toggle={toggle} title={"Valoración para " + nameTeacher}> 
    
    <>
  

    <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>

    <textarea placeholder='Describe tu reseña sobre el profesor....' 
          style={styles.textarea}
          className='mt-4'
    />

    <div className="d-flex justify-content-around "> 

            <Button
                text={'Cancelar'}
                size="lg-size"
                className="mt-2 mx-2"
                type="submit"
                color='outline'
              />

            <Button
                text={'Publicar'}
                size="lg-size"
                className="mt-2 mx-2 "
                type="submit"
              />
      </div>   


    </>

    </NewModal>
  )
}

export default AddComent
