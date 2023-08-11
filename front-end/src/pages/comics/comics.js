/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./comics.css";
import SwordKing from "../../extras/SwordKing.png";
import Template from "../../components/comicTemplate/template";

const Comics = () => {
  const [comics, setComics] = useState(null);
  const [selectedComic, setSelectedComic] = useState(null);

  useEffect(() => {
    const fetchComics = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/comics`);
      console.log("test", response);
      const json = await response.json();

      if (response.ok) {
        setComics(json);
      }
    };

    fetchComics();
  }, []);

  const handleComicClick = (comic) => {
    setSelectedComic(comic);
  };

  return (
    <div className="comicsPage">
      <div className="comicsSection">
        <div className="comicsHeading">
          <h1>Comics</h1>
        </div>

        <div className="comicsContainer">
          <div className="comicsContianerHeding">
            <h2>Latest Updates</h2>
          </div>

          <div className="mainContainer">
            <div className="container">
              {comics &&
                comics.map((comic) => (
                  <div
                    key={comic._id}
                    className="container"
                    onClick={() => handleComicClick(comic)}
                  >
                    <Link to={`/comics/${comic._id}`} state={comic}>
                      <Template key={comic._id} comic={comic} />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comics;
