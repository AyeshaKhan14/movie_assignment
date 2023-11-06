import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/Home.css";

export const MovieSingle = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getdata = async () => {
    const { data } = await axios.get(`http://localhost:8000/movie/${id}`);
    console.log(data.data);
    setData(data.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className='n'>
      <div className='sin_div'>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "400px" }} src={data.image} alt='' />
        </div>
        <h3>{data.title}</h3>
        <p>{data.rating}</p>
      </div>
    </div>
  );
};
