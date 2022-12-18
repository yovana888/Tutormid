import React, { useState, useEffect } from "react";
import AdsCards from "../../Components/Cards/AdsCards/AdsCards";
import Button from "../../Components/Elements/Button/Button";
import { BodyAds } from "./Styles";
import Loader from "../../Components/Elements/Loader/Loader";
import { toast } from "react-toastify";
import Filter from "./Filter/Filter";
import { getAds } from "../../supabase/services/ads";


export default function Ads() {
  const [isLoad, setIsLoad] = useState(false);
  const [listAds, setListAds] = useState([]);
  const [sizeActual, setSizeActual] = useState(5);
  const [showButton, setShowButton] = useState(true);

  const [filters, setFilters] = useState({
    idcurso:null,
    idnivel:null,
    idtipo:null
  });

  useEffect(() => {
    fetchData(5);
  }, []);

  useEffect(() => {
    if(!Object.values(filters).every(item => item == null)){
      //fetchData(100);
    }
  }, [filters]);

  const fetchData = async (size) => {
    try {
      setIsLoad(true);
      const res = await getAds(size, filters);
      if (res.status == 500) throw res.message;
      setListAds(res);
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsLoad(false);
    }
  };

  const loadMore=()=>{
    const size = sizeActual + 5;
    setSizeActual(size)
    fetchData(size);
  }

  return (
    <BodyAds>
      <Filter setFilters={setFilters} filters={filters}/>
      <div className="container body">
        <h3 className="results">Profesores Disponibles</h3>

        {listAds.length > 0 &&
          listAds.map((item, index) => <AdsCards key={index} item={item} />)}
        {listAds.length > 0 &&  showButton && (
          <div className="btn-ads">
            <Button
              size="ads-size"
              text="Ver más profesores    "
              type="button"
              color="outline"
              className=""
              onClick={()=>loadMore()}
            />
          </div>
        )}

        {isLoad && <><Loader /><br /><br /></>}
      </div>
    </BodyAds>
  );
}
