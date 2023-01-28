import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Moviedetails = () => {
  const { id } = useParams();

  const [products, setProduct] = useState({});

  const getMovie = async () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const newProduct = data.find(
          (currElem) => currElem.show.id === parseInt(id)
        );

        setProduct(newProduct);
      });
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div className="flex justify-center pt-40">
      <div className="w-3/5 space-y-10">
        <h1 className="text-5xl">{products?.show?.name}</h1>
        <div className="flex space-x-10">
          <div className="flex space-x-10 w-4/6">
            <img src={products?.show?.image?.medium} alt="movie" />
            <h1 className="text-sm">{products?.show?.summary}</h1>
          </div>

          <div className="bg-[#f7f7f7] space-y-8 p-5 rounded-xl">
            <h1 className="text-4xl font-thin">Show Info</h1>
            <div className="text-base font-light space-y-5">
              <p className="">
                Network:
                <span className="text-[#3C948B]">
                  {products?.show?.network?.name}
                </span>
              </p>
              <p>
                Schedule:
                <span className="">
                  {products?.show?.schedule?.days} ({products?.show?.runtime}{" "}
                  min)
                </span>
              </p>
              <p>Status:{products?.show?.status}</p>
              <p>Genres:{products?.show?.genres}</p>
              <p>
                Official Site:
                <span className="text-xs">
                  {products?.show?.officialSite}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetails;
