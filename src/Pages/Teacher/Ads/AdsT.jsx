import React from 'react'
import Button from '../../../Components/Elements/Button/Button';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiBookContent } from 'react-icons/bi';
import { AdsTeacher, Card, Edit, Eye,BtnEdit, BtnView } from './Style';




export default function AdsT() {
  return (
    <AdsTeacher>
      <div className='container'>
        <div className='row '>
            <div className='right-side col-md-3 col-12 mb-4'>
                                          {/* ADS */}
              <Card className=''>
                <h4>Mis Anuncios</h4>
                <p className='active'><span className='me-2'><BiBookContent/></span>Matematica Financiera</p>
                <p><span className='me-2'><BiBookContent/></span>Matematica General</p>
                <p><span className='me-2'><BiBookContent/></span>Algrebra</p>
              </Card>
              <Button  icon={<AiOutlinePlusCircle />} text="Crear Otro" color="outline" size='adst-size'/>
            </div>

            <div className='left-side col-md-9 col-12'>
                                          {/* ITEMS */}
              <div className='row'>

                <div className='col-12 col-lg-4'>
                  <Card className='d-flex items'>
                    <img src="/image 70.svg" alt="" />
                      <div className='text-item'>
                        <p>Diridigido</p>
                        <span> Universitarios</span>
                      </div>
                  </Card>
                </div>

                <div className='col-12 col-lg-4'>
                  <Card className='d-flex items'>
                    <img src="/image 71.svg" alt="" />
                    <div className='text-item'>
                      <p>Tarifa</p>
                      <span> S/ 25.00 - 30min</span>
                    </div>
                  </Card>
                </div>

                <div className='col-12 col-lg-4'>
                  <Card className='d-flex items'>
                    <img src="/image 69.svg" alt="" />
                    <div className='text-item'>
                      <p>Nivel</p>
                      <span> General</span>
                    </div>
                  </Card>
                </div>

              </div>
                                          {/* ACERCA DE */}
              <Card className='acerca'>
                <h4>Acerca del curso y mi metodología de enseñanza</h4>
                <p>La metodología del trabajo para comprender este mundo, consiste en explicarla teoría con ejemplos de la vida cotidiana, ya que la Matemática se manifiestaen cualquier parte del mundo de distintas formas:paisajes,pinturas en lienzo,en lasplantas,en animales,en obras artísticas,etc.</p>

              </Card>
                                          {/* HORARIO */}
              <Card className='horario img-fluid'>
                <img src="/horario.png" alt="" className='img-fluid'/>
              </Card>

              <div className='btns d-flex '>
                <BtnEdit><Edit/></BtnEdit>
                <BtnView><Eye/></BtnView>

    
              </div>
            </div>
        </div>
      </div>
    </AdsTeacher>
  )
}
