import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  var b;
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const dayal = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const d = await dayal.json();
      setDetails(d);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filterItem = (genres) => {
    const updatedItems = details.filter((currElem) => {
      // console.log(currElem.show.genres.length);
      // let i;

      // for (i = 0; i < currElem.show.genres.length; i++) {
      //   b = b + i;
      //   console.log(b);
      // }
      return currElem.show.genres[0] === genres;
    });

    setDetails(updatedItems);
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/5">
        <input
          className=" bg-white h-10 w-96 rounded-l-lg"
          type="text"
          placeholder="Search shows"
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        <div className="space-x-10">
          <button
            className="bg-black text-white px-3 py-1"
            onClick={() => filterItem("Drama")}
          >
            Drama
          </button>
          <button
            className="bg-black text-white px-3 py-1"
            onClick={() => filterItem("Comedy")}
          >
            Comedy
          </button>
          <button
            className="bg-black text-white px-3 py-1"
            onClick={() => filterItem("Sports")}
          >
            Sports
          </button>
          {/* <button onClick={() => filterItem("Legal")}>Legal</button>

          <button onClick={() => filterItem("Children")}>Children</button>
          <button onClick={() => filterItem("Horror")}>Horror</button>
          <button onClick={() => filterItem("Anime")}>Anime</button>
          <button>Music</button> */}
        </div>
        <h1 className="text-3xl py-10">Shows</h1>
        <div className="grid grid-cols-3 gap-x-60 gap-y-8">
          {loading ? (
            <h1>loading...</h1>
          ) : (
            details
              .filter((value) => {
                const { show, name } = value;
                // console.log(show.genres.length);
                if (searchTitle === "") {
                  return value;
                } else if (
                  show.name.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((item) => {
                const { id, show } = item;

                // console.log(show);
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
              })
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
