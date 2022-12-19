import React, {useEffect, useState} from 'react'
import Button from '../../Elements/Button/Button';
import { NewSelect } from '../../Elements/NewSelect/NewSelect';
import { ContainerInline } from './Style'
import {
    getCourses,
  } from "../../../supabase/services/ads";
  
export default function NewInputGroup() {
    const [listCourses, setListCourses] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const resCourses = await getCourses();
        if (resCourses.status == 500) throw resCourses.message;
        setListCourses(resCourses);
      } catch (error) {
        toast.error(error.toString(), {
          position: toast.POSITION.TOP_RIGHT,
        });
      } 
    };
    const [selectedOption1, setSelectedOption1] = useState(null);

    function handleSelect1(option) {
        setSelectedOption1(option);
    }

    const search = () => {
        console.log(selectedOption1)
    }

    return (
        <ContainerInline>
            <NewSelect
                options={listCourses}
                placeholder="¿Qué te interesa aprender?"
                value={selectedOption1}
                onChange={handleSelect1}
                isSearchable
                isInputSearch
            />
            <Button text="Buscar" size='md-size' onClick={()=>{search()}}/>
        </ContainerInline>
    )
}