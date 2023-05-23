/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./selectedComic.css";

const Details = () => {
  const { id } = useParams();
  const [selectedcomic, setComic] = useState(null);

  const handleDelete = () => {
    try {
      const response = fetch(`${process.env.REACT_APP_URL}/api/comics/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // do something here if the delete operation was successful
    } catch (error) {
      console.error('Error deleting comic:', error);
    }
    console.log("Deleting")
  };
  
    
  useEffect(() => {
    const fetchComic = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/comics/${id}`);
      const json = await response.json();

      if (response.ok) {
        setComic(json);
        console.log(json);
        console.log("This is Comic Data:", selectedcomic);
        
      }
    };

    fetchComic();
  }, [id]);

  if (!selectedcomic) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comicDetailContainer">
      <div className="detailsPage">
        <div className="coverContainer">
            <img src={selectedcomic.coverImage} alt={selectedcomic.comicName} />
        </div>
        <div className="detailContainer">
          {/* <div className="detailsImage"> */}
            <h2>{selectedcomic.comicName}</h2>
            <p>{selectedcomic.authorName}</p>
            <p>{selectedcomic.genre}</p> <br/> <br/>
            <p>{selectedcomic.description}</p> <br/> 
            <div className="buttons">
             <Link to={`/comics/${selectedcomic._id}/${selectedcomic.comicName}`} state = { selectedcomic }>
              <button className="seperateButton">Read Comic</button>        
             </Link> <br/> <br/>    
             <Link to={`/comics`}>
              <button className="seperateButton" onClick={handleDelete}>Delete Comic</button>        
             </Link>   
            </div>
        </div>
      </div>
    </div>
  );
};

export default Details

