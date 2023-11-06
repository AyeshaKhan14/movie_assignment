import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const Movie = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getdata = async () => {
    const { data } = await axios.get("http://localhost:8000");
    console.log(data.data);
    setData(data.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter movies by title
  const filteredData = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className='home'>
      <div className='search_div'>
        <input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search by Movie Name'
        />
      </div>
      <div className='mov_div'>
        {filteredData?.map((el) => (
          <Link key={el._id} to={`/movie/${el._id}`}>
            {" "}
            <div className='child_div'>
              <img src={el.image} alt='' />
              <h3>{el.title}</h3>
              <p>Rating : {el.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
