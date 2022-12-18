import React, { useState, useEffect } from "react";
import { BodyComents } from "./Styles";
import { AiFillStar } from "react-icons/ai";
import Button from "../../../../Components/Elements/Button/Button";
import { getCommentsByTeacher } from "../../../../supabase/services/ads";
import Loader from "../../../../Components/Elements/Loader/Loader";
import { toast } from "react-toastify";
export default function Coments({ idDocente }) {
  const [isLoad, setIsLoad] = useState(false);
  const [comentaries, setComentaries] = useState([]);
  // ------------------------------Acciones para Abrir Modal Add Commet------------------------------

  const [showModalComentary, setshowModalComentary] = useState(false);
  const toggleModalComentary = () => {
    setshowModalComentary(!showModalComentary);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoad(true);
      const res = await getCommentsByTeacher(idDocente);
      console.log(res, "comentarios");
      if (res.status == 500) throw res.message;
      setComentaries(res);
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <BodyComents>
      <h4>Comentarios</h4>
      {isLoad && (
        <>
          <Loader />
          <br />
          <br />
          <br />
        </>
      )}
      {comentaries.length > 0 &&
        comentaries.map((item) => (
          <ComentContent
            img={item.users_rol.photo_url}
            name={item.users_rol.full_name}
            stars={item.score}
            date={
              item.created_at.slice(0, 9) + item.created_at.slice(11, 16)
            }
            text={item.message}
          />
        ))}

      <div className="d-flex justify-content-center">
        <Button
          className="mt-3 "
          text="Publicar un comentario"
          color="outline"
        />
      </div>
    </BodyComents>
  );
}

function ComentContent(props) {
  return (
    <div className="section">
      <div className="image">
        <img src={props.img} alt="" style={{borderRadius:'50%', width:'80px', height:'80px'}}/>
      </div>

      <div className="content ">
        <div className="nameStar">
          <span className="name">{props.name}</span>
          <span className="calification">
            <AiFillStar
              value={{ size: "1.3rem", style: { paddingBottom: "4px" } }}
              color="#FFC538"
            />{" "}
            {props.stars}
          </span>
        </div>

        <div className="date">
          <span>{props.date}</span>
        </div>

        <div className="text">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
