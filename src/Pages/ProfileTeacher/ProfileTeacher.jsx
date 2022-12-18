import React, { useEffect, useState } from "react";
import {
  ProfileTbody,
  Metodo,
  Horario,
  Estudios,
  ComentsSection,
} from "./Styles";
import AcercaDe from "./Sections/AcercaDe/AcercaDe";
import VideoCard from "../../Components/Cards/VideoCard/VideoCard";
import Coments from "./Sections/Coments/Coments";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Elements/Loader/Loader";
import { toast } from "react-toastify";
import { getProfileTeacher } from "../../supabase/services/ads";
import { useNavigate } from "react-router-dom";
export default function ProfileTeacher() {
  const navigate = useNavigate();
  const { idDocente, idAds } = useParams();
  const [isLoad, setIsLoad] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  useEffect(() => {
    if (idDocente && idAds) {
      fetchData();
    } else {
      navigate("/ads");
    }
  }, []);

  const fetchData = async () => {
    try {
      setIsLoad(true);
      const res = await getProfileTeacher(idDocente, idAds);
      if (res.status == 500) throw res.message;
      console.log(res)
      setDataProfile(res);
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <ProfileTbody>
      {isLoad && (
        <>
          <Loader />
          <br />
          <br />
          <br />
        </>
      )}
      {dataProfile.length > 0 &&
        dataProfile.map((item, index) => (
          <div className="container" key={index}>
            <div className="row flex-row-reverse">
              <div className="col-12 col-md-3 mb-3">
                <VideoCard data={item}/>
              </div>

              <div className="col-12 col-md-9">
                <AcercaDe data={item}/>

                <Metodo className="mt-3 mb-3">
                  <h4>Mis clases y método de enseñanza</h4>
                  <p>
                    {item.users_rol.about_me}
                  </p>
                </Metodo>

                <Horario className="mb-3">
                  <img src="/horario.png" alt="" className="img-fluid" />
                </Horario>

                <Estudios className="mb-3">
                  <h4>Estudios</h4>
                  {item.studies > 0 ?
                    item.studies.map(study=>(
                      <p>{" "} {">"} {study.universidad} - {study.grado}</p>
                    ))
                  : <p>--</p>
                  }
                </Estudios>

                <ComentsSection className="">
                  <Coments idDocente={idDocente}/>
                </ComentsSection>
              </div>
            </div>
          </div>
        ))}
    </ProfileTbody>
  );
}
