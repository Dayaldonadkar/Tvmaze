import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [details, setDetails] = useState([]);
  const fetchData = async () => {
    const dayal = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const d = await dayal.json();
    setDetails(d);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-3/5">
        <h1 className="text-3xl py-10">Shows</h1>
        <div className="grid grid-cols-3 gap-x-60 gap-y-8">
          {details.map((currElem) => {
            const { id, show } = currElem;

            console.log(show);
            return (
              <>
                <div className="" key={id}>
                  <div key={id}>
                    <Link to={`/movie/${show.id}`}>
                      <img src={show.image?.medium} alt="movie" />
                    </Link>
                  </div>
                  <div>
                    <span>{show.name}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Data;
