import React, { useContext } from "react";
import {
  PanelBody,
  Estudios,
  Check,
  Welcome,
  Chat,
  Solicitudes,
  Calendar,
} from "./Style";
import ProfileCard from "../../../Components/Cards/ProfileCard/ProfileCard";
import { AuthContext } from "../../../context/auth.context";

export default function PanelT() {
  const { user } = useContext(AuthContext);
  let solicitudes = [
    {
      fecha: "Hoy",
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Pendiente",
          style: "pending",
        },
      ],
    },
    {
      fecha: "10-12-22",
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Aceptado",
          style: "acept",
        },
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Cancelado",
          style: "cancel",
        },
      ],
    },
    {
      fecha: "10-10-22",
      teachers: [
        {
          name: "Lisa Sotelo Quispe",
          materia: "Matematica Financiera",
          status: "Rechazado",
          style: "refused",
        },
      ],
    },
  ];

  return (
    <PanelBody>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-5">
            <ProfileCard
              img={user.photo_url}
              name={user.full_name}
              email={user.email}
              number={user.phone}
              date={user.datebirthay}
              description={user.about_me}
              isStudent={false}
            />
            <Estudios className="mb-5">
              <div>
                <h4>Mis Estudios</h4>
                {user.studies.length > 0 ? (
                   user.studies.map(item=>(
                    <div className="info-studies">
                    <span>
                      <Check />
                    </span>
                    <div>
                      <p>
                        {item.grado}<br />{" "}
                        <span className="uni">{item.universidad}</span>{" "}
                      </p>
                    </div>
                  </div>
                   ))
                ) : (
                  <div className="info-studies">
                      <span>
                        <Check /> Aquí apareceran tus estudios
                      </span>
                  </div>
                )}
              </div>
            </Estudios>
          </div>
          <div className="col-12 col-md-7 ">
            <Welcome>
              <h4>👋 Bienvenid@ {user.full_name.split(' ')[0]}</h4>
              {/* <span>Estas son tus clases programadas para el día de hoy</span> */}
              <div className="list-class">
                <div className="list-details">
                  <ul className="list-info">
                    <li className="hour">9:30 - 10:30</li>
                    <li className="list-name">Julio Perez Chavez</li>
                    <li className="materia-list">
                      Matematica General
                      <Chat />
                    </li>
                  </ul>
                  <ul className="list-info">
                    <li className="hour">9:30 - 10:30</li>
                    <li className="list-name">Julio Perez Chavez</li>
                    <li className="materia-list">
                      Matematica General
                      <Chat />
                    </li>
                  </ul>
                </div>
              </div>
            </Welcome>

            <Solicitudes>
              <h4 className="title-studies">Mis solicitudes de clases</h4>
              {!solicitudes.length ? (
                <>
                  <div className="empty-box">
                    <img src="/image 61.svg" alt="" />
                    <p>Aquí aparecerán tus solicitudes de clases</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="full-box">
                    <div className="list">
                      {solicitudes.map((e, index) => (
                        <>
                          <div
                            className="d-flex justify-content-between align-items-center"
                            key={index}
                          >
                            <span className="fecha">{e.fecha}</span>{" "}
                            <Divider secondaryColor="grey"></Divider>
                          </div>
                          {e.teachers.map((tch, index) => (
                            <ul
                              className="list-unstyled d-flex justify-content-between"
                              key={index}
                            >
                              <li>{tch.name}</li>
                              <li>{tch.materia}</li>
                              <li>
                                <span className={tch.style}>{tch.status}</span>
                              </li>
                              <li>
                                <Calendar />
                              </li>
                            </ul>
                          ))}
                        </>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Solicitudes>
          </div>
        </div>
      </div>
    </PanelBody>
  );
}

function Divider(props) {
  return (
    <hr
      style={{
        backgroundColor: props.secondaryColor,
        height: "1px",
        width: "84%",
      }}
    />
  );
}
