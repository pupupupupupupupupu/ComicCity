import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./readComic.css";

const ReadComic = () => {
  const { id } = useParams();
  const [readpages, setReadpages] = useState();

  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/comics/${id}`);
      const json = await response.json();
      console.log(json);

      setReadpages(json);
      // console.log(readpages)
    };

    fetchPages();
  }, [id]);

  if (!readpages) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="comicReaderContainer">
        {readpages.comicImages &&
          readpages.comicImages.map((images, index) => (
            <img key={index} src={images} alt="Comic Page" />
          ))}
      </div>
    </>
  );
};

export default ReadComic;

