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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoad(true);
      const res = await getAds();
      if (res.status == 500) throw res.message;
      console.log(res);
      setListAds(res);
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <BodyAds>
      <Filter />
      <div className="container body">
        <h3 className="results">Se encontrarón {listAds.length} profesores</h3>
        {isLoad && <><Loader /><br /><br /></>}

        {listAds.length > 0 &&
          listAds.map((item, index) => <AdsCards key={index} item={item} />)}
        {listAds.length > 0 && (
          <div className="btn-ads">
            <Button
              size="ads-size"
              text="Ver más profesores    "
              type="button"
              color="outline"
              className=""
            />
          </div>
        )}
      </div>
    </BodyAds>
  );
}
